import {LampComponent} from './lamp';

const Header = () => {
    return (
        <header id="home" className="flex flex-col w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
            <div className='w-full h-full flex flex-col justify-center items-center gap-8'>
                <div className='flex flex-col gap-2 items-center text-center'>
                    <h1 className='text-6xl font-black md:text-8xl'>QuickCards</h1>
                    <h2 className='text-2xl'>Never Forget Any Concept Again!</h2>
                </div>

                <p className='max-w-md text-sm md:text-base text-zinc-500 text-center'>QuickCards is an AI-powered Flash Card Generator that helps you remember anything wuhgpiawugpawiugpweigbapeigbpeaigjbpWIGJB vpiGUAPEIGJBpigb. piwbfp.</p>
                
                <div className='w-full flex items-center justify-center'>
                <button className="px-6 py-3 text-sm sm:text-base rounded-full bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors">
                   Try it for free!
                </button>
                    </div>
            
            </div>
            
        </header>
    )
}

export default Header;