

const Hero = () => {
   
    return (
        // <header
        //     id="home"
        //     className="flex flex-col w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden"
        // >
        //     <div className="w-full h-full flex flex-col justify-center items-center gap-8">
        //         <div className="flex flex-col gap-2 items-center text-center">
        //             <h1 className="text-6xl font-black md:text-8xl">
        //                 QuickCards
        //             </h1>
        //             <h2 className="text-2xl">
        //                 Never Forget Any Concept Again!
        //             </h2>
        //         </div>

 

        //         <p className='max-w-md text-sm md:text-base text-zinc-500 text-center'>QuickCards is an AI-powered Flash Card Generator that helps
        //             you remember anything</p>
                
        //         <div className='w-full flex items-center justify-center'>
        //         <a href='#pricing' className="px-6 py-3 text-sm sm:text-base rounded-full bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors">
        //            Try it for free!
        //             </a>
        //         </div>
        //     </div>
        // </header>

        
      
        <section id="home" className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Introducing Flips, Your Companion{' '}
              <a href="/sign-in" className="font-semibold text-indigo-600">
                From Now On <span aria-hidden="true" className="absolute inset-0" />
                 <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Learn on the Go, Anywhere, Anytime
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Flips is an AI-powered Flash Card Generator that helps
            you remember anything.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#pricing"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
               30sec Demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </section>
      
    );
};

export default Hero;
