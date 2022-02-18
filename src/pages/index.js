import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query {
    indexPageYaml {
      title
      titleDescriptedRu
      titleDescriptedIt
      descriptionRu
    }
  }  
`

const IndexPage = ({ data }) => (
  <>
  
  <Layout>
    <Seo title={data.indexPageYaml.title} />
    <div id="double-name-wrapper" 
  class="mt-12 mb-4 flex flex-wrap items-center justify-center
         font-esqadero leading-[1.5em] tracking-[0.15em] 
         [text-shadow:1px_1px_1px_rgb(77,77,77)] xs:[text-shadow:1px_1px_2px_rgb(0,0,0)]  
        ">
<div id="wrapper-l" class="text-right "> 
<p>
  {data.indexPageYaml.titleDescriptedRu
    .split(' ')
      .map( line => 
       <> {line} <br/> </>
   )}
</p>
</div> 
<div id="v-divider" class="px-[0.5em]">

</div>
<div id="wrapper-r" class=""> 
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
)

export default IndexPage
