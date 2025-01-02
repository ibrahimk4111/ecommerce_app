import React from 'react'

import Navbar from '@/components/navbar/navbar'
import Categories from '@/components/categories/categories'
import Man from '@/components/bodyComponents/man/man'
import Footer from '@/components/footer/footer'

const page = () => {
  return (
    <main>
      <Navbar />
      <Categories />
      <Man />
      <Footer />
    </main>
  )
}

export default page
