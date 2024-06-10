import React, { useState } from 'react'
import Footer from '../Componets/Footer'
import Header from '../Componets/Header'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { user_insert } from '../../Userslice'

function Signup() {

     const dispatch = useDispatch()

    const [formdata,setformvalue] = useState({

        id:"",
        name:"",
        email:"",
        password:"",
        number:"",
        img:"",
        status:"Unblock"
    })

    function validation(){
        var ans = true
        if(formdata.name===""){
            toast.error("Please name Required")
            ans = true
            return false
        }
        if(formdata.email===""){
            toast.error("Please email Required")
            ans = true
            return false
        }
        if(formdata.number===""){
            toast.error("Please number Required")
            ans = true
            return false
        }
        if(formdata.password===""){
            toast.error("Please password Required")
            ans = true
            return false
        }
      
        if(formdata.img===""){
            toast.error("Please Image Required")
            ans = true
            return false
        }
        return ans
    }

    const chngehandel = (e) =>{
        setformvalue({...formdata,id: new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value})
        console.log(formdata.data)
    }

    const submithand = async (e) =>{
        e.preventDefault()
        if(validation()){
          dispatch(user_insert(formdata))
            toast.success('Sign up succesfully')
            setformvalue({...formdata,id:"",name:"",email:"",number:"",password:"",img:""})


        }
    }







    return (
        <div>
            <Header />
            <div className="container-xxl bg-white p-0">
                {/* Header Start */}
                <div className="container-fluid header bg-white p-0">
                    <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                        <div className="col-md-6 p-5 mt-lg-5">
                            <h1 className="display-5 animated fadeIn mb-4">Sign up</h1>
                            <nav aria-label="breadcrumb animated fadeIn">
                                <ol className="breadcrumb text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-body active" aria-current="page">Sign up</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 animated fadeIn">
                            <img className="img-fluid" src="website/img/header.jpg" alt />
                        </div>
                    </div>
                </div>
                {/* Header End */}

                {/* Contact Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                            <h1 className="mb-3">Sign up</h1>
                        </div>
                        <div className="row g-4 d-flex justify-content-center">
                            <div className="col-md-6">
                                <div className="wow fadeInUp" data-wow-delay="0.5s" >
                                    <form method='post' onChange={chngehandel} onSubmit={submithand}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" value={formdata.name} name='name' className="form-control" id="name" placeholder="Your Name" />
                                                    <label htmlFor="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="email" value={formdata.email} name='email'  className="form-control" id="email" placeholder="Your Email" />
                                                    <label htmlFor="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" value={formdata.number} name='number'  className="form-control" id="subject" placeholder="Enter the number" />
                                                    <label htmlFor="subject">Enter the number</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" value={formdata.password} name='password'  className="form-control" id="subject" placeholder="Password" />
                                                    <label htmlFor="subject">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" value={formdata.img} name='img'  className="form-control" id="subject" placeholder="Enter the profile image" />
                                                    <label htmlFor="subject">Enter the profile image</label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3" type="submit">Sign up</button>
                                            </div>
                                            <div className="text-center mt-5">
                                                Already have an account?  <NavLink to="/login" style={{ textDecoration: "none", }} className="text-primary">Login</NavLink>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact End */}
                <Footer />
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
            </div>
        </div>
    )
}

export default Signup