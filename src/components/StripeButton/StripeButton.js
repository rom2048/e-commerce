import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JKo27H5kKRBup307hDYqjSDieLvY4ucp1oOzCqKmtNACC4x4lRId6tm8x6PqDg7Ss87mnYjjUHMv48MXYzb8Ta2002waPCwJn';

  const onToken = token => {
    console.log(token);
    alert('Payment Successfull');
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