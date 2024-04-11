import React from 'react'
import Layout from '../customer/components/Layout'
import MainCarousel from '../customer/components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../customer/components/HomeCard/HomeSectionCarousel'

function Home() {
  return (
    <div >
     <Layout>
      <MainCarousel/>
      <HomeSectionCarousel/>
    </Layout>
    </div>
  )
}

export default Home