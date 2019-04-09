import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import img from '../images/bcg/aboutBcg.jpeg'
import { Section, Title } from '../utils'
export default function about() {
  return (
    <Layout>
      <SEO title="About" />
      <PageHeader img={img}>
        <Banner/>
      </PageHeader>
      <Section>
        <Title title="About Us"/>
        <p>Originally starting out as a food truck in London, university friends Jay Rees and Joel Williams soon started to realise that the cocktail market in London and the rest of the UK was on the rise.</p>
        <p>Not wanting to ignore their award winning desserts but trying to capture the market, the two returned to Jay's hometown of Newcastle where they decided to open a restaurant serving their award winning ice-cream themed desserts and pairing these with cocktails</p>
        <p class="quote">"We wanted to combine the sweetness of a dessert with the sweetness of a cocktail as we found they complimented each other well." - Jay</p>
        <p class="quote">"We wanted to create an adult themed bar around the memories of childhood desserts and tastes, it's not all about the dessert and the cocktails, it's also the memories of childhood" - Joel</p>
        <p>Following the successful launch of their Newcastle restaurant in 2019, the boys are looking to expand and see Manchester and Edinburgh as their next two loactions.</p>
      </Section>
    </Layout>
  )
}
