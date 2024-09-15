import React from 'react'
import BoxReveal from './magicui/box-reveal'
import Image from 'next/image'

const BookYourMeal = () => {
  return (
 

<div className='max-w-[1200px] mx-auto w-full' id='bookyourmeal'>
<BoxReveal boxColor={"#5046e6"} duration={1}>
        <p className="text-[3.5rem] font-semibold flex flex-col ">
        BOOK YOUR MEAL 
          <span className='text-lg'>DELIVERED IN MINUTES!!</span>
        </p>
      </BoxReveal>

<div className='w-full h-[400px] flex justify-around'>
  


  <div className='text-center flex flex-col justify-end'>
  <Image alt='' src="/assets/minithali2.png" width={280} height={280} className='mt-5'/>
  <span className='font-semibold text-2xl'>Mini Thali- ₹50 </span>
  <div>
  <button className='px-4 border-black border rounded-md py-1 text-green-600 font-bold hover:bg-green-600 hover:text-white mt-3'>Add to cart</button>
  </div>
  </div>

  <div className='text-center flex flex-col justify-end'>
  <Image alt='' src="/assets/lgthali.png" width={300} height={300}/>
  <span className='font-semibold text-2xl'>Large Thali- ₹100 </span>
  <div>
  <button className='px-4 border-black border rounded-md py-1 text-green-600 font-bold hover:bg-green-600 hover:text-white mt-3'>Add to cart</button>
  </div>
  </div>
</div>
     </div>
 )
}

export default BookYourMeal