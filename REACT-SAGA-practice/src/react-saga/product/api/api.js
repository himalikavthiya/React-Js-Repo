import axios from "axios";
import {
  BASE_URL,
  GET_PRODUCT_API
} from "../../constant";

export async function getApi() {
  return axios.get(BASE_URL + GET_PRODUCT_API)
    .then((res) => {
      console.log(res);
    })

}