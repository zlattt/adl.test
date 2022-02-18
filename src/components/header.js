import * as React from "react"
import { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Menu from "../components/menu"
import useRefDimensions from "../components/useRefDimensions"

const Header = ({ siteTitle, pageTitle }) => {
  
//to-do: consider making a fixed positioned wrapper for header and menu, making them siblings, 
//on active menu make wrapper 100vh, set menu absolute positioned with top value equals headerRef.current.offsetHeight,
//height equals (100vh-headerRef.current.offsetHeight)

//consider flex/grid wrapper with some auto height/positioning

  const headerRef = useRef();
  
  let h = useRefDimensions(headerRef);

return (

  <header ref={headerRef} class="_headerGrid 
                                 border-b border-black
                                 fixed top-0 z-[11]
                                ">

    <div class="_headerGridLogo
                
               ">
      <p class="font-esqadero uppercase tracking-[0.3em] 
                text-[1.25rem] xs:text-[2rem] md:text-[3rem] 
                [text-shadow:1px_1px_2px_rgb(0,0,0)] xs:[text-shadow:1px_1px_3px_rgb(0,0,0)]
                text-center p-[0.25em]
               ">
        <Link to="/">
          {siteTitle}
        </Link>
      </p>
    </div> 
    
    {/*<div class="_headerGridBreadcrumbs"> 
      <h1>breadcrumbs-{pageTitle}</h1>
    </div>*/}

    <div class="_headerGridMenuButton flex justify-end items-center pr-4">
      <Menu headerDimensions={h} class=""/>
    </div>

  </header>

)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
