import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import {DropDown, DropDownItem, SearchStyles} from './styles/DropDown';

const SEARCH_PRODUCTS_QUERY = gql`
    query SEARCH_PRODUCTS_QUERY($searchTerm: string!){
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
    const [findItems, {loading, data,error}] = useLazyQuery(
        SEARCH_PRODUCTS_QUERY,
        {
            fetchPolicy:'no-cache',
        }
    );

    resetIdCounter();
    const {getMenuProps, getInputProps, getComboboxProps} = useCombobox({
        items: [],
        onInputValueChange(){
            console.log('Input Change!');
        },
        onSelectedItemChange(){
            console.log('Selected item chagne');
        }
    })

    return <SearchStyles>
        <div {...getComboboxProps()}>
            <input  {...getInputProps({
                type:'search',
                placeholder:'Search for an item',
                id:'search',
                className:'loading',
            })} />
        </div>
        <DropDown {...getMenuProps()}>
            <DropDownItem>Hii</DropDownItem>
            <DropDownItem>Hello</DropDownItem>
        </DropDown>
    </SearchStyles>
}