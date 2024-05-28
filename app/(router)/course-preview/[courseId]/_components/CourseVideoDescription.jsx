import React from 'react'
import VideoPlayer from './VideoPlayer'
import Markdown from 'react-markdown'

function CourseVideoDescription({courseInfo}) {
  return (
    <div>
      <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
      <h2 className='text-grey-500 text-[14px] mb-3'>{courseInfo.name}</h2>
        {/* Video Player */}
        <VideoPlayer videoUrl={courseInfo?.chapter[0]?.video?.url} 
        poster={courseInfo?.banner?.url}/>
        {/* Description */}
        <h2 className='mt-5 text-[17px] font-semibold'>About the  course</h2>
        
          <Markdown className='text-[16px] font-light mt-2 leading-7'>{courseInfo.description}</Markdown>
    </div>
  )
}

export default CourseVideoDescription
