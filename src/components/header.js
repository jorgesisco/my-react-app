import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={require('../images/logo-designcode.svg')} width="30"></img>
      </Link>
      <Link to="/courses">Our Services</Link>
      <Link to="/downloads">Case Studies</Link>
      <Link to="/workshops ">Blog</Link>
      <Link to="/buy">
        <button>Book a free consultation</button>
      </Link>
    </div>
  </div>
)

export default Header
