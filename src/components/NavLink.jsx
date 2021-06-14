import React from "react"
import * as styles from "../styles/NavLink.module.css"

export default function NavLink({name, link})
{
    return(
        <li className={styles.main}>
            <a className={styles.a} href={link}>
                <h3>{name}</h3>
            </a>
        </li>
    )
}