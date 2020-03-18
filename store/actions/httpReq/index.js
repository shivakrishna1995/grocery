export const fetchAllProducts = () => {
    return (dispatch) => {
        dispatch({ 'type': 'FETCHING_ALL_PRODUCTS', 'status': 'Fetching' });

        fetch('../../../dummy.json').then((res) => res.json()).then((res) => {
            dispatch({ 'type': 'FETCH_ALL_PRODUCTS', 'payload': res, 'status': 'Fetched' })
        }).catch((e) => {
            dispatch({ 'type': 'ERROR_FETCHING_PRODUCTS', 'payload': [], 'status': e })
        })
    }
}