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
  <Layout>
    <Seo title={data.indexPageYaml.title} />
    <h1>{data.indexPageYaml.title}</h1>
    <div id="double-name-wrapper" 
         class="flex flex-wrap items-center justify-center">
     <div id="left-wrapper" class="half-wrapper text-right"> 
       <p>
         {data.indexPageYaml.titleDescriptedRu
           .split(' ')
             .map( line => 
              <> {line}<br/> </>
          )}
       </p>
      </div> 
      <div id="right-wrapper" class="half-wrapper"> 
       <p>
         {data.indexPageYaml.titleDescriptedIt
           .split(' ')
             .map(line => 
             <> {line}<br/> </>
          )}
       </p>
      </div> 
    </div>
    <p class="w-24 md:w-32 lg:w-48
              text-red-500
    ">
      Now go build something great.
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
)

export default IndexPage
