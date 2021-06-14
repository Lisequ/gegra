import React from "react"
import * as styles from "../styles/chmura.module.css"

import Layout from "../components/layout"

export default function Chmura()
{
    return(
        <Layout>
            <div className={styles.container}>

            <form className={styles.form} action="http://ekoturystyka.zsem.edu.pl/chmura/index.php" method="POST">
                <h1>Zaloguj się:</h1>
                <br/><input className={styles.input} type="text" name="fm_usr" value="user" required autoFocus></input>
                <br/><input className={styles.input} type="password" name="fm_pwd" value="passwd" required></input>
                <br/><input className={styles.input} type="submit" value="Zaloguj się"></input>
            </form>
            <i className={"fas fa-cloud " + styles.icon}></i>
            </div>
        </Layout>
    )
}