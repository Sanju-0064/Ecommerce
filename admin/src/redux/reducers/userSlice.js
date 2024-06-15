import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  islogin: false,
  user: {},
  token:""
};

export const UserSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setIslogin: (state, action) => {
      state.islogin = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setIslogin, setUser,setToken } = UserSlice.actions;

export default UserSlice.reducer;
