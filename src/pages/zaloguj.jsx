import React from "react"
import * as styles from "../styles/zaloguj.module.css"

export default function Zaloguj()
{
    return(
        <form className={styles.letsago} method="POST" action="http://ekoturystyka.zsem.edu.pl/login.php">
            <input type="text" placeholder="login"/>
            <input type="password" placeholder="hasło"/>
            <input type="submit" value="Zaloguj"/>
        </form>
    )
}