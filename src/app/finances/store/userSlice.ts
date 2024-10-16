import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosFinances from "@/app/finances/axios/axiosFinances";

export const registerUser = createAsyncThunk("user/fetchUser", async (user) => {
    const response = await axiosFinances.post("/users/registers", user)
    return response.data
})

interface User {
    username: string,
    email: string,
    balance: number,
    isAdmin: boolean,
}
interface UserState {
    userInfo: null | User;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    userInfo: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false
                state.error = null
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message ?? "Erreur !"
            })
    }
})

export default userSlice.reducer