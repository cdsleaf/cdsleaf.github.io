import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledFooter = styled.footer`
  border-top: 1px solid lightgray;
  padding: 2rem 2rem;
`;

const Footer = ({ author }) => (
  <StyledFooter>
    {`© ${new Date().getFullYear()} ${author}. powered by `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </StyledFooter>
)

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer


