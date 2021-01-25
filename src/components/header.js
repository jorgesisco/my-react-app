import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={require('../images/logo-designcode.svg')} width="30"></img>
      </Link>
      <Link to="/courses">Button 1</Link>
      <Link to="/downloads">Button 2</Link>
      <Link to="/workshops ">Button 2</Link>
      <Link to="/buy">
        <button>Buy</button>
      </Link>
    </div>
  </div>
)

export default Header
