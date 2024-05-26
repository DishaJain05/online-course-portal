'use client';
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'

function Courses() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 p-5'>
      {/*Left corner*/}
      <div className='col-span-3'>
        {/*Banner */}
        <WelcomeBanner/>
        
        {/*CourseList  */}

        <CourseList/>
      </div>
      {/*right corner*/}
      <div>
        Right section
      </div>
    </div>
  )
}

export default Courses
