/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { CookiesProvider } from "react-cookie"
import CookieConsent from "react-cookie-consent"

import Navbar from "./Navbar"
import NavLink from "./NavLink"
import Foot from "./Foot"
import "../styles/layout.css"

export default function Layout({ children }) {

    return (
        <CookiesProvider>
            <Navbar />
            <main>{children}</main>
            <Foot />
            <CookieConsent
                location="bottom"
                buttonText="Akceptuję"
                cookieName="Accepted"
                style={{ background: "var(--gradient-three)" }}
                buttonStyle={{ background: "var(--secondary-color)", fontSize: "13px", borderRadius: "15px"}}
                expires={150}>
                    Ta strona używa plików cookie
            </CookieConsent>
        </CookiesProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}