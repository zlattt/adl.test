import * as React from "react"
import { useEffect, useRef, useState, useLayoutEffect, useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

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

  //layout.headerHeight = elementDimensions.height;

return (
  <>
  <header
          style={{ 
            position: `fixed`,
            top: `0`, 
            bottom: `0`,
            width: `100vw`,
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
           
           borderColor: `black`,
           borderBottomWidth: `1px`,

           display: `grid`,
           gap: `0px 0px`, 
           gridTemplateColumns: `1fr auto 1fr`,
           gridTemplateRows: `auto auto auto`,
           gridTemplateAreas: `". . ."
                                ". logo menu"
                                ". breadcrumbs ."`,
         }}
    >
                
      <div 
           style={{
            gridArea: `logo`,
           }} 
      >
        {//<TextOuterStroke strokeColor="black" strokeSize="3">
        }
        <p                                             
           style={{
             display: `flex`,
             alignItems: `center`,
             justifyContent: `center`,

             fontFamily: `"Trajan Pro 3"`,
             fontWeight: `500`,
             letterSpacing: `0.1em`,
             //textTransform: `uppercase`,
             //verticalAlign: `middle`,
             //textAlign: `center`,
             ...(layout.breakpoints.md && {fontSize: `3rem`}),
             ...(layout.breakpoints.sm && {fontSize: `2rem`}),
             ...(layout.breakpoints.xs && {fontSize: `1.25rem`}),
             
             

             //fontFamily: `Montserrat`,
           }}
        >
          <Link to="/"
                style={{
                  display: `flex`,
                  alignItems: `center`,
                }}
          >

            <span style={{fontSize: `0.5em`,}}>&bull;</span>
            {siteTitle}
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
             justifyContent: `end`,
             alignItems: `center`,
             paddingRight: `1rem`,
           }}
      >
        <MenuButton menuIsOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}/>
      </div>

      <div
           style={{
             gridArea: `breadcrumbs`,
           }}
      >
        <p 
          style={{
            fontFamily: `"Montserrat"`,
            fontSize: `0.75rem`
          }}
        >
          elementDimensions - {elementDimensions.width} x {elementDimensions.height} - ({layout.headerHeight})
          {`Breakpoint: xs(${layout.breakpoints.xs}) sm(${layout.breakpoints.sm}) md(${layout.breakpoints.md}) lg(${layout.breakpoints.lg})`}
        </p>
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
