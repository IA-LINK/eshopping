import React from 'react';
import ReactDOM from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const stripePromise = loadStripe('your_stripe_publishable_key');
       
ReactDOM.render(
    <Elements stripe={stripePromise}>
        <App />
    </Elements>,
    document.getElementById('root')
);
