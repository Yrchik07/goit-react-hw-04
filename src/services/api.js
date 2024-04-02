import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  
});
// let currentPage = 1;
export const requestPhotosByQuery = async (query = "") => {
  const params = new URLSearchParams({
    // page: currentPage,
  client_id: 'vmpj73WjzxomTLySKIx4P3K6GH4i7_4rkUcVcC9a4NU'
});
  const { data } = await instance.get(`/search/photos?query=${query}&${params}`);

  return data;
};
