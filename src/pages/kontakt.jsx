import React from "react"
import * as styles from "../styles/kontakt.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Kontakt()
{
    return(
        <Layout>
            <Seo title="Kontakt"/>
            <div className={styles.main}>
                <p><img style={{float: "right", width: "20%", height: "initial"}} src="http://ekoturystyka.zsem.edu.pl/img/logo.png" /></p>
                <h1>Ekoturystyka ZSEM</h1>
                <p>Szkolne Koło Geograficzne&nbsp;<em>Ekoturystyka ZSEM</em><br/>E-mail: <a href="mailto:ekoturystyka.zsem@wp.pl" target="_blank" rel="noopener">ekoturystyka.zsem@wp.pl</a></p>
                <p>Zespół Szkół Elektryczno-Mechanicznych<br/>ul. Limanowskiego 4<br/>33-300 Nowy Sącz<br/>Polska</p>
            </div>
        </Layout>
    )
}