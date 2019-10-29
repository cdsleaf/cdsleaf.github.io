/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import useSiteMetadata from "../hooks/use-sitemetadata"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const MainDiv = styled.main`
  margin: 0 auto;
  max-Width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  flex-grow: 1;
`;

const Layout = ({ children }) => {
  const { title, author } = useSiteMetadata().siteMetadata;

  return (
    <Container >
      <Header siteTitle={title} />
      <MainDiv>
        {children}
      </MainDiv>
      <Footer author={author} />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
