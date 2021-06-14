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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Helmet>
            <ul>
                <NavLink name="Aktualności" link="/aktualnosci"/>
                <NavLink name="Aktualności" link="/aktualnosci"/>
                <NavLink name="Aktualności" link="/aktualnosci"/>
            </ul>
        </nav>
    )
}