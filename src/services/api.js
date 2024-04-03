import axios from 'axios';

const ACCESS_KEY = 'vmpj73WjzxomTLySKIx4P3K6GH4i7_4rkUcVcC9a4NU'; 
const API_URL = 'https://api.unsplash.com';

const requestPhotosByQuery = async (query, page) => {
  try {
    const response = await axios.get(`${API_URL}/search/photos`, {
      params: {
        query: query,
        page: page,
        per_page: 10, // Например, можно указать количество изображений на странице
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};

export { requestPhotosByQuery };




// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.unsplash.com",
  
// });
// export const requestPhotosByQuery = async (query = "", page= 1 ) => {
//   const params = new URLSearchParams({
//   client_id: 'vmpj73WjzxomTLySKIx4P3K6GH4i7_4rkUcVcC9a4NU'
// });
//   const { data } = await instance.get(`/search/photos?page=${page}&query=${query}&${params}`);

//   return data;
// };
//