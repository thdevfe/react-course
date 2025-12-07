import axios from 'axios';
import { useEffect, useState } from 'react';
import { CheckoutHeader } from './CheckoutHeader';
import './CheckoutPage.css';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cartItems, loadCartItems }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        const fetchCheckoutData = async () => {
            let response = await axios.get('/api/delivery-options?expand=estimateDeliveryTime');
            setDeliveryOptions(response.data);

            response = await axios.get('/api/payment-summary');
            setPaymentSummary(response.data);
        };

        fetchCheckoutData();
    }, [cartItems]);

    return <>
        <title>Checkout</title>
        <CheckoutHeader cartItems={cartItems} />

        <div className="checkout-page">
            <div className="page-title">Review your order</div>

            <div className="checkout-grid">
                <OrderSummary cartItems={cartItems} deliveryOptions={deliveryOptions} loadCartItems={loadCartItems} />
                <PaymentSummary paymentSummary={paymentSummary} loadCartItems={loadCartItems} />
            </div>
        </div>
    </>
}
