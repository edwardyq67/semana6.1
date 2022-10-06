import { configureStore } from '@reduxjs/toolkit'
import favoritesSlice from './slices/favorites.slice'
import isLoadingSlice from './slices/isLoading.slice'
import ProductSlice from './slices/Product.slice'

export default configureStore({
    reducer: {
        isloading: isLoadingSlice,
        productSlice:ProductSlice,
        favorites:favoritesSlice
    }
})
