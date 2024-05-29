import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'

function Layout({children}) {
  return (
    <div className='flex'>
        <div className='sm:w-64 sm:block fixed '>
          <SideNav />
          </div>
          <div className='ml-64 '>
            <Header/>
            {children}
          </div>
    </div>
  )
}

export default Layout
