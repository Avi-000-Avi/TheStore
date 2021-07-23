import {PAGINATION_QUERY} from '../components/Pagination';

export default  function paginationField(){
    return  {
        keyArgs:false, //tells apollo we will take care of everything
        read(existing = [],{args,cache}){
            console.log({existing,args,cache});

            const { skip, first} = args;

            //Read the number of items on the page fromt he cache
            const data = cache.readQuery({query:PAGINATION_QUERY});
            console.log(data);
            const count = data?._allProductsMeta?.count;

            const page = skip/first+1;

            const pages = Math.ceil(count/first);

            //Check if we existing items
            const items = existing.slice(skip, skip + first).filter((x) =>x);

            //if there are items
            //and there are'nt enough items to satisfy how many were requested
            //ANd we are on the last page
            //Then just send it
            if(items.length && items.length !== first && page == pages){
                return items;
            }

            if(items.length !== first){
                //We don't have any items we must go to the network to fetch
                return false;
            }

            //If there are items, just return from the cache, we don't need to go to the network
            if(items.length){
                (`console.log(There are ${items.length} items in the cache ! Gonna send them to Apollo`);
                return items;
                }


            return false; //fallback to network



            //First thing it does it asks the read function for those items

            //We can either do one of two things

            //First things we can do is return the items because they are already in the cache

            //The other thing we can do is to return false from here,(network request)

        },
        merge(existing,incoming,{args}){
            const {skip, first} = args;

            //THis runs when the apollo client comes back from the network with our prouct
            console.log(`Merging items from the network ${incoming.length}`);
            console.log(incoming);

            const merged = existing?existing.slice(0):[];

            merged.push(incoming);

            for(let i = skip;i<skip+incoming.length;++i){
                merged[i] = incoming[i - skip];
            }

            console.log(merged);
            //Finally we return the merged items form the cache

            return merged;
        }
    }
}