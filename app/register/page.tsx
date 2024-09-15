import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
<div className='h-[90vh] w-full'>
<div className='flex justify-between px-6 py-4'>
  <Link href ="/"><button className='px-4 py-1 rounded-md bg-green-600 text-white'>Home</button></Link>
 <Link href  = "/login"><button className='px-4 py-1 rounded-md bg-green-600 text-white'>Create an Account</button></Link> 
</div>

<div className='flex justify-center items-center h-full'>
  <div className='w-[400px] h-[600px] border-2 rounded-lg py-6 px-5'> 

    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-semibold'>Create an Account</h1>
      <Image src="/assets/logo.png" alt='' width={130} height={130}/>
    </div>

    <div>
      <form action="">
        
        <div className='flex flex-col gap-6 mt-12'>

        <div className='flex flex-col gap-2'>
          <label htmlFor="" className='font-semibold'>Full Name</label>
          <input type="email" placeholder='example@gmail.com' className='border rounded-md px-4 py-2 outline-none' />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="" className='font-semibold'>Email</label>
          <input type="email" placeholder='example@gmail.com' className='border rounded-md px-4 py-2 outline-none' />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="" className='font-semibold'>Password</label>
          <input type="email" placeholder='*********' className='border rounded-md px-4 py-2 outline-none' />
        </div>
        </div>
        
        <div className='flex flex-col justify-center w-full mt-9 text-center'>
        <button className='bg-blue-500 w-full py-1 text-white rounded-md text-lg'>Register</button>
        <span className='text-sm mt-3'>Already have an account? <Link href="/login"><span className='text-gray-600'>Login</span></Link></span>

        </div>


      </form>
    </div>
  </div>
</div>
    </div>  )
}

export default Register