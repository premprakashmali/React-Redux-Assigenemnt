import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const user_insert = createAsyncThunk('user_insert', async (formdata) => {
    const ress = await axios.post(`http://localhost:3000/user`, formdata);
    return ress;
});

export const user_get = createAsyncThunk('user_get', async () => {
    const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('uid')}`);
    return res.data;
});

// export const userdata_get =createAsyncThunk('userdata_get',async()=>{
//     const res= await axios.get(`http://localhost:3000/user/${id}`);
//     return res.data;
//  });


export const user_update = createAsyncThunk('data_update', async (formdata) => {
    const ress = await axios.patch(`http://localhost:3000/user/${formdata.id}`, formdata);
    return ress;
});






export const Dataslice = createSlice({
    name: 'user',
    initialState: {
        name: "prem prakash",
        dataa: [],
        user: [],
    },
    reducers: {
    },
    extraReducers: {

        [user_get.fulfilled]: (state, action) => {
            state.user = action.payload;
        }


    },
})

export const { } = Dataslice.actions
export default Dataslice.reducer