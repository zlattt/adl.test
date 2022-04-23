/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it JY339745

import './src/styles/global.css'

//import * as React from "react"

//import { LayoutContextCustomProvider } from "/src/components/layoutContext"


export const onClientEntry = () => {
  console.log("We've started!")
}

export const onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")
}

//export const wrapRootElement = ({ element }) => {
//  return (
//    <LayoutContextCustomProvider>
//      {element}
//    </LayoutContextCustomProvider>
//  )
//}