import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://picsum.photos/list',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getSliderImagesData() {
  let responseData = [];
  try {
    const response = await apiClient.get();
    responseData = response.data;
  } catch (err) {
    throw err;
  }
  return responseData;
}
