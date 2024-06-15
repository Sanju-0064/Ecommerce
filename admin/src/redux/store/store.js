import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import userReducer from "../reducers/userSlice";


const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  userInfo: userReducer,
  
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  applyMiddleware : thunk,
});
