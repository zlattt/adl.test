import * as React from "react"
import { useEffect, useRef, useState, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { useDimensions } from "../hooks/react-hook-dimensions/index"

const Teaser = ({ data, h }) => {

useLayoutEffect(() => {
  console.log("Teaser useEffect");
  console.log(h ? h.height : {})
});

//const hh=h.height;

return (
<>{ h &&
<div> 
  {data.map( (item, index) =>
  <>
    <div 
      style={{
        fontSize: `2rem`,
        position: `sticky`,
        top: `calc(${1.5*index}em + ${h.height}px)`,
        bottom: `${(data.length-index-1)*24}px`,
        marginTop: `${index*24}px`,
        marginBottom: `${(data.length-index-1)*24}px`,
        backgroundColor: `white`,
        border: `1px solid black`,
      }}
    >
      <h2
        style={{
          fontSize: `2rem`,
        }}
      >
        {item.title}
      </h2>
    </div>

    <p
      style={{
        marginTop: `-${(data.length-index-1)*24}px`,
        marginBottom: `-${((index+1)%data.length)*24}px`,
      }}
    >
      {item.text}
    </p>
  </>
  )}
</div>
}</>    
)}

export default Teaser