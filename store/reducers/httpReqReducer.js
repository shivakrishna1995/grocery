let initialState = {
    products: [],
    productsStatus: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_ALL_PRODUCTS":
            return { ...state, productsStatus: action.status }
        case "FETCHED_ALL_PRODUCTS":
            return { ...state, products: action.payload, productsStatus: action.status }
        case "ERROR_FETCHING_PRODUCTS":
            return { ...state, productsStatus: action.status }
        default:
            return state;
    }
}