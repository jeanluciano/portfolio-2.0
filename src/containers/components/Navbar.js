import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

const Navbar = styled.nav`
  color: red;
  display: block;
  position: fixed;
  z-index: 1;
  top: 50%;
  bottom: auto;
  background-color: transparent;
  width: 50px;
`
const NavbarItem = styled(Link)`
  font-size: 34px;
  display: block;
  line-height: 51px;
  height: 51px;
  position: relative;
  text-decoration: none;
  background-color: transparent;
  outline: none;
`

export default () => (
  <Navbar>
    <NavbarItem to={'/'}>
      <i className="fa fa-home" aria-hidden="true" />
    </NavbarItem>
    <NavbarItem to={'/About'}>
      <i className="fa fa-user-circle-o" aria-hidden="true" />
    </NavbarItem>
    <NavbarItem to={'/Work'}>
      <i className="fa fa-code" aria-hidden="true" />
    </NavbarItem>
  </Navbar>
)
