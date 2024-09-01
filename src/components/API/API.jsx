import axios from 'axios';

const API_KEY = 'H6WHXDwAmITOiBOkAtNtBa1JgeD1ftLgvelYeR5ZyAE'; // Замініть на ваш власний Access Key з Unsplash
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data;
};
