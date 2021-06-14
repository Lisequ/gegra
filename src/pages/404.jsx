import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function NotFoundPage() {
    return (
        <meta charset="utf-8">
        <Layout>
            <Seo title="404: Not found" />
            <h1>404: Coś nie pykło</h1>
            <p>Być albo nie być; oto jest pytanie.</p>
        </Layout>
    )
}