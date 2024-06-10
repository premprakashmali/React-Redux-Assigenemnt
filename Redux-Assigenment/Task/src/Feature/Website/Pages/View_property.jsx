import React, { useEffect, useState } from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Proprty_get, prot_get } from '../../Proprtyslice'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function View_property() {


  const { property } = useSelector((state) => state.property)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(Proprty_get())
    fetch()
  },[])

  const { new_id } = useParams();
  const [data, setData] = useState([]);
  const fetch = async () =>{
    const res = await axios.get(`http://localhost:3000/property?cate_id=${new_id}`);
    console.log(res.data);
    setData(res.data)
  }

  return (
    <div>

      <div className="container-xxl bg-white p-0">
        <Header />
        {/* Header Start */}
        <div className="container-fluid header bg-white p-0">
          <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 p-5 mt-lg-5">
              <h1 className="display-5 animated fadeIn mb-4">View Property</h1>
              <nav aria-label="breadcrumb animated fadeIn">
                <ol className="breadcrumb text-uppercase">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                  <li className="breadcrumb-item text-body active" aria-current="page">Property List</li>
                </ol>
              </nav>
            </div>
            <div className="col-md-6 animated fadeIn">
              <img className="img-fluid" src="/website/img/header.jpg" alt />
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* Search Start */}
        <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: 35 }}>
          <div className="container">
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-4">
                    <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                  </div>
                  <div className="col-md-4">
                    <select className="form-select border-0 py-3">
                      <option selected>Property Type</option>
                      <option value={1}>Property Type 1</option>
                      <option value={2}>Property Type 2</option>
                      <option value={3}>Property Type 3</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select className="form-select border-0 py-3">
                      <option selected>Location</option>
                      <option value={1}>Location 1</option>
                      <option value={2}>Location 2</option>
                      <option value={3}>Location 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-dark border-0 w-100 py-3">Search</button>
              </div>
            </div>
          </div>
        </div>
        {/* Search End */}
        {/* Property List Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-0 gx-5 align-items-end">
              <div className="col-lg-6">
                <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                  <h1 className="mb-3">Property Listing</h1>
                  <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                </div>
              </div>
              <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                  <li className="nav-item me-2">
                    <a className="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">Featured</a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">For Sell</a>
                  </li>
                  <li className="nav-item me-0">
                    <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">For Rent</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">

                  {
                    data && data.map((val) => {
                      return (

                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                          <div className="property-item rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                              <a href><img className="img-fluid" src={val.img} alt /></a>
                              <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                              <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{val.cate_name}</div>
                            </div>
                            <div className="p-4 pb-0">
                              <h5 className="text-primary mb-3">{val.Price} $</h5>
                              <a className="d-block h5 mb-2" href>{val.houes_name}</a>
                              <p><i className="fa fa-map-marker-alt text-primary me-2" />{val.location}</p>
                            </div>
                            <div className="d-flex border-top">
                              <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />{val.sqft}</small>
                              <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />{val.Bed} Bed</small>
                              <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />{val.Bath} Bath</small>
                            </div>
                          </div>
                        </div>

                      )
                    })
                  }
                  <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <a className="btn btn-primary py-3 px-5" href>Browse More Property</a>
                  </div>
                </div>
              </div>
           
        
            </div>
          </div>
        </div>
        {/* Property List End */}
        {/* Call to Action Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="bg-light rounded p-3">
              <div className="bg-white rounded p-4" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid rounded w-100" src="/website/img/call-to-action.jpg" alt />
                  </div>
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="mb-4">
                      <h1 className="mb-3">Contact With Our Certified Agent</h1>
                      <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                    </div>
                    <a href className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2" />Make A Call</a>
                    <a href className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2" />Get Appoinment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action End */}


      </div>
      <Footer />

    </div>
  )
}

export default View_property