import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import SickButton from './styles/SickButton';
import { useState } from 'react';
import nProgress from 'nprogress';
import { useMutation } from '@apollo/client';
import  gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { useRouter } from 'next/dist/client/router';
import { useCart } from '../lib/cartState';

const CheckoutFormStyles = styled.form`
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;


const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token:String!){
    checkout(token:$token){
      charge
      total
      items {
        id
        name
      }
    }
  }
`;


const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  const [error,setError] = useState();
  const [loading,setLoading] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const {closeCart} = useCart();

  const [checkout,{error:graphQlError}] = useMutation(
    CREATE_ORDER_MUTATION,{
      refetchQueries:[{query:CURRENT_USER_QUERY}]
    }
  )
  async function handleSubmit(e) {
    //1.stop the form from submitting and turn the loader on
    e.preventDefault();
    setLoading(true); 
    console.log('We gotta do some work..');
    //2.Start the page transition
    nProgress.start();
    //3.Create the payment method via stripe(Token comes back here if successful)
    const {error,paymentMethod} = await stripe.createPaymentMethod({
      type:'card',
      card:elements.getElement(CardElement)
    })

    console.log(paymentMethod);
    //4.Handle any errrors from stripe
    if(error){
      setError(error);
      nProgress.done();
      return;//stops the checkout from happening
    }

    //5.Send the token from step 3 to our keystone server via a custom mutation
    const order = await checkout({
      variables:{
        token:paymentMethod.id
      }
    });
    console.log(`Finished with the Order!!`);
    console.log(order);
    //6.Change the page to view the order
    router.push({
      pathname:'/order/[id]',
      query:{
        id:order.data.checkout.id,
      },
    });  

    //7.close the cart
    closeCart();
    
    //8.Turn the loader off
    setLoading(false);
    nProgress.done();
  }

  return (
      <CheckoutFormStyles onSubmit={handleSubmit}>
        {error && <p style={{fontSize:'12px'}}>{error.message}</p>}
        {graphQlError && <p style={{fontSize:'12px'}}>{graphQlError.message}</p>}

        <CardElement />
        <SickButton>Check Out Now</SickButton>
      </CheckoutFormStyles>
  );
}

function Checkout(){
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm/>
    </Elements>
  )
}

export { Checkout };
