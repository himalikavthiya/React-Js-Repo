import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_PENDING,
  GET_PRODUCT_SUCCESS,
} from "../action/action";

const initialState = {
  product: [],
  isLoading: false,
  isError: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_PENDING:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isError: false,
        product: action.data,
        isLoading: false,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
};

export default productReducer;
