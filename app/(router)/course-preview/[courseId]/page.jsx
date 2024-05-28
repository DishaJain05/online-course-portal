'use client';
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';
import CourseVideoDescription from './_components/CourseVideoDescription';
import CourseEnrollSection from './_components/CourseEnrollSection';
import CourseContentSection from './_components/CourseContentSection';
import { useUser } from '@clerk/nextjs';

function CoursePreview({ params }) {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState(null);
  const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState();

  useEffect(() => {
    if (params?.courseId) {
      getCourseInfoById(params.courseId);
    }
  }, [params]);

  useEffect(() => {
    if (courseInfo && user) {
      checkUserEnrolledToCourse();
    }
  }, [courseInfo, user]);

  const getCourseInfoById = async (courseId) => {
    try {
      const resp = await GlobalApi.getCourseById(courseId);
      setCourseInfo(resp.courseList);
      console.log('Course Info:', resp);
    } catch (error) {
      console.error('Error fetching course info by ID:', error);
    }
  };

  const checkUserEnrolledToCourse = async () => {
    try {
      const resp = await GlobalApi.checkUserEnrolledToCourse(courseInfo.slug, user.primaryEmailAddress.emailAddress);
      console.log('Enrollment Check Response:', resp);
      if (resp?.userEnrollCourses[0]?.id) {
        setIsUserAlreadyEnrolled(resp?.userEnrollCourses[0]?.id);
      } else {
        setIsUserAlreadyEnrolled(resp?.userEnrollCourses[0]?.id);
      }
    } catch (error) {
      console.error('Error checking user enrollment:', error);
    }
  };

  if (!courseInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      <div className='col-span-2 bg-white p-3'>
        <CourseVideoDescription courseInfo={courseInfo} />
      </div>
      <div>
        <CourseEnrollSection courseInfo={courseInfo} isUserAlreadyEnrolled={isUserAlreadyEnrolled} />
        <CourseContentSection courseInfo={courseInfo} isUserAlreadyEnrolled={isUserAlreadyEnrolled} />
      </div>
    </div>
  );
}

export default CoursePreview;
