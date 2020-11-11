import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Search from "./search"

const Header = () => (
    <StaticQuery
        query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
        render={data => (
            <header>
                <h1>Search using gatsby-plugin-elasticlunr-search</h1>
                <Search searchIndex={data.siteSearchIndex.index} />
            </header>
        )}
    />
)

export default Header