"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CartModal from './CartModal'

const Navbar = () => {

  const [cartOpen , setCartOpen] = useState(false);

  return (
    <div className='w-full h-18 flex justify-between items-center px-8 '>
     <div><Image src="/assets/logo.png" width={160} height={160} alt='' className=''/></div>
     <div className=''>
      <ul className='flex gap-6 text-xl font-semibold border px-5 py-1 rounded-lg bg-white border-black'>
        <Link href="/"><li className='hover:underline underline-offset-4'>Home</li></Link>
       <Link href="#theprocess"> <li className='hover:underline underline-offset-4'>The Process</li></Link>
        <Link href="#bookyourmeal"><li className='hover:underline underline-offset-4'>Book Your Meal</li></Link>
        <Link href ="#plans"><li className='hover:underline underline-offset-4'>Our Plans</li></Link>
      </ul>
     </div>
     <div className='flex items-center gap-6'>
      <div>
      <Image src="/icons/shoppingbag.png" alt="" width={40} height={40} className='border rounded-md p-1 cursor-pointer' onClick={()=>setCartOpen((prev)=>!prev)}/>
      {cartOpen && (
          <CartModal/>
        )}
        </div>
      <Link href = "/login"><button className='bg-green-600  text-white px-4 py-1 rounded-xl text-lg'>Sign In</button></Link>
     </div>
    </div>

  )
}

export default Navbar