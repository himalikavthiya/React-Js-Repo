import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_PENDING } from "../../product/action/action";
import { handle_get_api } from "../manageProduct/manageProduct";


export function* get_handle_saga(){
    yield takeLatest(GET_PRODUCT_PENDING,handle_get_api);
}