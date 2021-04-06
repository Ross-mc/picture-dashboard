import axios from "axios";
const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

export default {
  getImages: async (searchTerm) => {
    const results = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&q=${searchTerm}&orientation=horizontal`);
    return results
  }
}