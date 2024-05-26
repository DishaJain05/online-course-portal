import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'

function Layout({children}) {
  return (
    <div className='flex'>
        <div className='sm:w-64 sm:block fixed hidden sm:inline-block'>
          <SideNav />
          </div>
          <div className='ml-64 w-full'>
            <Header/>
            {children}
          </div>
    </div>
  )
}

export default Layout
