

import PricingCards from './pricingCards';


const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-20 xl:pt-24 xl:pb-28 bg-white text-black"
      style={{ backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: 'center' }}
    >
      <div className="container px-4 mx-auto">
        <div className='flex flex-col items-center justify-center gap-4'>
            <span className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
            </span>
            <h3 className="mb-4 text-3xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">
            Simple No Tricks Pricing
            </h3>
            <p className="mb-12 text-lg md:text-xl text-center justify-center text-coolGray-500 font-medium">
            We've been there, we know how hard it is. Pick a plan that best suits you.
            </p>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {PricingCards.map((pricingCard) => (
            <div key={pricingCard.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <PricingCard
                title={pricingCard.title}
                price={pricingCard.price}
                features={pricingCard.features}
                oneliner={pricingCard.oneliner}
                link={pricingCard.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;


// app/components/PricingCard.tsx

import { CheckCheck } from 'lucide-react';

interface IPricingCardProps {
  title: string;
  price: number;
  features: string[];
  oneliner: string;
  link: string;
}

function PricingCard({ title, price, features, oneliner, link }: IPricingCardProps) {
  return (
    <div className="flex flex-col items-center pt-10 px-8 pb-0 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500">
      <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-white bg-indigo-600 font-medium uppercase rounded-9xl">
        {oneliner}
      </span>
      <h3 className="mb-4 text-lg md:text-xl text-indigo-600 font-medium">{title} Plan</h3>
      <div className="mb-4">
        <span className="relative -top-6 right-1 text-2xl text-coolGray-900 font-medium">$</span>
        <span className="text-5xl text-coolGray-900 font-medium">{price}</span>
        <span className="text-3xl text-coolGray-900 font-medium">{price === 0 ? '' : '/one-time'}</span>
      </div>
      <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">Billed {price === 0 ? 'never' : 'one-time'}</p>
      <a
        href={link}
        className="inline-block py-3 px-7 w-full mb-4 text-white font-medium text-center bg-indigo-600 hover:bg-indigo-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
      >
        Get Started
      </a>
      <ul className="self-start mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center mb-3 text-coolGray-500 font-medium">
            <CheckCheck className="text-blue-500 mr-3" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
     
    </div>
  );
}


