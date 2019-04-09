import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Section, Title } from '../../utils'
import styled from 'styled-components'
import Product from './Product'
export default function Menu() {
  return (
    <Section>
      <Title title="Food" />
      <h3 class="menu">Explore our Ice cream themed desserts, these go well with or without a cocktail</h3>
      <ProductList>
        <StaticQuery
          query={graphql`
            {
              items: allContentfulMenu {
                edges {
                  node {
                    name
                    price
                    id
                    ingredients
                    description
                    img {
                      fixed(width: 150, height: 150) {
                        ...GatsbyContentfulFixed_tracedSVG
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            return data.items.edges.map(item => {
              return <Product key={item.node.id} product={item.node} />
            })
          }}
        />
      </ProductList>
    </Section>
  )
}

export const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
