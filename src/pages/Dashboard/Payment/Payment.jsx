import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


// TODO: add publishable key;
const stripPromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div>
            <div>
                <h1 className="text-6xl text-center uppercase">Payment</h1>
            </div>
            <div>
                <Elements stripe={stripPromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;