import {
    takeLatest
} from "@redux-saga/core/effects";
import {
 handle_get_product, handle_post_product
} from "../admin/manageProduct";
import { GET_PRODUCT_PANDING, POST_PRODUCT_PANDING } from "../../admin/action/action";

// GET - product saga
export function* get_product_saga() {
    yield takeLatest(GET_PRODUCT_PANDING, handle_get_product);
}

// POST - product saga
export function* post_product_saga() {
    yield takeLatest(POST_PRODUCT_PANDING, handle_post_product);
}
