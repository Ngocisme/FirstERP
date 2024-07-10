import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from '../../constants'


export const login = createAsyncThunk('auth/login', async (userCredentials, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}users/login`, userCredentials)
        if (response.status === 200) {
            console.log(response.data)
            return response.data
        } else {
            return
        }
    } catch (error) {
        return rejectWithValue(error.response.dataß)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        role: null,
        token: localStorage.getItem('token') || null,
        loading: false,
        error: null,
        isLoggedIn: false
    },
    reducers: {
        logout: (state) => {
            state.user = null
            state.role = null
            state.error = null
            state.loading = false
            state.isLoggedIn = false
            localStorage.removeItem('token')
        },
        // loginSuccess:
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload.username
                state.role = action.payload.roleId
                state.token = action.payload.token
                state.isLoggedIn = true
                localStorage.setItem('token', action.payload.token)
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.token = null;
                state.user = null;
                state.role = null;
                state.error = action.payload
                localStorage.removeItem('token')
            })
    }
})

export const { logout, setCredentials } = authSlice.actions
export default authSlice.reducer