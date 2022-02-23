import * as React from "react"
import { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Menu from "../components/menu"
import { useCurrentWidth } from "../components/react-breakpoints-hook"

const Header = ({ siteTitle, pageTitle }) => {

  const headerRef = useRef();


  useEffect(() => {console.log('hi from header')})
  useEffect(() => {console.log(headerRef)})

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {

    console.log('hi from handle resize useEffect');

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return _ => {
      window.removeEventListener("resize", debouncedHandleResize);
    };

  });
  
  function debounce(fn, ms) {
    let timer;
    return _ => {
      clearTimeout(timer);
      timer = setTimeout(_ => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  const width = useCurrentWidth();

  useEffect(() => {console.log(dimensions)})
  useEffect(() => {console.log(`width hook - ${width}`)})

return (
  <>
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
    
    <div class="_headerGridMenuButton flex justify-end items-center pr-4">
      <Menu dimensions={dimensions} width={width}/>
    </div>
  
    <div class="_headerGridBreadcrumbs"><p>{width} - check {dimensions.width} x {dimensions.height}</p></div>
   
  </header>
  </>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
