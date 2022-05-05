import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import history from "../history";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN = "token";

const initialState = {
  user: {},
  success: false,
  error: false,
  loading: false,
};

// create thunk

// export const me = createAsyncThunk("auth/me", async () => {
//   // const token = window.localStorage.getItem(TOKEN);
//   const token = await AsyncStorage.getItem(TOKEN);    
//   console.log('HERE', token)
//   if (token) {
//     console.log("NOW HERE")
//     const res = await axios.get("http://localhost:8080/auth/me", {
//       headers: {
//         authorization: token,
//       },
//     });
//     console.log('RES DATA', res.data)
//     return res.data;
//   }
// });


export const me = createAsyncThunk("auth/me", async () => {
  // const token = window.localStorage.getItem(TOKEN);
  const token = await AsyncStorage.getItem(TOKEN)
  console.log("HERE", token)
  if (token) {
    console.log("NOW HERE")
    const res = await axios.get("http://192.168.1.7:8080/auth/me", {
      headers: {
        authorization: token,
      },
    })
    console.log("RES DATA", res.data)
    return res.data
  }
})



export const register = createAsyncThunk(
  "auth/register",
  async (formInfo, { dispatch, rejectWithValue }) => {
    try {
      const { username, password, email, formName } = formInfo;
      const res = await axios.post(`http://localhost:8080/auth/${formName}`, {
        username,
        password,
        email,
      });
      // window.localStorage.setItem(TOKEN, res.data.token);
      await AsyncStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);
// IP FOR MY PC ==> 192.168.1.7

export const authenticate = createAsyncThunk(
  "auth/authenticate",
  async (formInfo, { dispatch, rejectWithValue }) => {
    try {
      const { username, password, formName } = formInfo
      console.log("form INFO", formInfo)
      const res = await axios.post(`http://192.168.1.7:8080/auth/${formName}`, {
        username,
        password,
      })
      console.log("token is", res.data.token)
      // window.localStorage.setItem(TOKEN, res.data.token);
      await AsyncStorage.setItem(TOKEN, res.data.token)
      dispatch(me())
    } catch (error) {
      console.error(error)
      return rejectWithValue(error)
    }
  }
)
// export const authenticate = createAsyncThunk(
//   "auth/authenticate",
//   async (formInfo, { dispatch, rejectWithValue }) => {
//     try {
//       const { username, password, formName } = formInfo;
//       console.log("form INFO", formInfo)
//       const res = await axios.post(`http://localhost:8080/auth/${formName}`, {
//         username,
//         password,
//       });
//       console.log("token is", res.data.token);
//       // window.localStorage.setItem(TOKEN, res.data.token);
//       await AsyncStorage.setItem(TOKEN, res.data.token);
//       dispatch(me());
//     } catch (error) {
//       console.error(error);
//       return rejectWithValue(error);
//     }
//   }
// );

export const logout = createAsyncThunk("auth/logout", async () => {
  // window.localStorage.removeItem(TOKEN);
  await AsyncStorage.removeItem(TOKEN);
  // history.push("/login");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [me.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.user = action.payload;
    },
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.rejected]: (state) => {
      state.error = true;
    },
    [authenticate.fulfilled]: (state, action) => {
      console.log('ACTIONNNNN', action)
      state.loading = false;
      state.success = true;
      state.user = action.payload;
    },
    [authenticate.pending]: (state) => {
      state.loading = true;
    },
    [authenticate.rejected]: (state) => {
      state.error = true;
    },
    [logout.fulfilled]: (state) => {
      state.success = false;
      state.user = null;
    },
  },
});

const authReducer = authSlice.reducer;
export default authReducer;
