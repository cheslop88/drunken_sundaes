import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader, Banner, Title } from '../utils';
import img from '../images/bcg/locationBcg.jpeg';
import Map from '../components/Map';

export default function location() {
  return (
    <Layout>
      <SEO title="Location" />
      <PageHeader img={img}>
        <Banner/>
      </PageHeader>
      <Map/>
    </Layout>
  )
}
