import React from "react"
import * as styles from "../styles/chmura.module.css"

import Layout from "../components/layout"

export default function Chmura()
{
    return(
        <Layout>
            <div className="container">

            <form className={styles.form} action="phpvsc.php" method="POST">
                <h1>Zaloguj się:</h1>
                <br/><input type="text" name="user" value="user"></input>
                <br/><input type="password" name="passwd" value="passwd"></input>
                <br/><input type="submit" value="Zaloguj się"></input>
            </form>
            <i className={"fas fa-cloud " + styles.icon}></i>
            </div>
        </Layout>
    )
}