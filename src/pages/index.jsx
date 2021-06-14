import * as React from "react"
import * as styles from "../styles/index.module.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function IndexPage() {
    return (
        <Layout>
            <Seo title="Home" />
            <StaticImage className={styles.imgcon} imgClassName={styles.img} src="../images/panorama.jpg"/>
            <h1 className={styles.title}>Ekoturystyka ZSEM</h1>
        </Layout>
    )
}