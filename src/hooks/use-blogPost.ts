import { graphql, useStaticQuery } from "gatsby";

type BlogPost = {
  allMarkdownRemark: {
    totalCount: number;
    edges: {
      node: {
        id: string;
        frontmatter: {
          title: string;
          date: string;
        };
        fields: {
          slug: string;
        };
        excerpt: string;
      };
    }[];
  };
};

function useBlogPost(): BlogPost {
  return useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `);
}

export default useBlogPost;
