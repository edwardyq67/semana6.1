import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { setIsloading } from './isLoading.slice';//pantalla de carga
export const ProductSlice = createSlice({
    name: 'productSlice',
    initialState: [],
    reducers: {
        setProduct:(state,action)=>{
            const product=action.payload
            return product    
        }
    }
})
export const productThunk = () => (dispatch) => {
    dispatch(setIsloading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then((res) => dispatch(setProduct(res.data.data.products)))
        .finally(() => dispatch(setIsloading(false)));//pantalla de carga
}

export const { setProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
