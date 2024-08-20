import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import {Link} from "gatsby"


const IndexPage = () => (
  <Layout>
    <div>
      <h1>
        <b>Dani</b>
        <ul>
          <li>
            <a href="/home">click</a>
          </li>
          <li>
            <Link to="/home">click gatsby</Link>
          </li>
        </ul>
      </h1>
    </div>
 
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
