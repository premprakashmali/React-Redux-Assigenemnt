import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const data_insert=createAsyncThunk('data_insert',async(formvalue)=>{
   const res= await axios.post(`http://localhost:3000/category`,formvalue);
   return res;
});

export const data_get=createAsyncThunk('data_get',async()=>{
    const res= await axios.get(`http://localhost:3000/category`);
    return res.data;
 });

 export const data_delete=createAsyncThunk('data_delete',async(id)=>{
    const res= await axios.delete(`http://localhost:3000/category/${id}`);
    return res.data;
 });
 export const data_update=createAsyncThunk('data_update',async(formvalue)=>{
    const res= await axios.patch(`http://localhost:3000/category/${formvalue.id}`,formvalue);
    return res;
 });





export const Dataslice=createSlice({
    name:'user',
    initialState:{
        name:"prem prakash",
        dataa:[],
    },
    reducers:{
    },
    extraReducers:{
       [data_get.fulfilled]:(state,action)=>{
        state.dataa=action.payload;  
       }
    },
})

export const {  } = Dataslice.actions
export default Dataslice.reducer