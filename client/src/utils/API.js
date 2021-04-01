import axios from "axios";
const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

export default {
  getImages: async () => {
    const results = await axios.get("https://api.pexels.com/v1/search?query=landscape&per_page=80&orientation=landscape", {
      headers: {
        Authorization: API_KEY
      }
    });
    return results
  }
}