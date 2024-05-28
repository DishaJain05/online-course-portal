import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

function CourseEnrollSection({ courseInfo }) {
    const membership = false; // This should be replaced with actual membership check logic
    const { user } = useUser();
    console.log(courseInfo);

    return (
        <div className='p-3 text-center rounded-sm bg-primary flex flex-col gap-3'>
            <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
            {/* User is logged in and has membership or the course is free */}
            {user ? (
                membership || courseInfo.free ? (
                    <div className='flex flex-col gap-3 mt-3'>
                        <h2 className='text-white font-light'>Enroll now and start learning and building projects</h2>
                        <Button className="bg-white text-primary hover:bg-white hover:text-primary">Enroll Now</Button>
                    </div>
                ) : (
                    <div className='flex flex-col gap-3 mt-3'>
                        <h2 className='text-white font-light'>Buy monthly Membership and get all courses</h2>
                        <Button className="bg-white text-primary hover:bg-white hover:text-primary">Buy just for $2.5</Button>
                    </div>
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
