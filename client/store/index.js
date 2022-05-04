import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth";
import userReducer from "../redux/user"
import { getDefaultMiddleware } from "@reduxjs/toolkit"

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// })

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

