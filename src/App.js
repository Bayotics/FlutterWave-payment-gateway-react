import './App.css';
import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';


function App() {
  const config = {
    public_key: 'FLWPUBK-42258c577ef7b18a1067955f4dff9500-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'Bayotics Studios',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };
  return (
   <div className="App">
     <h1>Bayotics, studios Payment</h1>
      <FlutterWaveButton className='flutterWaveButton' {...fwConfig} />
    </div>
  );
}

export default App;
