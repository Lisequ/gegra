import React from "react"
import styles from "../styles/Navbar.module.css"

import NavLink from "./NavLink"

export default function Navbar()
{
    return(
        <nav>
            <ul>
                <NavLink name="Aktualności" link="/aktualnosci"/>
                <NavLink name="Aktualności" link="/aktualnosci"/>
                <NavLink name="Aktualności" link="/aktualnosci"/>
            </ul>
        </nav>
    )
}