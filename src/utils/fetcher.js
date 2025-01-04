import axios from "axios";

const fetcher = (url) => {
  console.log("Fetching ", url);
  return axios
    .get(url, { withCredentials: true })
    .then((response) => response.data);
};
export default fetcher;
