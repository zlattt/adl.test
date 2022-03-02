import * as React from "react"
import { useEffect, useRef, useState, forwardRef, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Menu from "../components/menu"
import MenuButton from "../components/menu-button"
import { useCurrentWidth } from "../components/react-breakpoints-hook"

//import { useElementSize } from "usehooks-ts"

import { useDimensions } from "../hooks/react-hook-dimensions/index"

const Header = forwardRef( ( { siteTitle, pageTitle, getHeaderDimensions }, headerRef ) => {

  function textOuterStrokeStyle (color, size) {
    return({
      textShadow: 
      `
       ${color}  -${size}px  -${size}px  0,
       ${color}  0           -${size}px  0,
       ${color}  ${size}px   -${size}px  0,
       ${color}  ${size}px   0           0,
       ${color}  ${size}px   ${size}px   0,
       ${color}  0           ${size}px   0,
       ${color}  -${size}px  ${size}px   0,
       ${color}  -${size}px  0           0
      `
    })
  }

  const strokeColor = "blanchedalmond";
  const headerColor = "transparent"
  const fontColor = "black"
  //cadetblue

  //const headerRef = useRef();

  const [menuIsOpen, setMenuIsOpen] = useState(null);

  useEffect(() => {console.log('hi from header')})
  useEffect(() => {console.log(headerRef)})

  //const [dimensions, setDimensions] = useState({
  //  height: window.innerHeight,
  //  width: window.innerWidth
  //});

  useEffect(() => {

    console.log('hi from handle resize useEffect');

    const debouncedHandleResize = debounce(function handleResize() {
     // setDimensions({
     //   height: window.innerHeight,
     //   width: window.innerWidth
     // });

      updateElementDimensions();

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

  //const width = useCurrentWidth();

  //useEffect(() => {console.log(dimensions)})
  //useEffect(() => {console.log(`width hook - ${width}`)})


  

  useLayoutEffect( () => getHeaderDimensions(elementDimensions) )

  const [ref, elementDimensions, updateElementDimensions] = useDimensions({
    dependencies: [],
  });

  ///const [hhhRef, { wwidth, hheight }] = useElementSize();
  
  ///useEffect(() => {
  ///  console.log(`layout header - ${wwidth}, ${hheight}`);
  ///});

return (
  <>
  <header class="fixed top-0 z-[11]
                 flex flex-col flex-no-wrap justify-start"

          style={{ 
            ...( menuIsOpen ? {bottom: 0} : {} ), 
            backgroundColor: headerColor
          }}
          
          ref={headerRef}
  >
  
    <div class="_headerGrid 
                border-b border-black
                flex-[0_1_auto]"
         ref={ref}
    >
                
      <div class="_headerGridLogo">
        <p class="font-esqadero uppercase tracking-[0.3em] 
                  text-[1.25rem] xs:text-[2rem] md:text-[3rem] 
                  [text-shadow:1px_1px_2px_rgb(0,0,0)] xs:[text-shadow:1px_1px_3px_rgb(0,0,0)]
                  [color:white] [-webkit-text-stroke:black_1px] [-moz-text-stroke:black_1px]
                  text-center p-[0.25em]"
        >
          <Link to="/">
            {siteTitle}
          </Link>
        </p>
      </div> 

      <div class="_headerGridMenuButton flex justify-end items-center pr-4">
        <MenuButton menuIsOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}/>
      </div>

      <div class="_headerGridBreadcrumbs">
        <p 
          style={{
             ...( textOuterStrokeStyle(strokeColor, 1) )
           }}
        >
          {/*{width} - check {dimensions.width} x {dimensions.height}*/}
          elementDimensions - {elementDimensions.width} x {elementDimensions.height}
        </p>
      </div>

    </div>

    {//menuIsOpen &&
      <div class="flex-[1_1_auto] [overflow-y:auto]"
           style={{ ...(menuIsOpen ? {} : {display: `none`}) }}
      >
        <Menu dimensions={elementDimensions} width={elementDimensions.width}/>
      </div>
    }
  
  </header>

  

  </>
)}
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
