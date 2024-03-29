import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Masud Rahman",
    email: "masudrhmn6560@gmail.com",
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {}
})

export default userSlice.reducer;