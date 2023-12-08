import { configureStore } from "@reduxjs/toolkit";
import ChatReducer from "./Reducers/ChatReducer";
import ChangeFSReducer from "./Reducers/ChangeFSReducer";
import CRUDProductReducer from "./Reducers/CRUDProductReducer";

export const store = configureStore ({
    reducer:{
        //cac state cua store
        chatReducer: ChatReducer,
        changeFSReducer: ChangeFSReducer,
        crudroductReducer : CRUDProductReducer 
    }
})