import * as React from "react"
import { useEffect, useRef } from "react"

import { gsap } from "gsap"

const Line = ({ top, bottom, left, right, size, offset, duration, color, timeline, delay, fullscreen }) => {

  const lineRef = useRef();

  useEffect(() => {
    if (timeline) {
    (left===undefined && right===undefined) ? 
      timeline.fromTo(lineRef.current, { translateX: `${(offset-0.5)*100}%`, scaleX: 0, opacity: 0 }, { scaleX: 1, translateX: 0, opacity: 1, duration: duration, delay: delay, ease: "power2.inOut" }, 0)
      : timeline.fromTo(lineRef.current, { translateY: `${(offset-0.5)*100}%`, scaleY: 0, opacity: 0 }, { scaleY: 1, translateY: 0, opacity: 1, duration: duration, delay: delay, ease: "power2.inOut" }, 0)
    }
      console.log('line useEffect');
      //gsap.fromTo(lineRef.current, { translateX: `${(offset-0.5)*100}%`, scaleX: 0 }, { scaleX: 1, translateX: 0, duration: 1, delay: 0.1, ease: "power2.inOut" })
      //: gsap.fromTo(lineRef.current, { translateY: `${(offset-0.5)*100}%`, scaleY: 0 }, { scaleY: 1, translateY: 0, duration: 1, delay: 0.1, ease: "power2.inOut" })
  }, [timeline])
  //consider addAnimation prop callback instead of Timeline prop
return (
//<div style={{overflow: `hidden`, position: `absolute`,}}>
<div ref={lineRef} 
     style={{
       position: `absolute`,
       ...( (left===undefined && right===undefined) ? 
              { height: `${size}px`, top: `${top}`, bottom: `${bottom}`,
                //translateX: `${(offset-0.5)*100}%`,
                ...( fullscreen ? {width: `100vw`, marginLeft: `50%`, transform: `translateX(-50%)`,}
                                  : {left: 0, right: 0,} ),
              }
              : { width: `${size}px`, left: `${left}`, right: `${right}`, top: 0, bottom: 0,
                  //translateY: `${(offset-0.5)*100}%`,
                } ),      
       backgroundColor: color,
       //
       //transform: `scaleX(0)`
     }}
>
</div>
//</div>
)}

Line.defaultProps = {
  //horizontal: true,
  //vertical: false,
  fullscreen: false,
  offset: 0.5,
  duration: 1,
  size: 1,
  color: `black`,
  delay: 0,
  //right: `1rem`,
}

export default Line