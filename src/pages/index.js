import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticData from '../../staticData.json'
import Cell from '../components/Cell'
import styled from 'styled-components'
import Layout from '../components/Layout'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            Building a better <br /> you for life!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            maxime ipsa eaque aliquid rerum ut officiis consectetur nesciunt
            odit tenetur.
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
          <Wave />
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

      <SectionCaption>12 sections - 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticData.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup>
    </div>
  </Layout>
)

export default IndexPage
