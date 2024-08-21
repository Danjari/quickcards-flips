// import Image from "next/image";
// import { LucideIcon } from 'lucide-react';
// import { ReactElement } from 'react'; // Add this import
// import  InfoCards  from "./infoCards";



// function Feature() {
//   return (
//     <section id="feature" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
//       {/* <div className='absolute -z-10 h-full w-full overflow-hidden'>
//         <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl"/>
//       </div> */}
      
//       <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
//                <h3 className='text-4xl md:text-5xl font-bold'>No More Time Wasted!</h3>
//         <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-8 justify-between relative ">
//           {InfoCards.map((infoCard) => {
//             return (
//               <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
//                 <p className="text-sm sm:text-base text-center md:text-left">{infoCard.bodyText}</p>
//               </InfoCard>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Feature;

// interface IInfoCardProps {
//     title:string;
//     Icon:LucideIcon;
//     children:ReactElement<any,any>
//   }
  
//   function InfoCard({title,Icon,children}:IInfoCardProps) {
//     return (
//       <div className='w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
//         <div className="p-4 bg-fuchsia-700 rounded-full">
//           <Icon />
//         </div>
//         <div>
//           <h3 className='text-lg font-bold sm:text-xl'>{title}</h3>
//         </div>
//         <div>{children}</div>
//       </div>
//     )
//   }

import InfoCards from "./infoCards";

function Feature() {
  return (
    <section id="feature" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Learn faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to learn with ease
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Getting ready for exams or quizzes? Flips makes it easy to turn your study materials into powerful flashcards,
           helping you master any subject quickly and efficiently. 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {InfoCards.map((infoCard) => (
              <div key={infoCard.id} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <infoCard.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {infoCard.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {infoCard.bodyText}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Feature;
