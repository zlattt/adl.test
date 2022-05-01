import * as React from "react"
import {  useContext } from "react"

import LayoutContext from "../components/layoutContext"

const PageContentWrapper = ({ children }) => {

const [ context, editContext ] = useContext(LayoutContext);

return (
<>
<div class="my-[10px]"
     style={{
       //margin: `10px`,
       display: `flex`,
       alignItems: `center`,
       justifyContent: `center`,
       border: `1px solid`,
       borderColor: `black`,

       visibility: `hidden`,
     }}
     id="dummyHeader"
>
<p class="text-[1.25rem] sm:text-[1.5] md:text-[2rem]"                                            
           style={{
             fontFamily: `"Trajan Pro 3"`,
             fontWeight: `400`,
             letterSpacing: `0.1em`,
           }}
        >
          <div
                style={{
                  display: `flex`,
                  alignItems: `center`,
                }}
          >

            <span style={{fontSize: `0.5em`,}}>&bull;</span>
            {//siteTitle
            //<br/>
            }
            ArtDecorLab
            <span style={{fontSize: `0.5em`,}}>&bull;</span>

          </div>
        </p>

</div>
<div
     style={{
       //margin: `${context?.headerHeight}px auto`,
       margin: `0 auto`,
       maxWidth: 960,
       padding: `0 1.0875rem 1.45rem`,
       //overflowX: `auto`,
     }}
>
  {children}    
</div>
</>
)}

export default PageContentWrapper