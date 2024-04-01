import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/v1",
  client_id: 585363
  YOUR_ACCESS_KEY: 'vmpj73WjzxomTLySKIx4P3K6GH4i7_4rkUcVcC9a4NU'
});

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

export const requestPhotosByQuery = async (query = "") => {
  const { data } = await instance.get(`/products/search?q=${query}`);

  return data;
};


async function searchPicture(){
    const BASE_URL = 'https://pixabay.com/api/?';
    const params = new URLSearchParams({
    key: '42108829-54920070c40067c28d8228e80',
    q: nameSearch,
    image_type:'photo',
    orientation:'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: PER_PAGE,
  });
  const url = BASE_URL;


   try{
     const res = await axios.get(url, {params});
     return res.data;
   }catch(error){
     console.error('Error retrieving image link:', error);
   };
}