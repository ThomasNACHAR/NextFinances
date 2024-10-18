import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosFinances from "@/app/finances/axios/axiosFinances";

export const registerUser = createAsyncThunk("user/registerUser", async (user, { rejectWithValue }) => {
    try {
        const response = await axiosFinances.post("/users/register", user)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
})

export const loginUser = createAsyncThunk("user/loginUser", async (user, { rejectWithValue }) => {
    try {
        const response = await axiosFinances.post("/users/login", user)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
})

export const fetchUser = createAsyncThunk("user/fetchUser", async (token, { rejectWithValue }) => {
    try {
        const response = await axiosFinances.get("/users/user")
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
})

export const addFunds = createAsyncThunk("user/addFunds", async (body, { rejectWithValue }) => {
    try {
        const response = await axiosFinances.post("/users/add_funds", body)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
})

interface User {
    username: string,
    email: string,
    balance: number,
    admin: boolean,
}
interface UserState {
    userInfo: null | User
    loading: boolean
    error: string | null,
    connectionPanel: string
}

const initialState: UserState = {
    userInfo: null,
    loading: false,
    error: null,
    connectionPanel: "login"
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setConnectionPanel: (state: UserState, action) => {
            state.connectionPanel = action.payload
        },
        logout: (state: UserState) => {
            localStorage.removeItem("token")
            state.userInfo = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                console.log('réussi !', action.payload)
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? "Erreur !"
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload)
                localStorage.setItem("token", action.payload.token)
                state.userInfo = action.payload.user
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? "Erreur !"
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.userInfo = action.payload.user
            })
            .addCase(addFunds.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(addFunds.fulfilled, (state, action) => {
                state.userInfo.balance = action.payload.user.balance
            })
            .addCase(addFunds.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? "Erreur !"
            })
    }
})

export const { setConnectionPanel, logout } = userSlice.actions

export default userSlice.reducer