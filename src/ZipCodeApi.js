/**
 * An Api wrapper to handle the call to search for city and state based
 * on a zip code
 */
import axios from "axios";

const Url = "//api.zippopotam.us/us/";

const ZipCodeApi = {
  search: async zipCode => {
    return axios
      .get(Url + zipCode)
      .then(res => {
        return res.data;
      })
      .catch(() => {
        return null;
      });
  }
};

export default ZipCodeApi;
