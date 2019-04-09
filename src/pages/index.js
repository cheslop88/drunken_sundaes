import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton, SectionButton } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner>
        <Link to="/contact/" style={{ textDecoration: 'none' }}>
          <BannerButton style={{ margin: '2rem auto' }}>Make a Booking</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Link to="/menu/" style={{ textDecoration: 'none' }}>
      <SectionButton style={{ margin: '2rem auto' }}>See our Menu</SectionButton>
    </Link>
  </Layout>
)

export default IndexPage
