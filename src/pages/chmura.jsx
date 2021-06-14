import React from "react"
import styles from "../styles/chmura.module.css"

import Layout from "../components/layout"

export default function Chmura()
{
    return(
        <Layout>
            <form action="phpvsc.php" method="POST">
                <h1>Zaloguj się:</h1>
                <br><input type="user" name="user" value="user"></input>
                <br><input type="passwd" name="passwd" value="passwd"></input>
                <input type="submit" value="Zaloguj się"></input>
            </form>
            <i className="fas fa-cloud"></i>
        </Layout>
    )
}