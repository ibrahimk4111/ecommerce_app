import React from 'react'

import Navbar from '@/components/navbar/navbar'
import Categories from '@/components/categories/categories'
import Man from '@/components/bodyComponents/man/man'
import Footer from '@/components/footer/footer'
import Popularcategory from '@/components/bodyComponents/popularcategory/popularcategory'
import Popularproduct from '@/components/bodyComponents/popularproducts/popularproduct'

const page = () => {
  return (
    <main>
      <Navbar />
      {/* <Categories /> */}
      <Popularcategory />
      <Popularproduct />
      <Man />
      <Footer />
    </main>
  )
}

export default page
