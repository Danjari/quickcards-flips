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
    return <main className = 'max-w-xl mx-auto p-10 text-white text-center  m-10 border rounded-2xl  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <div className='mb-10 mt-10 mx-auto '>
            <h1 className='text-4xl font-bold mb-4'>Proceed to Payment</h1>
            <h2 className='text-2xl mb-4'>
                Lifetime cost of  
                <span className='font-bold'> ${amount}</span>
            </h2>
        </div>
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
    </main>
}