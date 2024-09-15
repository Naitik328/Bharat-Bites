import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CartModal = () => {

    const cartItems = 4;
  return (
    <div className='absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-20 right-3 flex-col gap-5 z-20 w-max'>
        {!cartItems ? (
            <div>Cart is Empty</div>
        ):(
            <div className='flex flex-col gap-8'>
                {/* PRODUCT */}
            <div className='flex gap-4 w-full'>
              <Image
              src="/assets/minithali2.png"
              width={72}
              height={96}
              alt=''
              className='rounded-md object-cover'/>

              <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
               {/* TOP */}
               <div className='flex gap-20 items-center'>
                <h1>Mini Thali</h1>
                <span className=''>₹50</span>
               </div>
              </div>
              <div className='flex justify-between'>
                <h2>Qyt: <span>1</span></h2>
                <span className='text-blue-500 cursor-pointer hover:text-blue-600'>Remove</span>
              </div></div>
              
            </div>

               {/* PRODUCT */}
               <div className='flex gap-4 w-full'>
              <Image
              src="/assets/lgthali.png"
              width={72}
              height={96}
              alt=''
              className='rounded-md object-cover'/>

              <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
               {/* TOP */}
               <div className='flex gap-20 items-center'>
                <h1>Large Thali</h1>
                <span>₹100</span>
               </div>
              </div>
              <div className='flex justify-between'>
                <h2>Qyt: <span>1</span></h2>
                <span className='text-blue-500 cursor-pointer hover:text-blue-600'>Remove</span>
              </div></div>
              
            </div>
            
            <div>
            <div className='flex justify-between mt-3'>
                <h2>Subtotal</h2>
                <span>₹150</span>
              </div>
              <h2>Shipping and taxes calculated at checkout</h2>
              <div className='flex justify-center mt-6'>
                <Link href ="/checkout"><button className='px-3 py-1 ring-1 ring-white bg-black text-white rounded-md'>Checkout</button></Link>
              </div>
              </div>
            </div>
        )}
        
    </div>
  )
}

export default CartModal