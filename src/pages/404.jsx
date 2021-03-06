import * as React from "react"
import * as styles from "../styles/404.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function NotFoundPage() {
    return (
        <Layout>
            <Seo title="404: Not found" />
            <h1>404: Coś nie pykło</h1>
            <p>Być albo nie być; oto jest pytanie.</p>
            <p>Znajdujesz się w dziwnej przestrzeni, w której coś być powinno, a jednak nie ma.</p>
        </Layout>
    )
}