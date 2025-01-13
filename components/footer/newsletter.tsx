import React from 'react'
import newsletterBg from '@/public/Foot1er.png'
import Image from 'next/image'

const Newsletter = () => {
  return (
    <div className=' container mx-auto relative h-72 overflow-hidden rounded-lg '>
      <Image src={newsletterBg} alt="newsletter bg" fill={true}/>
      <div className=' absolute flex flex-col left-20 w-1/3 justify-center items-start gap-2 h-full '>
        <p className=' font-bold text-2xl tracking-wide leading-10 '>Stay home & get your daily needs from our shop</p>
        <p>Start You'r Daily Shopping with Mega Mart</p>
        {/* <Form></Form> */}
      </div>
    </div>
  )
}

export default Newsletter
