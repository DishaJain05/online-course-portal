import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function SideBanners() {
    const [sideBannerList,setsideBannerList]=useState([]);
    useEffect(()=>{
        getSideBanners();
    },[])
    const getSideBanners=()=>{
        GlobalApi.getSideBanner().then(resp=>{
            console.log(resp);
            setsideBannerList(resp.sideBanners)
        })
    }
  return (
    <div className='flex flex-col gap-6'>
      {sideBannerList.map((item,index)=>(
        <div key={index}>
            <Image src={item.banner.url} alt='banner' width={500}
             height={300} className='rounded-xl cursor-pointer gap-6'
             onClick={()=>window.open(item.url)}/>
            </div>
        ))}
    </div>
  )
}

export default SideBanners
