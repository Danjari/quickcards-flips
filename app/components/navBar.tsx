"use client";

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from 'next/image';
import Script from 'next/script';


const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#feature' },
    { name: 'Pricing', href: '#pricing' },
  ]

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        

        <header id="home" className="absolute inset-x-0  top-0 z-50 ">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 fixed top-0 w-full bg-white bg-opacity-90">
          <div className="flex lg:flex-1">
            <a href="#home" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">Fips</span>
              <Image src="/logo.svg" alt="logo" className="h-10 w-auto" width={100} height={100} />
              <span className="text-2xl font-bold text-indigo-600">Flips</span>
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden md:flex md:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex lg:flex-1 md:justify-end">
            <SignedOut>
              <a href="/sign-in" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </SignedOut>
            <SignedIn>
              <UserButton showName={true} />
              
            </SignedIn>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#home" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Flips</span>
                <Image src="/logo.svg" alt="logo" className="h-10 w-auto" width={100} height={100} />
                  
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/sign-in"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
       {/* Google Tag Manager Script */}
       <Script
               src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID});
                `}
            </Script>
      </header>

    );
};

export default NavBar;
