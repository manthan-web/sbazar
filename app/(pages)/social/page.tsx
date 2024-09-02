import React from 'react'
import SocialInfos from './info'
import SocialsModule from './socialHeading'

const page = () => {
  return (
    <div className='flex flex-col'>
      <SocialsModule />
      <SocialInfos />
    </div>
  )
}

export default page