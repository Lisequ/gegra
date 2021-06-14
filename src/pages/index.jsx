import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function IndexPage() {
    return (
        <Layout>
            <Seo title="Home" />
            <h1>Strona główna</h1>
        </Layout>
    )
}