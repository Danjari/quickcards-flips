// Dashboard for the user
"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogPanel } from '@headlessui/react'
import Link from "next/link";
import DropZone from "../components/DropZone";

import { UserButton } from '@clerk/nextjs';
import Image from "next/image";

const UploadPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-white border shadow">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" className="h-10 w-10 mr-2" width={100} height={100} />
          <div className="hidden md:block text-2xl font-bold text-indigo-600">Flips</div>
        </div>
        <div>
          <Link href="/dashboard" className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition">
            Back to Dashboard
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        {/* Mobile Sidebar */}
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#home" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Flips</span>
                <Image
                  alt=""
                  src="/logo.svg"
                  className="h-8 w-auto"
                  width={100}
                  height={100}
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute bottom-0 items-center p-4 bg-white opacity-90" onClick={() => setMobileMenuOpen(false)}>
                <UserButton showName={true} />
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
      <DropZone />
    </div>
  );
};

export default UploadPage;