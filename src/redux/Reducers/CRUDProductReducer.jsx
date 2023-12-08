import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrProduct: [],
    productInfo : {
        id:'',
        name: '',
        price:''
    }
}

const CRUDProductReducer = createSlice({
  name: 'CRUDProductReducer',
  initialState,
  reducers: {
    handleInputProductAction: (state,action) => {
        const {id,value} = action.payload;
        state.productInfo[id] = value
    }
  }
});

export const {handleInputProductAction} = CRUDProductReducer.actions

export default CRUDProductReducer.reducer