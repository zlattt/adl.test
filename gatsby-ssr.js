const React = require("react")
/*const fontUrl1 = require("/src/fonts/esqaderoffcy4f.woff2")*/

/*todo(maybe): make an array of fonts and map them in onPreRenderHtml function, may be more handful to add/delete fonts

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  //headComponents.unshift(<link key="montserrat" rel="preload" href={require("/src/fonts/montserrat-regular.woff2").default} as="font" type="font/woff2" crossOrigin="" />)
  headComponents.unshift(<link key="trajanpro3" rel="preload" href={require("/src/fonts/TrajanPro3Light.woff2").default} as="font" type="font/woff2" crossOrigin="" />)
  replaceHeadComponents(headComponents)
}

//const LayoutContextCustomProvider = require("/src/components/layoutContext")
//
//exports.wrapRootElement = ({ element }) => {
//  return (
//    <LayoutContextCustomProvider>
//      {element}
//    </LayoutContextCustomProvider>
//  )
//}