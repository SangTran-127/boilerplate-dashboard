import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState = {}

export const login = createAsyncThunk(
    "user/login",
    async (params, thunkAPI) => {
    
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending]: (state) => {},
        [login.rejected]: (state) => {},
        [login.fulfilled]: (state) => {}
    }
})