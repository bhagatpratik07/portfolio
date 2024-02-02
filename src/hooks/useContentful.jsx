import { createClient } from "contentful";

const contentfulSpace = import.meta.env.VITE_APP_CONTENTFUL_SPACE;
const contentfulToken = import.meta.env.VITE_APP_CONTENTFUL_TOKEN;

const useContentful = () => {
  const client = createClient({
    space: contentfulSpace,
    accessToken: contentfulToken,
    host: "cdn.contentful.com",
  });

  const getProjects = async () => {
    try {
      const entries = client.getEntries({
        content_type: "portfolioProjects",
        // select: "fields",
      });
      return entries;
    } catch (error) {
      console.log(error);
    }
  };
  return { getProjects };
};

export default useContentful;
