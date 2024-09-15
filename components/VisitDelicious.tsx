import React from 'react'
import BoxReveal from './magicui/box-reveal'

const VisitDelicious = () => {
  return (


<div className='flex flex-col w-full items-center mt-8 max-w-[1200px] mx-auto' id='plans'>
<BoxReveal boxColor={"#5046e6"} duration={1}>
        <p className="text-[3.5rem] font-semibold flex flex-col text-center">
Our Plans          <span className='text-lg'>Come grab a bite at our little corner of wynwood</span>
        </p>
      </BoxReveal>

<div className='w-full h-[200px] flex justify-between mt-10'>
  <div className='flex flex-col items-center gap-3'>

    <div className='h-[90px] w-[250px] bg-green-600 rounded-lg text-white flex justify-center items-center '>
    <span className='font-bold text-2xl tracking-wider'>Weekly- ₹999</span>
  </div>
  <div>
  <button className='px-4 border-black border rounded-md py-1 text-green-600 font-bold hover:bg-green-600 hover:text-white mt-3'>Add to cart</button>
  </div>
  
  </div>

  <div className='flex flex-col items-center gap-3'>

  <div className='h-[90px] w-[250px] bg-green-600 rounded-lg text-white flex justify-center items-center'>
    <span className='font-bold text-2xl tracking-wider'>Monthly- ₹3499</span>
  </div>
  <div>
  <button className='px-4 border-black border rounded-md py-1 text-green-600 font-bold hover:bg-green-600 hover:text-white mt-3'>Add to cart</button>
  </div>
  </div>

  <div className='flex flex-col items-center gap-3'>

  <div className='h-[90px] w-[250px] bg-green-600 rounded-lg text-white flex justify-center items-center'>
    <span className='font-bold text-2xl tracking-wider'>Quarterly- ₹8499</span>
  </div>
  <div>
  <button className='px-4 border-black border rounded-md py-1 text-green-600 font-bold hover:bg-green-600 hover:text-white mt-3'>Add to cart</button>
  </div>
  </div>
  </div>

     </div>
        
     )
}

export default VisitDelicious