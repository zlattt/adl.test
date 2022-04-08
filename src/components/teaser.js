import * as React from "react"
import { useEffect, useRef, useState, useLayoutEffect, useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { useDimensions } from "../hooks/react-hook-dimensions/index"

import TextOuterStroke from "../components/textOuterStroke"

import LayoutContext from "../components/layoutContext"



const Teaser = ({ data }) => {

const [layout, editLayout] = useContext(LayoutContext);

//const hh=layout.headerHeight;

const chapterTitleFontSizeRem = 2;
const chapterTitleLineHeightEm = 1.1;
const chapterTitleLineHeightRem = chapterTitleFontSizeRem*chapterTitleLineHeightEm;
const chapterTitleImageHeightEm = 11;
const chapterTitleImageHeightRem = chapterTitleFontSizeRem*chapterTitleImageHeightEm;

return (

<>
<div>
  <p 
     style={{
       backgroundColor: layout.theme.background,
       color: layout.theme.foreground,
     }}
     onClick={ () => {
       console.log(`click`);
       //const layoutB = {...(layout)};
       editLayout( (layout.theme.background === "green") ? {theme: {background: "red"}}: {theme: {background: "green"}} );
       //setLayout({...(layout)});
       console.log(layout.theme.foreground);      
      } 
     }
  >
    111{layout.theme.background}
  </p> 
  <p>
    {data[0].text}
  </p>
  {data.map( (item, index) =>
  <>
    <div
         style={{
           //fontSize: `${chapterTitleFontSizeRem}rem`,
           //lineHeight: `${chapterTitleLineHeightEm}em`,
           height: `${chapterTitleImageHeightRem}rem`,
           position: `sticky`,
           top: `calc(${chapterTitleLineHeightRem*(index+1)-chapterTitleImageHeightRem}rem + ${ layout.headerHeight }px)`,
           //bottom: `${(data.length-(index+1))*chapterTitleLineHeightEm}em`,
           bottom: `${(data.length-index)*chapterTitleLineHeightRem-chapterTitleImageHeightRem}rem`,
           marginTop: `${index*chapterTitleLineHeightRem}rem`,
           marginBottom: `${(data.length-(index+1))*chapterTitleLineHeightRem}rem`,
           backgroundColor: `white`,
           border: `solid black`,
           borderWidth: `1px 0px`
         }}
    >
    {//<TextOuterStroke strokeColor="black" strokeSize="3">
    }
    <h2 
        style={{
          fontSize: `${chapterTitleFontSizeRem}rem`,
          lineHeight: `${chapterTitleLineHeightEm}em`,
          fontFamily: `"Trajan Pro 3"`,
          position: `absolute`,
          top: 0,
        }}
    >
      {item.title}
    </h2>
    {//</TextOuterStroke>
    }
    </div>

    <p
       style={{
         marginTop: `-${(data.length-index-1)*chapterTitleLineHeightRem}rem`,
         marginBottom: `-${((index+1)%data.length)*chapterTitleLineHeightRem}rem`,
         textAlign: `justify`,
       }}
    >
      {item.text}
    </p>

  </>
  )}
</div>
{//may add 2nd fixed div with hero image for chapter, being background for paragraph, having concurrent with title sticky behavior
}
</>    
)}

export default Teaser