import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { toast } from 'sonner';

function CourseEnrollSection({ courseInfo, isUserAlreadyEnrolled }) {
  const membership = true; // This should be replaced with actual membership check logic
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log("isUserAlreadyEnrolled:", isUserAlreadyEnrolled);
  }, [isUserAlreadyEnrolled]);

  const onEnrollCourse = () => {
    GlobalApi.enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress).then(resp => {
      console.log('Enroll Response:', resp);
      if (resp) {
        toast.success("User Enrolled Successfully", {
          description: "You have successfully enrolled in this course.",
        });
        router.push('/watch-course/' + resp.createUserEnrollCourse.id);
      }
    }).catch(error => {
      console.error('Error enrolling to course:', error);
      toast.error("Enrollment failed", {
        description: "Unable to enroll in this course.",
      });
    });
  };

  return (
    <div className='p-3 text-center rounded-sm bg-primary flex flex-col gap-3'>
      <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
      {user ? (
        isUserAlreadyEnrolled ? (
          <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>You are already enrolled in this course continue to learn.</h2>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary" onClick={() => router.push('/watch-course/' + isUserAlreadyEnrolled)}>Continue</Button>
          </div>
        ) : (
          membership || courseInfo.free ? (
            <div className='flex flex-col gap-3 mt-3'>
              <h2 className='text-white font-light'>Enroll now and start learning and building projects</h2>
              <Button className="bg-white text-primary hover:bg-white hover:text-primary" onClick={onEnrollCourse}>Enroll Now</Button>
            </div>
          ) : (
            <div className='flex flex-col gap-3 mt-3'>
              <h2 className='text-white font-light'>Buy monthly Membership and get all courses</h2>
              <Button className="bg-white text-primary hover:bg-white hover:text-primary">Buy just for $2.5</Button>
            </div>
          )
        )
      ) : (
        <div className='flex flex-col gap-3 mt-3'>
          <h2 className='text-white font-light'>Enroll now and start learning and building projects</h2>
          <Link href={'/sign-in'}>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary">Enroll Now</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CourseEnrollSection;
