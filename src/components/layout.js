/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import {useRef, useEffect, createContext, useContext} from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//import { useElementSize } from "usehooks-ts"
//import { Helmet } from "react-helmet"

import Header from "../components/header"
import PageContentWrapper from "../components/pageContentWrapper"
//import "./layout.css"

import { LayoutContextCustomProvider } from "../components/layoutContext"

const Layout = ({ children, pageTitle }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <>
    <LayoutContextCustomProvider>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} pageTitle={pageTitle}/>

      <PageContentWrapper>
        <main>
          
          {children}
        
        </main>
        <footer
                style={{
                  marginTop: `2rem`,
                  //...(context?.breakpoints.xs && {color: `red`}),
                  //...(context?.breakpoints.md && {color: `green`}),
                }}
        >
          <p>
            {//`Breakpoint: xs(${context?.breakpoints.xs}) sm(${context?.breakpoints.sm}) md(${context?.breakpoints.md}) lg(${context?.breakpoints.lg})`}
            }
          </p>
          © {new Date().getFullYear()},  
          <a href="">ArtDecorLab</a>
        </footer>
      </PageContentWrapper>
    </LayoutContextCustomProvider>
    </>    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout