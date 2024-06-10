import React, { useState } from 'react'
import Footer from '../Componets/Footer'
import Header from '../Componets/Header'
import { NavLink, useNavigate } from 'react-router-dom'
import axios, { formToJSON } from 'axios'
import { toast } from 'react-toastify'


function Login() {

    const redirect = useNavigate()
    const [logindata, setFormvalue] = useState({

        email: "",
        password: "",


    })

    const onChangehandel = async (e) => {
        setFormvalue({ ...logindata, [e.target.name]: e.target.value });
        console.log(logindata);
    }

    function validation() {
        var ans = true;
        if (logindata.email == "") {
            toast.error('email filed required');
            ans = false;
            return false;
        }
        if (logindata.password == "") {
            toast.error('password filed required');
            ans = false;
            return false;
        }
        return true;

    }

    const submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res_arr = await axios.get(`http://localhost:3000/user?email=${logindata.email}`,);
            console.log(res_arr)
            if (res_arr.data.length > 0) {

                if (res_arr.data[0].password == logindata.password) {
                    if (res_arr.data[0].status == "Unblock") {

                        localStorage.setItem('uid', res_arr.data[0].id)
                        localStorage.setItem('uname', res_arr.data[0].name)
                        localStorage.setItem('uimg', res_arr.data[0].img)

                        toast.success('Login success')
                        return redirect('/')
                    }
                    else {
                        toast.error('Account Blocked conatct shop')
                        setFormvalue({ ...logindata, email: "", password: "" });
                        return false;
                    }

                }
                else {
                    toast.error('password does not match')
                    setFormvalue({ ...logindata, email: "", password: "" })
                    return false;
                }

            }
            else {
                toast.error('email does not exit')
                setFormvalue({ ...logindata, email: "", password: "" })
                return false;
            }
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
                            <h1 className="display-5 animated fadeIn mb-4">Login</h1>
                            <nav aria-label="breadcrumb animated fadeIn">
                                <ol className="breadcrumb text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-body active" aria-current="page">Login</li>
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
                            <h1 className="mb-3">Login</h1>
                        </div>
                        <div className="row g-4 d-flex justify-content-center">
                            <div className="col-md-6">
                                <div className="wow fadeInUp" data-wow-delay="0.5s">
                                    <form method='post' onChange={onChangehandel} onSubmit={submithandel}>
                                        <div className="row g-3">

                                            <div className="col-md-12">
                                                <div className="form-floating">
                                                    <input type="email" value={logindata.email} name='email' className="form-control" id="email" placeholder="Your Email" />
                                                    <label htmlFor="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-floating">
                                                    <input type='password' value={logindata.password} name='password' className="form-control" id="name" placeholder="Your password" />
                                                    <label htmlFor="name">Password</label>
                                                </div>
                                            </div>


                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                                            </div>
                                            <div className="text-center mt-5">
                                                Already have an account?  <NavLink to="/signup" style={{ textDecoration: "none", }} className="text-primary">Sign up</NavLink>
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

export default Login