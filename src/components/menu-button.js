import * as React from "react"
import { useEffect, useRef } from "react"

import { gsap } from "gsap"

const MenuButton = ({ menuIsOpen, onClick }) => {

const menuIconOpen = useRef();
const menuIconClose = useRef();
const tl = useRef();

// adding rotation: 0.01 in animation props can prevent pixel snapping

function fadeOut(target) {
  gsap.killTweensOf(target);
  return gsap.fromTo(target, { opacity: 1, scale: 1 }, { opacity: 0, scale: 1.5, duration: 0.3, ease: "power2.inOut"});
}

function fadeIn(target) {
  gsap.killTweensOf(target);
  return gsap.fromTo(target, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, delay: 0.1, ease: "power2.inOut"});
}

useEffect(() => {

  if (menuIsOpen !== null) {
    if (menuIsOpen) {
      fadeOut(menuIconOpen.current);
      fadeIn(menuIconClose.current);
    } else {
      fadeOut(menuIconClose.current);
      fadeIn(menuIconOpen.current);
    }
  }
  
  console.log("buttonUseEffect")

}, [menuIsOpen])

return (
<>

<button name="Menu" onClick={onClick} class="h-4 w-4 md:h-7 md:w-7 relative">

   {/*<svg class="h-5 w-5 
                  xs:h-6 xs:w-6 
                  md:h-7 md:w-7" 
        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>*/}
  
  <svg ref={menuIconOpen} class="h-4 w-4 md:h-7 md:w-7 absolute top-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
    <g transform="matrix(2,0,0,2,0,0)"><g>
      <line x1="13.5" y1="2" x2="0.5" y2="2" style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round"}}></line>
      <line x1="13.5" y1="7" x2="0.5" y2="7" style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round"}}></line>
      <line x1="13.5" y1="12" x2="0.5" y2="12" style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round"}}></line>
    </g></g>
  </svg>
  
  <svg ref={menuIconClose} class="h-4 w-4 md:h-7 md:w-7 absolute top-0 opacity-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
    <g transform="matrix(2,0,0,2,0,0)"><g>
      <line x1="13.5" y1="0.5" x2="0.5" y2="13.5" style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round"}}></line>
      <line x1="0.5" y1="0.5" x2="13.5" y2="13.5" style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round"}}></line>
    </g></g>
  </svg>

</button>

</>
)}

export default MenuButton