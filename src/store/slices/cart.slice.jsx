import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getToken';
import { setIsloading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setProduct:(state,action)=>{
            return action.payload
        }
    }
})
export const cartFavorite = () => (dispatch) => {
    dispatch(setIsloading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart",getConfig())
        .then((res) => dispatch(setProduct(res.data.data.cart.products)))
        .finally(() => dispatch(setIsloading(false)));
}
export const { setProduct } = cartSlice.actions;

export default cartSlice.reducer;
