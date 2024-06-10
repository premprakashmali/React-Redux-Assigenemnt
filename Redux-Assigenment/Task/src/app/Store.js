import { configureStore } from '@reduxjs/toolkit'
import Dataslice from '../Feature/Dataslice'
import Userslice from '../Feature/Userslice'
import Proprtyslice from '../Feature/Proprtyslice'



export default configureStore({
    reducer: {
        dataa:Dataslice,
        user:Userslice,
        property:Proprtyslice,

    },
  })