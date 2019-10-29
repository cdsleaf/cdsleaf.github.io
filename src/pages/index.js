import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useBlogPost from "../hooks/use-blogPost"
//IndexPage
export default () => {
  const { allMarkdownRemark } = useBlogPost();

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi, I am Theo Cho. I am a web developer.</h1>
      <p>Welcome to my site.</p>
      <p>Let's build something great.</p>
      <h4>{allMarkdownRemark.totalCount} Posts</h4>
      {allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}