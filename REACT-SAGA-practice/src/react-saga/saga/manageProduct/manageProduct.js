import { getApi } from "../../product/api/api";
import { call } from "redux-saga/effects";

export function* handle_get_api(action) {
  try {
    const res = yield call(getApi, action);
    console.log(res);
    // const data = res.data;
    // // const status=res.status;
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
}
