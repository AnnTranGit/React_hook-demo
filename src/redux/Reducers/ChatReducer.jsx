import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment : [
        {name:'abc', content:'hello you'},
        {name:'xyz', content:'hello me'},

    ],
    userComment : {
        name:'',
        content:''
    }
}

const ChatReducer = createSlice({
  name: "ChatReducer",
  initialState,
  reducers: {
    updateUserCommentAction : (state,action) => {
        const{id,value} = action.payload;
        state.userComment[id] = value;
    },
    addUserCommentAction : (state,action) => {
        const {payload} = action;
        state.arrComment.push(payload);
        console.log('action submit', action);
    }
  }
});

export const {updateUserCommentAction,addUserCommentAction} = ChatReducer.actions

export default ChatReducer.reducer