import {configureStore} from '@reduxjs/toolkit'
import ChatReducer from './Reducers/ChatReducer'
import FontSizeReducer from './Reducers/FontSizeReducer'
import CRUDProductReducer from './Reducers/CRUDProductReducer'
import ProductReducer from './Reducers/ProductReducer'
import UserReducer from './Reducers/UserReducer'

export const store = configureStore({
    reducer:{
        //Các state của ứng dụng
        chatReducer:ChatReducer,
        fontSizeReducer:FontSizeReducer,
        crudProductReducer:CRUDProductReducer,
        productReducer:ProductReducer,
        userReducer:UserReducer
    }
})
