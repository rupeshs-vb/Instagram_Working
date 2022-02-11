import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  post: [],
  searchUser: {},
  selectedUser: {},
};

const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload, "payload");
      state.user = action.payload;
    },
    resetForm: (state) => {
      state.user = initialState.user;
      state.post = initialState.post;
      state.searchUser = initialState.searchUser;
      state.selectedUser = initialState.selectedUser;
    },
    getUserPost: (state, action) => {
      state.post = action.payload;
    },
    getAllUsers: (state, action) => {
      state.searchUser = action.payload;
    },
    getSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
