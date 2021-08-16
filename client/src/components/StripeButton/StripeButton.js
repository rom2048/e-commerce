import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JKo27H5kKRBup307hDYqjSDieLvY4ucp1oOzCqKmtNACC4x4lRId6tm8x6PqDg7Ss87mnYjjUHMv48MXYzb8Ta2002waPCwJn';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There is an issue with your payment. Please sure you use the provided credit cart.');
    })
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='e-commerce'
      shippingAddress
      billingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;