import React from "react"
import * as styles from "../styles/Article.module.css"

export default function Article({title, subtitle, link})
{
    return(
        <li className={styles.li}>
            <fieldset className={styles.mian}>
                <legend className={styles.legend}><h5 className={styles.title}>{title}</h5></legend>
                <h4>{subtitle}</h4>
                <a href={link}><button className={styles.button}>Czytaj dalej</button></a>
            </fieldset>
        </li>
    )
}