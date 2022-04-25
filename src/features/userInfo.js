import { createSlice } from '@reduxjs/toolkit';

const userInfoSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    userPassword: '', 
  },
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        userName: action.payload.userName,
        userPassword: action.payload.userPassword,
      }
    }
  }
});

export const { addUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;