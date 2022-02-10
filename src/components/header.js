import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, pageTitle }) => (
  <header class="bg-white border-b border-black">
    <div class="py-[0.5rem] xs:py-[1.45rem] px-[0.25rem] xs:px-[1.0875rem]"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <p class="font-esqadero text-[1.5rem] xs:text-[2rem] uppercase tracking-[0.3em] [text-shadow:1px_1px_3px_rgb(0,0,0)] 
               text-center
              ">
        <Link to="/">{siteTitle}</Link>
      </p>
      <h1>{pageTitle}</h1>
      {/*<h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        </h1>*/}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
