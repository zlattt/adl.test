import * as React from "react"
import { useEffect, useRef, useState, useLayoutEffect, useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { gsap } from "gsap"

import Menu from "../components/menu"
import MenuButton from "../components/menu-button"
import TextOuterStroke from "../components/textOuterStroke"
//import { useElementSize } from "usehooks-ts"
import { useDimensions } from "../hooks/react-hook-dimensions/index"

import LayoutContext from "../components/layoutContext"

const Header = ({ siteTitle, pageTitle }) => {

  const strokeColor = "black";
  const headerColor = "white"
  const fontColor = "black"
  //cadetblue

  const [menuIsOpen, setMenuIsOpen] = useState(null);

  useEffect(() => {

    const debouncedHandleResize = debounce(function handleResize() {
     
      updateElementDimensions();
      editLayout({headerHeight: elementDimensions.height});

    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return _ => {
      window.removeEventListener("resize", debouncedHandleResize);
    };

  }, []);
  
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

  useEffect(() => {
    editLayout( {headerHeight: elementDimensions.height} );
  })

  useEffect(() => {
    console.log(layout.breakpoints);
  })

  const [layout, editLayout] = useContext(LayoutContext);

  const [heightRef, elementDimensions, updateElementDimensions] = useDimensions({
    dependencies: [],
  });

  const logoRef = useRef();
  useLayoutEffect(() => {
    if (layout.firstLoadDone) {
      gsap.fromTo(logoRef.current, {opacity: 0}, {opacity: 1, duration: 6})
    }
  }, [layout.firstLoadDone])
  //layout.headerHeight = elementDimensions.height;
  //window.addEventListener("load", ()=>{console.log('page is fully loaded')});
  const overlayRef = useRef();

return (
  <>
  {layout.firstLoadDone && <div ref={overlayRef}
       style={{
        position: `fixed`,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
       }}
  >
  </div>}
  <header
          style={{ 
            position: `fixed`,
            top: `0`, 
            //bottom: `0`,
            height: `100vh`,
            //marginBottom: `-50vh`,
            width: `100%`,//vw`,
            zIndex: `11`,

            display: `grid`,
            gridTemplateAreas: `"top" 
                                "nav"`,
            gridTemplateRows: `auto 1fr`,

            pointerEvents: `none`,
          }}
  >
  
    <div ref={heightRef}
         style={{
           gridArea: `top`,
           pointerEvents: `auto`,
           backgroundColor: headerColor,
           
           margin: `10px`,

           border: `1px solid`,
           borderColor: `black`,
           //borderBottomWidth: `1px`,

           display: `grid`,
           gap: `0px 0px`, 
           gridTemplateColumns: `1fr auto 1fr`,
           gridTemplateRows: `auto auto auto`,
           gridTemplateAreas: `". . ."
                                ". logo menu"
                                ". breadcrumbs ."`,
         }}
    >
                
      <div ref={logoRef}
           style={{
            gridArea: `logo`,

            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
           }}
      >
        {//<TextOuterStroke strokeColor="black" strokeSize="3">
        }
        <p class="text-[1.25rem] sm:text-[1.5rem] md:text-[2rem]"                                            
           style={{
             //display: `flex`,
             //alignItems: `center`,
             //justifyContent: `center`,

             fontFamily: `"Trajan Pro 3"`,
             fontWeight: `400`,
             letterSpacing: `0.1em`,
             //textTransform: `uppercase`,
             //verticalAlign: `middle`,
             //textAlign: `center`,
            
             
             //...(layout.breakpoints.xs && {fontSize: `1.25rem`}),
             //...(layout.breakpoints.sm && {fontSize: `2rem`}),
             //...(layout.breakpoints.md && {fontSize: `3rem`}), 
                        
             

             //fontFamily: `Montserrat`,
           }}
        >
          <Link to="/"
                style={{
                  display: `flex`,
                  alignItems: `center`,
                  ...(layout.breakpoints.xs && {fontSize: `1.25rem`}),
                  ...(layout.breakpoints.sm && {fontSize: `2rem`}),
                  ...(layout.breakpoints.md && {fontSize: `3rem`}), 
                }}
          >

            <span style={{fontSize: `0.5em`,}}>&bull;</span>
            {//siteTitle
            //<br/>
            }
            ArtDecorLab
            <span style={{fontSize: `0.5em`,}}>&bull;</span>

          </Link>
        </p>
       {// </TextOuterStroke>
       }
      </div> 

      <div 
           style={{
             gridArea: `menu`,

             display: `flex`,
             justifyContent: `flex-end`,
             alignItems: `center`,
             paddingRight: `0.5rem`,
           }}
      >
        <MenuButton menuIsOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}/>
      </div>

      <div
           style={{
             gridArea: `breadcrumbs`,
           }}
      >
      {/*  <p 
          style={{
            fontFamily: `"Montserrat"`,
            fontSize: `0.75rem`
          }}
        >
          elementDimensions - {elementDimensions.width} x {elementDimensions.height} - ({layout.headerHeight})
          {`Breakpoint: xs(${layout.breakpoints.xs}) sm(${layout.breakpoints.sm}) md(${layout.breakpoints.md}) lg(${layout.breakpoints.lg})`}
        </p> */}
      </div>

    </div>

    <div 
         style={{
           gridArea: `nav`,
           overflow: `hidden`,
           position: `relative`
         }}
    >
      <Menu menuIsOpen={menuIsOpen} headerColor={headerColor} />
    </div>
    
  </header>
  </>
)};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
