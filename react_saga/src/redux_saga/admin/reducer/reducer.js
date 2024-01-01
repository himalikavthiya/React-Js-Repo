import {
    GET_PRODUCT_FULLFILIED,
    GET_PRODUCT_PANDING,
    GET_PRODUCT_REJECTED,
    POST_PRODUCT_FULLFILIED,
    POST_PRODUCT_PANDING,
    POST_PRODUCT_REJECTED
} from "../action/action";

const initialState = {
    product: [],
    isLoading: false,
    isError: null
}

const adminReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_PRODUCT_PANDING: {
            return {
                ...state,
                isLoading: true,
                isError: null,
            };
        }
        case GET_PRODUCT_FULLFILIED: {
            return {
                ...state,
                isLoading: false,
                product: action.data,
                isError: null,
            };
        }
        case GET_PRODUCT_REJECTED: {
            return {
                ...state,
                isLoading: false,
                isError: action.data,
            };
        }
        case POST_PRODUCT_PANDING: {
            return {
                ...state,
                isLoading: true,
                isError: null,
            };
        }
        case POST_PRODUCT_FULLFILIED: {
            return {
                ...state,
                isLoading: false,
                product: state.product.concat(action.data),
                isError: null,
            };
        }
        case POST_PRODUCT_REJECTED: {
            return {
                ...state,
                isLoading: false,
                isError: action.payload,
            };
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default adminReducer;