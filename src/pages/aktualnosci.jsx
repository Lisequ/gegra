import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Article from "../components/Article"

import aktualnosci from "../aktualnosci.json"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Aktualności:</h1>
    <ul>
      {aktualnosci.map(e => <Article title={e.title} subtitle={e.subtitle} link={e.link}/>)}
    </ul>
  </Layout>
)

export default SecondPage
