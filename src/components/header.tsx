import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: #fcf6f6;
  margin-bottom: 1.45rem;
  border-bottom: 1px solid lightgray;
  padding: 0 1rem;
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

type HeaderProps = {
  siteTitle: string;
};

function Header({ siteTitle }: HeaderProps) {
  return (
    <StyledHeader>
      <Home>
        <Link to="/">{siteTitle}</Link>
      </Home>
      <Nav>
        <ul>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
