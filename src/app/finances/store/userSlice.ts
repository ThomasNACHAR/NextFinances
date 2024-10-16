import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosFinances from "@/app/finances/axios/axiosFinances";

export const registerUser = createAsyncThunk("user/fetchUser", async (user, { rejectWithValue }) => {
    try {
        const response = await axiosFinances.post("/users/register", user)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
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
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                console.log('réussi !', action.payload)
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message ?? "Erreur !"
                console.log('échec !', action.payload)
            })
    }
})

export default userSlice.reducer