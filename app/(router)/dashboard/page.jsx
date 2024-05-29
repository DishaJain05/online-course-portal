"use client";
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import WelcomeBannerDashboard from './_components/WelcomeBannerDashboard';
import SideBanners from '../courses/_components/SideBanners';
import GlobalApi from '@/app/_utils/GlobalApi';
import InProgressCourseList from './_components/InProgressCourseList';

function Dashboard() {
  const {user}=useUser();
  const[userEnrolledCourses,setuserEnrolledCourses]=useState([]);

  useEffect(()=>{
    user&&getAllUserEnrolledCourses();

  },[user])

  /*
  *Get all user enrolled course list
  */

  const getAllUserEnrolledCourses=()=>{
    GlobalApi.getUserAllEnrolledCourseList(user.primaryEmailAddress.emailAddress).then(resp=>{
      console.log(resp);
      setuserEnrolledCourses(resp.userEnrollCourses);
    })
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 p-5 gap-5'>
      {/*Left corner*/}
      <div className='col-span-3'>
        {/*Banner */}
        <WelcomeBannerDashboard user={user}/>
        <InProgressCourseList userEnrolledCourses={userEnrolledCourses}/>
      </div>
      {/*right corner*/}
      <div className='p-5 bg-white rounded-xl'>
        <SideBanners/>
      </div>
    </div>
  )
}

export default Dashboard
