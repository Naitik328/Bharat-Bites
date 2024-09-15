import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <>
    <div className='bg-[url("/assets/bg2.png")] bg-cover w-full md:h-[700px]'>
   <Navbar/>

    </div>
    
    <Hero/>
    </>
  )
}

export default Home