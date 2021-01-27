import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Building a better <br /> you for life!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste maxime
          ipsa eaque aliquid rerum ut officiis consectetur nesciunt odit
          tenetur.
        </p>
        <Link to="/page-2/">Our Plans</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" alt="" />
          <img src={require('../images/logo-figma.png')} width="50" alt="" />
          <img src={require('../images/logo-studio.png')} width="50" alt="" />
          <img src={require('../images/logo-framer.png')} width="50" alt="" />
          <img src={require('../images/logo-react.png')} width="50" alt="" />
          <img src={require('../images/logo-swift.png')} width="50" alt="" />
        </div>
        <Wave/>
      </div>
    </div>
    <div className="Cards">
      <h2>1 Card component reused by using react props :D </h2>
      <div className="CardGroup">
        <Card
          title="Card 1"
          text="1 Component"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="Card 2"
          text="Used as many times as a want"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="Card 3"
          text=""
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="Card 4"
          text=""
          image={require('../images/wallpaper3.jpg')}
        />
      </div>
    </div>
    <Section
    image={require('../images/wallpaper2.jpg')}
    logo={require('../images/logo-studio.png')}
    title="Choose best plan for you"
    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit cum at quos aut exercitationem porro provident."
    />
  </div>
)

export default IndexPage


    