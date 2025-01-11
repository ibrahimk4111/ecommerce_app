import React from 'react'
import newsletterBg from '@/public/Foot1er.png'
import newsletterBgright from '@/public/banner-9.png.png'
import Image from 'next/image'

const Newsletter = () => {
  return (
    <div className=' container mx-auto relative h-72 overflow-hidden '>
      <Image src={newsletterBg} alt="newsletter bg"/>
      <div>
        <p>Stay home & get your daily needs from our shop</p>
        <p>Start You'r Daily Shopping with Mega Mart</p>
      </div>
    </div>
  )
}

export default Newsletter
