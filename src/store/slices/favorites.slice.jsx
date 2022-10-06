import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getToken';
import { setIsloading } from './isLoading.slice';
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        setFavorites:(state,action)=>{
            return action.payload
        }
    }
})
export const favoriteThunk = () => (dispatch) => {
    dispatch(setIsloading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/purchases",getConfig())
        .then((res) => dispatch(setFavorites(res.data.data.purchases)))
        .finally(() => dispatch(setIsloading(false)));
}
export const { setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
