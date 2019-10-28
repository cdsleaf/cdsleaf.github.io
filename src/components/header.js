import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background: #fcf6f6;
  margin-Bottom: 1.45rem;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
`;

const Home = styled.div`
margin: 0.5rem 1rem;
  a {
    text-decoration: none;
    color: #0e2130;
    font-size: 1rem;
  }
  a:hover {
    color: #c48b9e;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
  }
  li {
    margin: 0;
    padding: 0.5rem 1rem;
    float: left;
    color: #0e2130;
    font-size: 1rem;
  }
  li:hover {
    color: #c48b9e;
  }

`;
const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Home>
      <Link to="/">{siteTitle}</Link>
    </Home>
    <Nav>
      <ul>
        <Link to="/about"><li>About</li></Link>
        <Link to="/blog"><li>Blog</li></Link>
        <Link to="/portfolio"><li>Portfolio</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </Nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
