import axios from "axios";
import { BASE_URL, GET_PRODUCT_API } from "../../constant";

export const getApi = async () => {
  const api = await axios
    .get("http://13.235.248.55:8000/v1/user/list")
    .then((res) => {
      console.log(res);
    });

  console.log(api);
};
