/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import {useRef, useEffect} from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { useDimensions } from "../hooks/react-hook-dimensions/index"

//import { useElementSize } from "usehooks-ts"
//import { Helmet } from "react-helmet"

import Header from "./header"
//import "./layout.css"

const Layout = ({ children, pageTitle, getHeaderDimensions }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  //const [hRef, { width, height }] = useElementSize();
  
  const [hRef, elementDimensions, updateElementDimensions] = useDimensions({
    dependencies: [],
  });

  useEffect(() => {
    console.log(`layout header ${elementDimensions.width} - ${elementDimensions.height}`, hRef);
  });

  const hhRef = useRef();

  //useEffect(() => {
  //  console.log(`layout header ${width} - ${height}`);
  //});

  return (
    <>
      {/*<Helmet>
        <script src="/tailwind3018.js"></script>
      </Helmet>*/}

      <Header getHeaderDimensions={getHeaderDimensions} ref={hRef} siteTitle={data.site.siteMetadata?.title || `Title`} pageTitle={pageTitle}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
        ref={hhRef}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
          onClick={() => {updateElementDimensions(); console.log('clicked')}}
        >
          © {new Date().getFullYear()}, Built with
          {` ${elementDimensions.width} - ${elementDimensions.height} `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout