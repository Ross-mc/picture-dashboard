import axios from "axios";
const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

export default {
  getImages: async () => {
    const results = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&q=landscape&orientation=horizontal`);
    return results
  }
}