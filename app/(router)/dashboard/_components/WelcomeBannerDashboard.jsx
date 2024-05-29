import Image from 'next/image'
import React from 'react'

function WelcomeBannerDashboard(user) {
  return (
    
      <div className=' bg-purple-100 rounded-sm p-5 flex gap-5 items-center'>
      <Image src='/panda.jpg' alt='panda'
      width={70} height={70}/>
      <div>
      <h2 className='font-bold text-[29px]'>Welcome Back, <span className='text-primary'>User: {user.fullName}</span></h2>
    <h2 className= 'text-[16px]font light  text-slate-500'>Lets Begin the courses
    Keep it up and improve your progress</h2>
    </div>
    </div>
    
  )
}

export default WelcomeBannerDashboard
