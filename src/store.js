//state 보관소

import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user' ,
    initialState : {email : 'rjsdnr@pwu.ac.kr', nickname : "pkw" , profile : '/images/user5.jpg'},
    reducers : {

    }
});

export default configureStore({
    reducer : {
        user : user.reducer
    }
})