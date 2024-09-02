import React from 'react'
import BusinessInfo from './info'
import BusinessHeading from './heading'

const page = () => {
  return (
    <div className='flex flex-col'>
        <BusinessHeading />
        <BusinessInfo />
    </div>
  )
}

export default page