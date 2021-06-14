import React, { useState } from "react"
import * as styles from "../styles/ThemeSwitch.module.css"
import { useCookies } from "react-cookie"

export default function ThemeSwitch()
{
    const [cookies, setCookie, removeCookie] = useCookies(['theme'])
    const [isDark, setIsDark] = useState(cookies['theme'])
    return(
        <div className={styles.main} onClick={() => {setCookie('theme', !isDark); setIsDark(!isDark)}}>
            <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
            <link rel="stylesheet" href={isDark ? "/theme/vardark.css" : "/theme/varlight.css"} />
            <link rel="stylesheet" href="/theme/var.css" />
        </div>
    )
}