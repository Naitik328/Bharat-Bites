import React from 'react'

const Billing = () => {
  return (
    <div>
        <h1 className='text-2xl font-semibold mt-6 mb-3'>Billing Details</h1>
        <div>
            <form action="" className='flex flex-col gap-4 w-[600px]'>
                <input type="text" placeholder='First Name' className='outline-none border-2 rounded-md px-4 py-2'/>
                <input type="text" placeholder='Last Name' className='outline-none border-2 rounded-md px-4 py-2' />
                <input type="text" placeholder='City' className='outline-none border-2 rounded-md px-4 py-2' />
                <input type="text" placeholder='Street Address' className='outline-none border-2 rounded-md px-4 py-2' />
                <input type="text" placeholder='Phone no.' className='outline-none border-2 rounded-md px-4 py-2' />
                <input type="text" placeholder='Email Address' className='outline-none border-2 rounded-md px-4 py-2' />


            </form>
        </div>
    </div>
  )
}

export default Billing