import React from "react"
import styles from "../styles/Navbar.module.css"

import NavLink from "./NavLink"

export default function Navbar()
{
    return(
        <nav>
            <Helmet>
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
            </Helmet>
            <ul>
                <NavLink name="Aktualności" link="/aktualnosci"/>
                <NavLink name="Aktualności" link="/aktualnosci"/>
                <NavLink name="Aktualności" link="/aktualnosci"/>
            </ul>
        </nav>
    )
}