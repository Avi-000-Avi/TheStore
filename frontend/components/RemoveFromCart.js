import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";

const BigButton = styled.button`
    font-size:3rem;
    background:none;
    border:0;
    &:hover{
        color:var(--red);
        cursor: pointer;
    }
`;

const REMOVE_FROM_CART = gql`
  mutation REMOVE_FROM_CART($id:ID!){
    deleteCartItem(id:$id){
      id
    }
  }
`;

//Alternative to Refetch Queries and also faster
//When you delete an item make sure you refetch the users cart  and we rerender it
//We don't need to make a second trip to the server
// Simply pop or evict it from the cache
//remove an item come back and run update and give us access to both entire apollo cache as well as the information that came back from the API
//cache.identify(payload.data.deleteCartItem) is like 'CartItem:647298274324823749238'
 
function update(cache,payload){
    cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function RemoveFromCart({id}){
    const [removeFromCart,{loading}]= useMutation
    (REMOVE_FROM_CART,{
        variables:{id},
        update,
    });

    return (
    <BigButton
      onClick={removeFromCart}
      disabled={loading}
      type="button"title="Remove this item from the cart">&times;</BigButton>
    );
}