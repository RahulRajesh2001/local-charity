import { ALL_PRODUCT_REQUEST
    ,ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL, 
    NEW_USERPRODUCT_REQUEST,
    NEW_USERPRODUCT_SUCCESS,
    NEW_USERPRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_RESET,
    DELETE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,
    CLEAR_ERRORS} from "../constants/productConstants"

export const productsReducer = (state = { products: [] }, action) => {
        switch (action.type) {
          case ALL_PRODUCT_REQUEST:
            case ADMIN_PRODUCT_REQUEST:
        
            return {
              loading: true,
              products: [],
            };
          case ALL_PRODUCT_SUCCESS:
            return {
              loading: false,
              products: action.payload.products,
              productsCount: action.payload.productsCount,
              resultPerPage:action.payload.resultPerPage,
             
            };
            case ADMIN_PRODUCT_SUCCESS:
              return{

                loading:false,
                products:action.payload,

              }
      
          case ALL_PRODUCT_FAIL:
            case ADMIN_PRODUCT_FAIL:
         
            return {
              loading: false,
              error: action.payload,
            };
      
          case CLEAR_ERRORS:
            return {
              ...state,
              error: null,
            };
          default:
            return state;
        }
      };


      export const productDetailsReducer = (state = { product: {} }, action) => {
        switch (action.type) {
          case PRODUCT_DETAILS_REQUEST:
            return {
              loading: true,
              ...state,
            };
          case PRODUCT_DETAILS_SUCCESS:
            return {
              loading: false,
              product: action.payload,
            };
          case PRODUCT_DETAILS_FAIL:
            return {
              loading: false,
              error: action.payload,
            };
      
          case CLEAR_ERRORS:
            return {
              ...state,
              error: null,
            };
          default:
            return state;
        }
          
      };


  //Reducers for creating products for users

  export const newUserProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case NEW_USERPRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_USERPRODUCT_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          product: action.payload.product,
        };
      case NEW_USERPRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };

  //product reducer for deleting updating products from product list in admin panel

  export const productReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_PRODUCT_REQUEST:
      case UPDATE_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_PRODUCT_FAIL:
      case UPDATE_PRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_PRODUCT_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_PRODUCT_RESET:
        return {
          ...state,
          isUpdated: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };

  