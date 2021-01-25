import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Building a better you</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste maxime
          ipsa eaque aliquid rerum ut officiis consectetur nesciunt odit
          tenetur.
        </p>
        <Link to="/page-2/">Make a Reservation</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
