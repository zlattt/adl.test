import * as React from "react"

const TextOuterStroke = ({ children, strokeSize, strokeColor, textColor }) => {
return (
  <>
    <div 
      style={{
        position: `absolute`,
        webkitTextStroke: `${strokeColor} ${strokeSize}px`,
        //[-webkit-text-stroke:black_1px] [-moz-text-stroke:black_1px]
        //class={`[-webkit-text-stroke:${strokeColor}_${strokeSize}px] [-moz-text-stroke:${strokeColor}_${strokeSize}px]`}
      }}
    >
      {children}
    </div>
    <div
      style={{
        position: `relative`,
        color: textColor,
      }}
    >{children}</div>
  </>
)
}

TextOuterStroke.defaultProps = {
  strokeSize: `2`,
  strokeColor: `black`,
  textColor: `white`
}

export default TextOuterStroke