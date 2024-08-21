
'use client'
import { useState, useEffect } from 'react'
import NavBar from './components/navBar'
import Hero from './components/Hero'
import About from './components/Feature'
import PricingSection from './components/pricingSection'
import { useUser } from '@clerk/nextjs'
import {useRouter} from "next/navigation"


export default function Example() {
  const router = useRouter()
  const{isSignedIn} = useUser()

  useEffect(() => {
    if (typeof window!== "undefined" && isSignedIn) {
      router.push('/dashboard')
    }
  }, [isSignedIn, router])


  return (
    <main>
      <div className="bg-white">
        <NavBar />
        <Hero />
        <About />
        <PricingSection />
     
   
      </div>

    </main>
  )
}


