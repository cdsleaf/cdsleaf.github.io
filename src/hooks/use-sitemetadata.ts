import { graphql, useStaticQuery } from 'gatsby'

type SiteMetadata = {
  title: string;
  description: string;
  author: string;
};

function useSiteMetadata(): SiteMetadata {
  const { site: { siteMetadata }} = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  return siteMetadata;
};

export default useSiteMetadata;