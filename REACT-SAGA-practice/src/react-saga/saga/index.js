import { get_handle_saga } from "./root/rootSaga";

export function* rootSaga(){
    yield all([get_handle_saga()])
}