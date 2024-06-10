import React, { useState } from 'react'
import Adm_header from '../Componts/Adm_header'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { data_insert } from '../../Dataslice'
import { redirect, useNavigate } from 'react-router-dom'

function Add_categ() {

  const dispatch = useDispatch()
  const [formvalue, setformvalue] = useState({
    id: "",
    category: "",
    img: "",
    totalproprty: ""

  })

  const changehandel = (e) => {
    setformvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
    console.log(formvalue.data);
  }



  function validation() {
    let ans = true

    if (formvalue.category == "") {
      toast.error('Cetgory required')
      ans = false
      return false
    }
    if (formvalue.img == "") {
      toast.error('img required')
      ans = false
      return false
    }
    if (formvalue.totalproprty == "") {
      toast.error('Enter propety value Required')
      ans = false
      return false
    }
    return ans
  }
     const  redirect=useNavigate()
  const submithandel = async (e) => {
    e.preventDefault()
    if (validation()) {
      dispatch(data_insert(formvalue))
      toast.success(`data add succesfully`)
      setformvalue({ ...formvalue, id: "", category: "", img: "", totalproprty: "" })
      redirect('/manage_cate')

    }

  }


  return (

    <div>
      <Adm_header />
      <div className="app-wrapper mt-5">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <main id="main" class="main">
            <div class="row">
              <div class="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Add Categories </h5>

                    <form className="row g-3" method='post' onChange={changehandel} onSubmit={submithandel}>
                      <div className="col-12">
                        <label htmlFor="inputNanme4" className="form-label"> Name</label>
                        <input type="text" className="form-control" value={formvalue.category} name='category' id="inputNanme4" />
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputEmail4" className="form-label">Image</label>
                        <input type="url" className="form-control" value={formvalue.img} name='img' id="inputEmail4" />
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputEmail4" className="form-label">Total Property</label>
                        <input type="number" className="form-control" value={formvalue.totalproprty} name='totalproprty' id="inputEmail4" />
                      </div>
                      <div className="text-center mt-5">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>


    </div>
  )
}

export default Add_categ