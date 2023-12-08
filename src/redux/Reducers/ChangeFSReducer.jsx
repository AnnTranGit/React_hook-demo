import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fSize : '16'
}

const ChangeFSReducer = createSlice({
  name: 'ChangeFSReducer',
  initialState,
  reducers: { 
    changeFontSizeAction : (state,action) => {
        const {payload} = action;
        state.fSize += payload
    }
  }
});

export const {changeFontSizeAction} = ChangeFSReducer.actions

export default ChangeFSReducer.reducer