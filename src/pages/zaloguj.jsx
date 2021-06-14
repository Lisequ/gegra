import React from "react"
import * as styles from "../styles/zaloguj.module.css"

import Layout from "../components/layout"

export default function Zaloguj()
{
    return(
        <Layout>
            <div className={styles.container}>
                <form className={styles.form} method="POST" action="http://ekoturystyka.zsem.edu.pl/login.php">
                    <h1 className={styles.text}>Zaloguj się:</h1>
                    <input className={styles.input} type="text" placeholder="login"/> <br />
                    <input className={styles.input} type="password" placeholder="hasło"/> <br />
                    <input className={styles.input} type="submit" value="Zaloguj"/>
                </form>
            </div>
        </Layout>
    )
}