import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithTopic = async (topic, page = 0, perPage = 5) => {
  const response = await axios.get(`/search?query=${topic}`, {
    params: {
      hitsPerPage: perPage,
      page,
    },
  });
  return response.data.hits;
};
