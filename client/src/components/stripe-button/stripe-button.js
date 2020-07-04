import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axois from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_2Y0ST6QurLx4F4b2pj8Q3TjZ';

  const onToken = (token) => {
    axois({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log('Payment error', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="FITS Shop"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
