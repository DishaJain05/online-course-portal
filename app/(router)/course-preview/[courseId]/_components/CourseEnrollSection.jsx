import { Button } from '@/components/ui/button'
import React from 'react'

function CourseEnrollSection() {
    const membership = false;
    return (
        <div className='p-3 text-center rounded-sm bg-primary flex flex-col gap-3 '>
            <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
            {/* User has membership and login */}
            {membership ? <div className='flex flex-col gap-3 mt-3'>
                <h2 className='text-white font-light'>Enroll now and start learning and building projects</h2>
                <Button className="bg-white text-primary hover:bg-white hover:text-primary">Enroll Noww</Button>
            </div>
                : <div className='flex flex-col gap-3 mt-3'>
                    <h2 className='text-white font-light'>Buy monthly Membership and get all courses</h2>
                    <Button className="bg-white text-primary hover:bg-white hover:text-primary">Buy just for $2.5</Button>
                </div>}
            {/*above section User does not have membership or not logged in */}
        </div>
    )
}

export default CourseEnrollSection

