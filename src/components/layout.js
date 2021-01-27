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
          allContentfulLink(filter: {}) {
            edges {
              node {
                title
                url
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
          <Footer data={data} />
        </>
      )}
    />
  )
}
