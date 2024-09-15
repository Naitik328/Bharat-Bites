import React from 'react'
import TheProcess from './TheProcess'
import BookYourMeal from './BookYourMeal'
import VisitDelicious from './VisitDelicious'
import Footer from './Footer'


const Hero = () => {
  return (
    <div className='flex flex-col gap-10'>
      <TheProcess/>
      <BookYourMeal/>
      <VisitDelicious/>
      <Footer/>
    </div>
  )
}

export default Hero