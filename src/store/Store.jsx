import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from "../servies/ItemSlice";
import PostReducer from "../servies/PostSlice";
import UserReducer from "../servies/UserSlice";

export const store = configureStore({
  reducer: {
    items: ItemReducer,
    posts: PostReducer,
    users: UserReducer,
  },
});
