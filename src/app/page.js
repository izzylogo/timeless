import Hero from '@/components/hero/Hero'
import Navbar from '@/components/nav/Navbar'
import React from 'react'
import "./page.scss"
import Best from '@/components/best/Best'
import Meet from '@/components/meet/Meet'
import Footer from '@/components/footer/Footer'

const page = () => {
  return (
    <div className='page-cover'>
      <Navbar/>
      <Hero/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Best/>
      <br />
      <br />
      <br />
      <Meet/>
      <br />
      <br />
      <br />
      <Footer/>
    </div>
  )
}

export default page