import React from 'react'
import Layout from '../customer/components/Layout'
import MainCarousel from '../customer/components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../customer/components/HomeCard/HomeSectionCarousel'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div >
     <Layout>   
      <HomeSectionCarousel/>
    </Layout>
    </div>
  )
}

export default Home