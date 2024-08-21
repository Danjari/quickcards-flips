'use client'
import CheckoutPage from '@/app/components/CheckoutPage'
import convertToSubcurrency from '@/lib/convertToSubcurrency'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined')
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
export default function StripeLayout(){
    // amount the user wants to pay either Free or 29.99 ( list price )
    const amount = 29.99
    return (    
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center overflow-true">
        <div className='mb-4 mt-4 mx-auto bg-white shadow-xl p-4 rounded-2xl max-w-md w-full'>
            <h1 className='text-2xl font-extrabold mb-4 text-center text-indigo-700'>Proceed to Payment</h1>
            <h2 className='text-xl mb-4 text-center text-gray-700'>
                Lifetime cost of  
                <span className='font-bold text-indigo-600'> ${amount}</span>
            </h2>
            <Elements
                stripe={stripePromise}
                options ={{
                    mode: 'payment',
                    amount:convertToSubcurrency(amount),
                    currency: 'usd',
                }}
            >
                <CheckoutPage amount={amount}/>
            </Elements>
        </div>
    </div>
    )
}