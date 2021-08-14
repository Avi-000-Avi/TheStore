import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/dist/client/router';
import {DropDown, DropDownItem, SearchStyles} from './styles/DropDown';

const SEARCH_PRODUCTS_QUERY = gql`
    query SEARCH_PRODUCTS_QUERY($searchTerm: String!){
        searchTerms:allProducts(where:{
            OR: [
                {name_contains_i:$searchTerm},
                {description_contains_i:$searchTerm},
            ] 
        }){
            id
            name
            photo{
                image{
                    publicUrlTransformed
                }
            }
        }
    }
`;


export default function Search(){
    const router = useRouter();
    
//We don't want it to fireoff  on component render
// WE want it to fire off   whenver we want kind of like mutation but it's a query not a mutation
//THat's wy We use lazy Query

//Understand by removing this fetchpolicy
//Bypass apollo cache and always go to the network we don't want to storing or caching any of the result we just wanna go directly to the network
//if we don't go directly to the network it try to pull  it from the cache
    const [findItems, {loading, data,error}] = useLazyQuery(
        SEARCH_PRODUCTS_QUERY,
        {
            fetchPolicy:'no-cache',
        }
    );

    const items = data?.searchTerms || [];
   //fireoff but don't fireoff that often  that's called debouncing a function
   //fireoff but holdon for couple of secs and then see maybe if we fired it 6 times within a sec we wait for one sec and only fire it once after it has elapsed
   //Run only once in a 350 millisecs
    const findItemsButChill = debounce(findItems,350);

    //Takes care of server side render issues
    resetIdCounter();

    const {
        isOpen,
        inputValue, 
        getMenuProps, 
        getInputProps, 
        getComboboxProps,
        getItemProps,
        highlightedIndex
    } = useCombobox({
        items,
        onInputValueChange(){
            findItemsButChill({
                variables:{
                    searchTerm:inputValue,
                },
            });
        },
        onSelectedItemChange({ selectedItem }) {
            router.push({
              pathname: `/product/${selectedItem.id}`,
            });
          },
          itemToString:(item) => item?.name || '',
    });  

    return (
    <SearchStyles>
        <div {...getComboboxProps()}>
            <input  {...getInputProps({
                type:'search',
                placeholder:'Search for an item',
                id:'search',
                className:loading ? 'loading':'',
            })} />
        </div>
        <DropDown {...getMenuProps()}>
            {isOpen && items.map((item,index) =>  (
            <DropDownItem {...getItemProps({ item,index })} key ={item.id}  highlighted={index === highlightedIndex}> 
                <img src={item.photo.image.publicUrlTransformed}
                alt ={item.name}
                width="50"/>
                {item.name}
                </DropDownItem>
            ))}
            {isOpen && !items.length && !loading && (
                <DropDownItem>Sorry, No items found for {inputValue}</DropDownItem>
            )}
         </DropDown>
    </SearchStyles>
    );
}