import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Header() {

    const redirect = useNavigate();

    const userlogout = () => {
        localStorage.removeItem('uid');
        localStorage.removeItem('uname');
        toast.success('Logout Success');
        redirect('/login');
        return false;
    }
    return (
        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src="/website/img/icon-deal.png" alt="Icon" style={{ width: 30, height: 30 }} />
                    </div>
                    <h1 className="m-0 text-primary">Makaan</h1>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <NavLink to='/' className="nav-item nav-link active">Home</NavLink>
                        <NavLink to='/about' className="nav-item nav-link">About</NavLink>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <NavLink to='/property_list' className="dropdown-item">Property List</NavLink>
                                <NavLink to='/property_type' className="dropdown-item">Property Type</NavLink>
                                <NavLink to='/property_agent' className="dropdown-item">Property Agent</NavLink>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <NavLink to='/testimonial' className="dropdown-item">Testimonial</NavLink>
                                {/* <NavLink to='*' className="dropdown-item">404 Error</NavLink> */}
                            </div>
                        </div>
                        <NavLink to='/contact' className="nav-item nav-link">Contact</NavLink>
                    </div>

                    {(() => {
                        if (localStorage.getItem('uid')) {
                            return (
                                <>

                                    <div className="nav-item dropdown">

                                        <NavLink className='me-3 text-decoration-none nav-link dropdown-toggle text-dark' data-bs-toggle="dropdown">

                                            <i class="fa-solid fa-user me-2" style={{ color: "#000000" }}></i>

                                            <span className='text-dark'>
                                                <b>{localStorage.getItem('uname')}</b>
                                            </span>

                                        </NavLink>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <li><Link class="dropdown-item" to="/w_profile">My profile</Link></li>
                                            <li><a class="dropdown-item" onClick={userlogout} >Log out</a></li>
                                        </div>
                                    </div>
                                </>

                            )
                        }
                        else {
                            return (
                                <>

                                    <NavLink to='/signup' className="btn btn-primary px-3 d-none d-lg-flex">Sign up</NavLink>

                                </>
                            )
                        }
                    })()} 
                </div>
            </nav>


        </div>

    )
}

export default Header