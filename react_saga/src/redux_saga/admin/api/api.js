import axios from "axios";
import {
    BASE_URL,
    GET_PRODUCT_API,
    POST_PRODUCT_API
} from "../../constant";

export async function get_product_data() {
    // const header = {
    //     'Content-type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    // }
    return axios.get(BASE_URL + GET_PRODUCT_API)
        .then((res) => {
            console.log(res)
            const data = res.data
            const status = res.status
            return {
                data,
                status
            }
        }).catch((err) => {
          console.log(err)
        })
}

export async function post_product_data() {
    // const header = {
    //     'Content-type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    // }
    return axios.post(BASE_URL + POST_PRODUCT_API,action)
        .then((res) => {
            console.log(res)
            // const data = res.data
            // const status = res.status
            // return {
            //     data,
            //     status
            // }
        }).catch((err) => {
            console.log(err)
        })
}