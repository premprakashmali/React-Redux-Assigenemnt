import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Feature/Website/Pages/Home'
import About from './Feature/Website/Pages/About'
import Property_list from './Feature/Website/Pages/Property_list'
import Property_type from './Feature/Website/Pages/Property_type'
import Property_agent from './Feature/Website/Pages/Property_agent'
import Tastimoial from './Feature/Website/Pages/Tastimoial'
import PNF from './Feature/Website/Pages/PNF'
import Contact from './Feature/Website/Pages/Contact'
import Signup from './Feature/Website/Pages/Signup'
import Login from './Feature/Website/Pages/Login'



// Admin side--------------->
import Dasboard from './Feature/Admin/Pages/Dasboard'
import Add_categ from './Feature/Admin/Pages/Add_categ'
import Manage_categ from './Feature/Admin/Pages/Manage_categ'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit_propty_cat from './Feature/Admin/Pages/Edit_propty_cat'
import Web_profile from './Feature/Website/Pages/Web_profile'
import Edit_profile from './Feature/Website/Pages/Edit_profile'
import View_property from './Feature/Website/Pages/View_property'
import Add_property from './Feature/Admin/Pages/Add_property'
import Manage_propty from './Feature/Admin/Pages/Manage_propty'

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* <-----------------------------------Webiste side ----------------------------------->*/}

          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/property_list' element={<Property_list />}></Route>
          <Route path='/property_type' element={<Property_type />}></Route>
          <Route path='/property_agent' element={<Property_agent />}></Route>
          <Route path='/testimonial' element={<Tastimoial />}></Route>
          <Route path='*' element={<PNF />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/w_profile' element={<Web_profile />}></Route>
          <Route path='/edit_profile/:id' element={<Edit_profile />}></Route>
          <Route path='/view_propty/:new_id' element={<View_property />}></Route>


          {/* <-----------------------------------Webiste side ----------------------------------->*/}




          {/* <-----------------------------------Admin side ----------------------------------->*/}

          <Route path='/dashboard' element={<Dasboard />}></Route>
          <Route path='/add_category' element={<Add_categ />}></Route>
          <Route path='/manage_cate' element={<Manage_categ />}></Route>
          <Route path='/edit_protpy_cat/:id' element={<Edit_propty_cat />}></Route>
          <Route path='/add_property' element={<Add_property />}></Route>
          <Route path='/manage_propty' element={<Manage_propty />}></Route>









          {/* <-----------------------------------Admin side ----------------------------------->*/}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
