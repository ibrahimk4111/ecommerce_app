import React from 'react'

import Navbar from '@/components/navbar/navbar'
import Man from '@/components/bodyComponents/man/man'
import Footer from '@/components/footer/footer'
import Popularcategory from '@/components/bodyComponents/popularcategory/popularcategory'
import Popularproduct from '@/components/bodyComponents/popularproducts/popularproduct'
import Bestsellscard from '@/components/bodyComponents/dailybestsells/bestsellscard'
import Dailybestsells from '@/components/bodyComponents/dailybestsells/dailybestsells'
import Newsletter from '@/components/footer/newsletter'

const page = () => {
  return (
    <main>
      <Navbar />
      <Popularcategory />
      <Popularproduct />
      <Dailybestsells />
      <Newsletter />
      <Man />
      <Footer />
    </main>
  )
}

export default page
