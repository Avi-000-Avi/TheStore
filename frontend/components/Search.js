import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
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


//We don't want it to fireoff  on component render
// WE want it to fire off   whenver we want kind of like mutation but it's a query
//We use lazy Query
//Bypass apollo client and always go to the network we don't want to storing or caching any of the result we just wanna go directly to the network
//if we don't go directly to the network it try to pull  it from the cache
export default function Search(){
    const [findItems, {loading, data,error}] = useLazyQuery(
        SEARCH_PRODUCTS_QUERY,
        {
            fetchPolicy:'no-cache',
        }
    );

    const items = data?.searchTerms || [];
    const findItemsButChill = debounce(findItems,350);

    resetIdCounter();
    const {inputValue, 
        getMenuProps, 
        getInputProps, 
        getComboboxProps,
        getItemProps,
        highlightedIndex
    } = useCombobox({
        items,
        onInputValueChange(){
            console.log('Input Change!');
            findItemsButChill({
                variables:{
                    searchTerm:inputValue,
                }
            });
        },
        onSelectedItemChange(){
            console.log('Selected item change');
        }
    })  

    return <SearchStyles>
        <div {...getComboboxProps()}>
            <input  {...getInputProps({
                type:'search',
                placeholder:'Search for an item',
                id:'search',
                className:loading ? 'loading':'',
            })} />
        </div>
        <DropDown {...getMenuProps()}>
            {items.map((item,index) =>  (
            <DropDownItem key ={item.id} {...getItemProps({item})} highlighted={index === highlightedIndex}> 
                <img src={item.photo.image.publicUrlTransformed}
                alt ={item.name}
                width="50"/>
                {item.name}
                </DropDownItem>
            ))}
         </DropDown>
    </SearchStyles>
}