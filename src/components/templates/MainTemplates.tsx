import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

interface MainTemplatesProps {
    children: React.ReactNode
}

const MainTemplates = ({children}: MainTemplatesProps) => {
  return (
    <div >
        <Header />
        <div className='flex flex-col items-center mt-72'>
            {children}
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default MainTemplates