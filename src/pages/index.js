import * as React from "react"

import { useState, useEffect, createContext } from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

import Teaser from "../components/teaser"

export const query = graphql`
  query {
    indexPageYaml {
      title
      titleDescriptedRu
      titleDescriptedIt
      descriptionRu
      loremIpsum
    }
  }  
`

const IndexPage = ({ data }) => {  

  const loremIpsum = data.indexPageYaml.loremIpsum

  const teaserData = [
    {
      title: `test1`,
      text: loremIpsum,
    },
    {
      title: `test2`,
      text: loremIpsum,
    },
    {
      title: `test3`,
      text: loremIpsum,
    },
    {
      title: `test4`,
      text: loremIpsum,
    },
  ]

return  (
  <>
  <Layout>
    <Seo title={data.indexPageYaml.title} />
    
    {/*<div id="double-name-wrapper" 
    class="mt-48 mb-4 flex flex-wrap items-center justify-center
         font-montserrat leading-[1.5em] tracking-[0.15em] 
         
">*/}

    <div 
         style={{
           display: `grid`,
           gridAutoColumns: `1fr`,
           gridAutoFlow: `column`,
         }}
    >    
<div id="wrapper-l" class="text-right m-[1rem]"> 
<p>
  {data.indexPageYaml.titleDescriptedRu
    .split(' ')
      .map( line => 
       <> {line} <br/> </>
   )}
</p>
</div> 

<div id="wrapper-r" class="m-[1rem]"> 
<p>
  {data.indexPageYaml.titleDescriptedIt
    .split(' ')
      .map( line => 
      <> {line} <br/> </>
   )}
</p>
</div> 
</div>

    <p class="">
      Студия Интерьерного Декора
    </p>
    
    <p>{loremIpsum}</p>

    <Teaser data={teaserData} />

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
  </>
)}

export default IndexPage
