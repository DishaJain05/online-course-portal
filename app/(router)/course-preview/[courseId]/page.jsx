'use client';
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';
import CourseVideoDescription from './_components/CourseVideoDescription';
import CourseEnrollSection from './_components/CourseEnrollSection';
import CourseContentSection from './_components/CourseContentSection';

function CoursePreview({ params }) {
  const [courseInfo, setCourseInfo] = useState(null);

  useEffect(() => {
    if (params?.courseId) {
      getCourseInfoById(params.courseId);
    }
  }, [params]);

  const getCourseInfoById = async (courseId) => {
    try {
      const resp = await GlobalApi.getCourseById(courseId);
      setCourseInfo(resp.courseList);
      console.log(resp);
    } catch (error) {
      console.error('Error fetching course info by ID:', error);
    }
  };

  return courseInfo && (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      {/* title, video, description */}
      <div className='col-span-2 bg-white p-3'>
        <CourseVideoDescription courseInfo={courseInfo} />
      </div>
      {/* course content */}

      <div>
        <CourseEnrollSection />

        <CourseContentSection courseInfo={courseInfo} />
      </div>
    </div>
  );
}

export default CoursePreview;
