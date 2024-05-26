import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items bg-white rounded-xl p-5'>
      <Image src='/panda.jpg' alt='panda'
      width={70} height={70}/>
      <div>
    <h2 className='font-bold text-[29px]'>Welcome to <span className='text-primary'>'EduVerse'</span> Online Academy</h2>
    <h2 className='text-gray-500'>Explore, Learn And Bild All Real Life Projects</h2>
    </div>
    </div>

  )
}

export default WelcomeBanner
