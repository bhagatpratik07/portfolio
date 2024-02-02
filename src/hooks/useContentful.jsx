import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "fgonx8ddl4mw",
    accessToken: "hZTxoKDzwTy3bJMV5Tle_B_UD7bzuPwkt3JIgsRUf2Q",
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
