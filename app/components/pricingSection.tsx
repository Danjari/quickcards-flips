import PricingCards from './pricingCards';
import { CheckCheck } from 'lucide-react';

const PricingSection = () => {
    return (
    <section id="pricing" className="h-fit min-h-screen  w-full flex flex-col items-center justify-center  gap-8 p-8">
        <h4 className="text-4xl md:text-5xl font-bold">Pricing</h4>
        <div className=' grid grid-cols-1 grid-rows-2 sm:grid-rows-1 md:grid-cols-2 justify-center items-center w-full max-w-3xl gap-10'>
            {PricingCards.map((pricingCard) => {
            return (
                <PricingCard oneliner={pricingCard.oneliner} title={pricingCard.title} price={pricingCard.price} features={pricingCard.features} key={pricingCard.id } link={pricingCard.link}/>
            )
            })}
            </div>
        </section>
    )
}
export default PricingSection;

interface IPricingCardProps {
    title:string;
    price:number;
    features:string[]
    oneliner:string;
    link:string;
    
  }
  
  function PricingCard({title,price,features = [],oneliner,link}:IPricingCardProps) {
    return (
      <div className='h-full w-full rounded flex flex-col p-8 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
        <div className='flex flex-col gap-4'>
          <div>
            <h6 className='text-2xl'>{title}</h6>
            <p className='text-sm text-zinc-500'>{oneliner}</p>
          </div>
          <p className='text-4xl font-bold'>
            ${price} <span className='text-sm font-normal text-zinc-500'>/ Year</span>
          </p>
          <a href={link} className='bg-fuchsia-700 rounded p-2 text-sm transition-colors text-center text-bold hover:bg-fuchsia-800'>Get Started!</a>
        </div>
       
        <div className='flex flex-col w-full gap-3 mt-4'>
          {features.map((feature, i) => {
            return(
              <p key={i} className='text-sm text-zinc-500 flex items-center gap-2'>
                <span>
                  <CheckCheck />
                </span>
                {feature}
              </p>
            )
          })}
        </div>
      </div>
    )
  }
