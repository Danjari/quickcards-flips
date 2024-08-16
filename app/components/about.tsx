import Image from "next/image";
import { LucideIcon } from 'lucide-react';
import { ReactElement } from 'react'; // Add this import
import  InfoCards  from "./infoCards";
import {LampComponent} from './lamp';


function About() {
  return (
    <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
      {/* <div className='absolute -z-10 h-full w-full overflow-hidden'>
        <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl"/>
      </div> */}
      
      <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
               <h3 className='text-4xl md:text-5xl font-bold'>No More Time Wasted!</h3>
        <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-8 justify-between relative ">
          {InfoCards.map((infoCard) => {
            return (
              <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                <p className="text-sm sm:text-base text-center md:text-left">{infoCard.bodyText}</p>
              </InfoCard>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default About;

interface IInfoCardProps {
    title:string;
    Icon:LucideIcon;
    children:ReactElement<any,any>
  }
  
  function InfoCard({title,Icon,children}:IInfoCardProps) {
    return (
      <div className='w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
        <div className="p-4 bg-fuchsia-700 rounded-full">
          <Icon />
        </div>
        <div>
          <h3 className='text-lg font-bold sm:text-xl'>{title}</h3>
        </div>
        <div>{children}</div>
      </div>
    )
  }