import React, { useEffect, useState } from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'

import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { user_get } from '../../Userslice'
import { toast } from 'react-toastify'
import { redirect, useNavigate } from 'react-router-dom'

function Web_profile() {

    const redirect = useNavigate()
    
     const dispatch = useDispatch()
      
     const { user } = useSelector((state) => state.user);

     useEffect(()=>{

        dispatch(user_get())

     })

    return (
        <div>
            <Header />
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 animated fadeIn mb-4">View Profile</h1>
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
                                <form action="" method=''>
                                <div className="card-body">

                                <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">ID</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" value={user.id} className="form-control" defaultValue="John Doe" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" value={user.name} className="form-control" defaultValue="John Doe" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" value={user.email} className="form-control" defaultValue="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" value={user.number} className="form-control" defaultValue="(239) 816-9029" />
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Image</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" value={user.img} className="form-control" defaultValue="Bay Area, San Francisco, CA" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3" />
                                        <div className="col-sm-9 text-secondary">
                                          <button className="btn btn-primary px-4" onClick={(()=>redirect('/'))}>Save</button>
                                          <button className="btn btn-primary px-4 ms-2" onClick={(()=>redirect('/edit_profile/'+ user.id))}>Edit</button>
                                        </div>
                                    </div>
                                </div>
                                </form>
                                
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>

        </div>
    )
}

export default Web_profile