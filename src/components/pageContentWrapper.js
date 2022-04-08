import * as React from "react"
import {  useContext } from "react"

import LayoutContext from "../components/layoutContext"

const PageContentWrapper = ({ children }) => {

const [ context, editContext ] = useContext(LayoutContext);

return (
<div
    style={{
      margin: `${context?.headerHeight}px auto`,
      maxWidth: 960,
      padding: `0 1.0875rem 1.45rem`,
    }}
>
  {children}    
</div>
)}

export default PageContentWrapper