import React from "react"
import * as styles from "../styles/Article.module.css"

export default function Article({title, subtitle, link})
{
    return(
        <li className={styles.mian}>
            <article className="container">
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
            </article>
            <a href={link}><button className={styles.button}>Czytaj dalej</button></a>
        </li>
    )
}