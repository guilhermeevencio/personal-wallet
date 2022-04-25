import { createSlice } from '@reduxjs/toolkit';

const userInfoSlice = createSlice({
  name: 'user',
  initialState: {
    user: {userName: '', userPassword: '', }
  },
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        user: {
          userName: action.payload.userName, 
          userPassword: action.payload.userPassword,
        }
      }
    }
  }
});

export const { addUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;