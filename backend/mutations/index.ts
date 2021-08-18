//Custom Mutation
//Add to cart
//createCartItem and we could give link to both user and product and the quantity
//the issue we run into here is that when we add an item to a cart and if we add the same item to the cart it should'nt create two separate cart items
//it should just update the existing one to have 1 more in quantity  and that type of custom logic should go in custom mutation
//if we have some sort of code that needs to go past of what the default is in the keystone you can add your own mutation resolvers which is really cool

// typeDefs - what is the name of the method what is the arguments and what it returns  
//resolvers links to nodejs functon  that will will run when those things are  requested upon via the graphql api 

import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";
import addToCart from './addToCart';
import checkout from './checkout';

//as visual studio takes gql for nice syntaxing we will create something of our own so it does this nice highlighting
//Make a fake graphql tagged template literal
const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension({
    
    typeDefs: graphql`
        type Mutation {
            addToCart(productId: ID): CartItem
            checkout(token:String!): Order
        }
    `,
    resolvers:{
        Mutation:{
            addToCart,
            checkout
        }
    }

})