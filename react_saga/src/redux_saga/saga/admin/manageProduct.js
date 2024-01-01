import {
    get_product_data, post_product_data
} from "../../admin/api/api";
import {
    GET_PRODUCT_REJECTED,
    GET_PRODUCT_FULLFILIED,
    POST_PRODUCT_REJECTED,
    POST_PRODUCT_FULLFILIED,
} from "../../admin/action/action";
import {
    call,
    put
} from "redux-saga/effects";

//GET product data
export function* handle_get_product(action) {
    try {
        const res = yield call(get_product_data, action);
        console.log(res, "from manageproduct js page");
        const status = res.status;
        const data = res.data;
        if (status === 200) {
            yield put({
                type: GET_PRODUCT_FULLFILIED,
                data
            });
        } else {
            yield put({
                type: GET_PRODUCT_REJECTED,
                data
            });
        }
    } catch (err) {
        yield put({
            type: GET_PRODUCT_REJECTED
        })
    }
}

//POST product data
export function* handle_post_product(action) {
    try {
        const res = yield call(post_product_data, action);
        console.log(res, "from manageproduct js");

        const status = res.status;
        const data = res.data;

        if (status === 200) {
            yield put({
                type: POST_PRODUCT_FULLFILIED,
                data
            });
        } else {
            yield put({
                type: POST_PRODUCT_REJECTED,
                data
            });
        }
    } catch (err) {
        yield put({
            type: POST_PRODUCT_REJECTED
        })
    }
}