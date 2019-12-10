import React from "react";
import Styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TitleName = Styled.h2`
  padding: 1rem 0;
  border-bottom: 1px solid grey;
`;

const DESCRIPTION =
  "I am Theo Cho, Web Front-end developer. I love developing Apps which make our world more beautiful.";

function About() {
  return (
    <Layout>
      <SEO title="about" description={DESCRIPTION} />
      <TitleName>About</TitleName>
      <section>
        <h2>Theo Cho</h2>
        <p>
          I am a Web Front-end developer.
          <br />I love developing Apps which make our world more beautiful.
        </p>
        <ul>
          <li>
            Email: <a href="mailto:cdsleaf@gmail.com">cdsleaf@gmail.com</a>
          </li>
          <li>
            Github: <a href="https://github.com/cdsleaf">github.com/cdsleaf</a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default About;
