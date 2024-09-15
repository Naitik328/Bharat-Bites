import React from 'react'

const Payment = () => {
  return (
    <div>
        <h1 className='text-2xl font-semibold mt-6 mb-3'>Payment Methods</h1>
        <div className='flex flex-col gap-4 border-2 rounded-md px-4 py-4'>
            <div className='text-center bg-slate-100 py-3 rounded-md cursor-pointer'>UPI</div>
            <div className='text-center bg-slate-100 py-3 rounded-md cursor-pointer'>Card</div>
            <div className='text-center bg-slate-100 py-3 rounded-md cursor-pointer'>Google Pay</div>
            <div className='text-center bg-slate-100 py-3 rounded-md cursor-pointer'>Cash on delivery</div>
        </div>
    </div>
  )
}

export default Payment