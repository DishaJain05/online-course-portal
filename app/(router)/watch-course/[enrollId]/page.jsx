'use client';

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';
import CourseVideoDescription from '../../course-preview/[courseId]/_components/CourseVideoDescription';
import CourseContentSection from '../../course-preview/[courseId]/_components/CourseContentSection';

function WatchCourse({ params }) {
  const { user } = useUser();
  const { enrollId } = params;
  const [courseInfo,setCourseInfo]=useState([]);
  const [activeChapterIndex,setActiveChapterIndex]=useState(0);


  useEffect(() => {
    if (enrollId && user) {
      getUserEnrolledCourseDetails();
    }
  }, [enrollId, user]);

  const getUserEnrolledCourseDetails = () => {
    GlobalApi.getUserEnrolledCourseDetails(enrollId, user.primaryEmailAddress.emailAddress)
      .then(resp => {
        setCourseInfo(resp.userEnrollCourses[0].courseList);
      })
  }

  return courseInfo.name&& (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      <div className='col-span-2 bg-white p-3'>
        <CourseVideoDescription courseInfo={courseInfo}
         activeChapterIndex={activeChapterIndex} watchMode={true} />
      </div>
      <div>
        
        <CourseContentSection courseInfo={courseInfo} isUserAlreadyEnrolled={true} watchMode={true}
        setActiveChapterIndex={(index)=>setActiveChapterIndex(index)} />
      </div>
    </div>
    </div>
  );
}

export default WatchCourse;
