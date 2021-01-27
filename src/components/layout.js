import React from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// import Header from './header'
import './index.css'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query allContentfulLinkAndLayoutQuery {
          allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
            edges {
              node {
                title
                url
                createdAt
              }
            }
          }
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            defaultTitle={data.site.siteMetadata.title}
          />
          <div>{children}</div>
          <Footer data={data}>
            © JSC web 2020-2021. Made with love & coffe in Caracas, Lecheria and
            Toronto.
          </Footer>
        </>
      )}
    />
  )
}
