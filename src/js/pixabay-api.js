import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const API_KEY = '46849389-2041d53e6d8b95dbaa186e245';
const BASE_URL = 'https://pixabay.com/api';

let page = 1;
let currentQuery = '';

const fetchImages = async query => {
  if (currentQuery === query) {
    page++;
  } else {
    page = 1;
    currentQuery = query;
  }

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: `${query}`,
    page,
    per_page: 15,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  try {
    const response = await axios.get(`${BASE_URL}/?${searchParams}`);
    if (response.data.hits.length === 0) {
      // iziToast.error({
      //   message:
      //     'Sorry, there are no images matching your search query. Please try again!',
      // });
      return null;
    }

    return { hits: response.data.hits, totalHits: response.data.totalHits };
  } catch (error) {
    throw error;
  }
};

export default fetchImages;
