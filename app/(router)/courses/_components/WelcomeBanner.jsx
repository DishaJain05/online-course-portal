import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items bg-white rounded-xl p-5'>
      <Image src='/panda.jpg' alt='panda'
      width={50} height={50}/>
      <div>
    <h2>Welcome to Online Academy</h2>
    <h2>Explore, Learn and build all real Life Projects</h2>
    </div>
    </div>

  )
}

export default WelcomeBanner
