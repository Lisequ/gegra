/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import NavLink from "./NavLink"
import Foot from "./Foot"
import "../styles/layout.css"

export default function Layout({ children }) {

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Foot />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}