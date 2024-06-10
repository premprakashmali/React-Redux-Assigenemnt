import React, { useEffect, useState } from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { user_get, user_update, userdata_get } from '../../Userslice'
import { toast } from 'react-toastify'
function Edit_profile() {

    const redirect = useNavigate()

    const dispatch = useDispatch()
      
    // const { user } = useSelector((state) => state.user);

    useEffect(()=>{

       dispatch(user_get())

    })

    const [formvalue,setformvalue] = useState({
        id:"",
        name:"",
        email:"",
        number:"",
        password:"",
        img:""
    })

    
    const changehandel = (e) => {
        setformvalue({ ...formvalue, [e.target.name]: e.target.value })
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
        if (formvalue.img == "") {
            toast.error('img totalproprty')
            ans = false
            return false
        }
        return ans
    }

    const submithandel = async (e) => {
        e.preventDefault()
        if (validation()) {
            dispatch(user_update(formvalue))
            toast.success(`data update succesfuly`)
            redirect('/manage_cate')

        }

    }

  return (
    <div>
        {/* <Header/> */}

        <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 animated fadeIn mb-4">Edit Profile</h1>
                        <nav aria-label="breadcrumb animated fadeIn">
                            <ol className="breadcrumb text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-body active" aria-current="page">Profile</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                        <img className="img-fluid" src="website/img/header.jpg" alt />
                    </div>
                </div>


                <div className="container mt-5">
                <div className="main-body">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width={110} />
                                        <div className="mt-3">
                                            <h4>John Doe</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                            <button className="btn btn-primary">Follow</button>
                                            <button className="btn btn-outline-primary">Message</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <form action="" method='post' onChange={changehandel} onSubmit={submithandel}>
                                <div className="card-body">

                                <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">ID</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" value={formvalue.id} name='id' className="form-control" defaultValue="John Doe" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" value={formvalue.name} name='name'  className="form-control" defaultValue="John Doe" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" value={formvalue.email} name='email'  className="form-control" defaultValue="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" value={formvalue.number} name='number'  className="form-control" defaultValue="(239) 816-9029" />
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Image</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" value={formvalue.img} name='img' className="form-control" defaultValue="Bay Area, San Francisco, CA" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3" />
                                        <div className="col-sm-9 text-secondary">
                                          <button className="btn btn-primary px-4" onClick={(()=>redirect('/'))}>Save</button>
                                        </div>
                                    </div>
                                </div>
                                </form>
                                
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer />   */}
            </div>
    </div>
  )
}

export default Edit_profile
