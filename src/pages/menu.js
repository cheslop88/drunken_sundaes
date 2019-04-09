import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import img from '../images/bcg/menuBcg.jpeg'
import Menu from '../components/HomePageComponents/Menu'
const MenuPage = () => (
  <Layout>
    <SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
        <Banner title="about us" subtitle="a little about us" />
      </PageHeader>
    <Menu />
  </Layout>
)

export default MenuPage
