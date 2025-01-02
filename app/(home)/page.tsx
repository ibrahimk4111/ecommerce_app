import React from 'react'

import Navbar from '@/components/navbar/navbar'
import Categories from '@/components/categories/categories'
import Man from '@/components/bodyComponents/man/man'
import Footer from '@/components/footer/footer'
import Popularcategory from '@/components/bodyComponents/popularcategory/popularcategory'

const page = () => {
  return (
    <main>
      <Navbar />
      {/* <Categories /> */}
      <Popularcategory />
      <Man />
      <Footer />
    </main>
  )
}

export default page
