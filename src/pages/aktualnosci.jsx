import * as React from "react"
import * as styles from "../styles/aktualnosci.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Article from "../components/Article"

import aktualnosci from "../aktualnosci.json"

export default function SecondPage()
{
    return (
        <Layout>
            <Seo title="Aktualności" />
            <div className={styles.main}>
                <h1>Aktualności:</h1>
                <ul>
                    {aktualnosci.map(e => <Article title={e.title} subtitle={e.subtitle} link={e.link} />)}
                </ul>
            </div>
        </Layout>
    )
}