import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

const getProducts = products => ({ type: GET_PRODUCTS, products})
const getSingleProduct = product => ({ type: GET_SINGLE_PRODUCT, product})

const initialState = {
    products: [],
    product: {}
}

export const getAllProducts = () => async dispatch => {
    try {
        const {data} = await axios.get('/api/products')
        dispatch(getProducts(data || initialState.products))
    } catch (error) {
        console.error(error)
    }
}
export const getProduct = id => async dispatch => {
    try {
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch(getSingleProduct(data || initialState.product))
    } catch (error) {
        console.error(error)
    }
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state, products:action.products
            }
        case GET_SINGLE_PRODUCT:
            return {
                ...state, product:action.product
            }
        default:
            return state
    }
}

export default productReducer