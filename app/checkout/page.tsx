import Billing from '@/components/Billing'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Payment from '@/components/Payment'
import Image from 'next/image'
import React from 'react'

const Checkout = () => {
  return (
    <>
        <Navbar/>
        <div className='max-w-[1400px] mx-auto flex justify-around py-4 mb-4'>

<div className='w-[60%]'>


            <div className=' px-5 bg-white border-2  rounded-lg '>
                {/* PRODUCT */}
             <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
            <div className='bg-white px-2 py-2'>
            <Image src="/assets/lgthali.png" alt='' width={130} height={130}/>
            </div>
            <div className='flex flex-col gap-3'>
            <span className='text-xl font-semibold'>Large Thali</span>
<span className='text-gray-600'>Desc</span>
            </div>
        </div>

        <div>
            <span className='text-lg font-semibold'>
                        ₹100

            </span>
        </div>
             </div>

             <hr />

                             {/* PRODUCT */}
                             <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
            <div className='bg-white px-2 py-2'>
            <Image src="/assets/minithali2.png" alt='' width={130} height={130}/>
            </div>
            <div className='flex flex-col gap-3'>
            <span className='text-xl font-semibold'>Mini Thali</span>
<span className='text-gray-600'>Desc</span>
            </div>
        </div>

        <div>
            <span className='text-lg font-semibold'>
                        ₹50

            </span>
        </div>
             </div>

          

            </div>
            <Billing/>
            </div>
           {/* PRICE & PAYMENT */}
           <div className='w-[25%]'>
            
           
            <div className=' bg-white rounded-lg px-6 py-5 border-2'>
                <div className='flex flex-col gap-2'>
           <div className='flex justify-between'>
            <span className='font-semibold text-gray-700 text-lg'>Subtotal</span>
            <span className='font-semibold'>₹150</span>
           </div>

           <div className='flex justify-between'>
            <span className='text-gray-600'>Delivery Fee</span>
            <span className='font-semibold'>₹0</span>
           </div>

           <div className='flex justify-between'>
            <span className='text-gray-600'>Discount</span>
            <span className='font-semibold'>5%</span>
           </div>

           </div>
 
     <hr className='mt-4 mb-4'/>
           <div className='flex justify-between'>
            <span className='font-bold text-lg'>Total Amount</span>
            <span className='text-lg font-semibold'>₹150</span>
           </div>
            
            <div className='flex'>
            <button className='bg-green-600 w-full px-4 py-1 text-white mt-6 rounded-lg'>Place Order</button>

            </div>
            </div>

            <Payment/>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Checkout