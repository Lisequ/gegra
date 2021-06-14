import React from "react"
import * as styles from "../styles/Navbar.module.css"

import { Helmet } from "react-helmet"
import NavLink from "./NavLink"
import ThemeSwitch from "./ThemeSwitch"

export default function Navbar()
{
    return(
        <nav className={styles.nav}>
            <Helmet>
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Helmet>
            <ul className={styles.list}>
                <NavLink name="Ekoturystyka" link="/"/>
                <NavLink name="Aktualności" link="/aktualnosci"/>
                <NavLink name="Chmura" link="/chmura"/>
                <NavLink name="Kontakt" link="/kontakt"/>
                <NavLink name="Zaloguj" link="/zaloguj"/>
                <ThemeSwitch/>
            </ul>
        </nav>
    )
}