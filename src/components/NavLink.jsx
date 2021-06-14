import React from "react"
import styles from "../styles/NavLink.module.css"

export default function NavLink({name, link})
{
    return(
        <li>
            <a href={link}>
                <h3>{name}</h3>
            </a>
        </li>
    )
}