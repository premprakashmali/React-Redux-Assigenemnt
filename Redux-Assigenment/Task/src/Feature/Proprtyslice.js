import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const Proprty_insert = createAsyncThunk('Proprty_insert', async (formvalue) => {
    const res = await axios.post('http://localhost:3000/property', formvalue);
    return res
})

export const Proprty_get = createAsyncThunk('Proprty_insert', async()  => {
    const res = await axios.get('http://localhost:3000/property');
    return res.data
})

export const prot_get = createAsyncThunk('prot_get', async()  => {
    const res = await axios.get(`http://localhost:3000/property?cate_id`);
    return res.data
})

export const Proprty_delete = createAsyncThunk('Proprty_delete', async(id)  => {
    const res = await axios.delete(`http://localhost:3000/property/${id}`);
    return res
})







export const Proprtyslice = createSlice({
    name: 'property',
    initialState: {

        name: "prem p",
        property: [],
    },

    reducers: {
    },
    extraReducers:{
        [Proprty_get.fulfilled]:(state,action)=>{
         state.property=action.payload;  
        }
     },
})

export const { } = Proprtyslice.actions
export default Proprtyslice.reducer


