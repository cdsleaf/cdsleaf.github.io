import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  border-top: 1px solid lightgray;
  padding: 2rem 2rem;
`;

type FooterProps = {
  author: string;
};

function Footer({ author }: FooterProps) {
  return (
    <StyledFooter>
      {`© ${new Date().getFullYear()} ${author}. powered by `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </StyledFooter>
  );
}

export default Footer;