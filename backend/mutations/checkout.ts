/* eslint-disable */
import { KeystoneContext, SessionStore } from '@keystone-next/types';
import { Session } from '../types';


import { CartItemCreateInput, CartItemsCreateInput, OrderCreateInput } from '../.keystone/schema-types';

const graphql = String.raw;


interface Arguments{
  token: string
}

async function checkout(
  root: any,
  { token }: Arguments,
  context: KeystoneContext
): Promise<OrderCreateInput> {
  //1. Make sure they are signed in
  const userId = context.session.itemId;
  if (!userId) {
    throw new Error('You must be logged in to do this!');
  }
  //1.5 Query the current user
  const user = await context.lists.User.findOne({
    where: {id:userId},
    resolveFields:`
      id
      name
      email
      cart{
        id
        quantity
        product{
          name
          price
          description
          id 
          photo{
            id
            image{
              id
              publicUriTransformed
            }
          } 
        }
      }
    `
  })
  console.dir(user,{depth:null})
 
  //2.Calculate the total price for their order
  const cartItems = user.cart.filter(cartItem => cartItem.product);//filter the deleted products
  const amount = cartItems.reduce(function(tally:number,cartItem:CartItemCreateInput){
    return tally + cartItem.quantity  * cartItem.product.price;
  },0);
  console.log(amount);
  //3. Create the payment with the stripe
  //4. Covert the cartitems to order items
}

export default checkout;
