import React from 'react'
import { Link } from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'
import { styles } from '../../../utils'
export default function NavbarHeader({ handleNavbar }) {
  return (
    <HeaderWrapper>
        <h1>Drunken Sundaes</h1>
      <FaAlignRight
        className="toggle-icon"
        onClick={() => {
          handleNavbar()
        }}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainWhite};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
    padding: 0.4rem 1rem;
  }
  h1{
    color: ${styles.colors.mainWhite};
  }
`
