import React from 'react'
import BoxReveal from "@/components/magicui/box-reveal";
import Image from 'next/image';

const TheProcess = () => {
  return (
<div className='max-w-[1200px] mt-8 mx-auto w-full' id='theprocess'>
<div className='flex flex-col'>
<BoxReveal boxColor={"#5046e6"} duration={1}>
        <p className="text-[3.5rem] font-semibold flex flex-col">
          The Process
          <span className='text-lg'>We've always loved serving the best food !!</span>
        </p>
      </BoxReveal>

<div className='w-full h-[400px]'>
  <Image src="/assets/bg3.png" alt=''width={1300} height={1300} className='object-contain flex justify-center'  />
</div>
     </div>
     
    </div>
  )
}

export default TheProcess