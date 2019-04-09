import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import img from '../images/bcg/menuBcg.jpeg'
import Menu from '../components/HomePageComponents/Menu'
export default function Test() {
  return (
    <Layout>
      <SEO title="Menu" />
      <PageHeader img={img}>
        <Banner title="our menu" subtitle={`let's dig in`} />
      </PageHeader>
      <Menu/>
    </Layout>
  )
}
