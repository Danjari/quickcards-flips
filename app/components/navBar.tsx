import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-black w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex flex-1 justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-white text-lg font-bold">QuickCards</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#pricing" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
              </div>
            </div>
            <div>
              {/*Login Button */}
              <button className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Login</button>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#pricing" className="text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
