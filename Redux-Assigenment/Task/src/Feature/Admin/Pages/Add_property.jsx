import React, { useEffect, useState } from 'react'
import Adm_header from '../Componts/Adm_header'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { data_get, data_insert } from '../../Dataslice'
import { redirect, useNavigate } from 'react-router-dom'
import { Proprty_insert } from '../../Proprtyslice'

function Add_property() {

    const dispatch = useDispatch()


    const { dataa } = useSelector((state) => state.dataa);
    useEffect(() => {
        dispatch(data_get());
    });

    const [formvalue, setformvalue] = useState({
        id: "",
        cate_id: "",
        cate_name:"",
        Price:"",
        houes_name: "",
        location: "",
        sqft: "",
        Bed: "",
        Bath: "",
        img:""
    })



    const changehandel = (e) => {
        setformvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(formvalue.data);
    }



    function validation() {
        let ans = true

        if (formvalue.cate_id == "") {
            toast.error('Select Property Category')
            ans = false
            return false
        }
        if (formvalue.houes_name == "") {
            toast.error('Enter Hose name')
            ans = false
            return false
        }
        if (formvalue.location == "") {
            toast.error('Enter propety location')
            ans = false
            return false
        }
        if (formvalue.sqft == "") {
            toast.error('Enter propety Square fit')
            ans = false
            return false
        }
        if (formvalue.Bed == "") {
            toast.error('Enter Bed ')
            ans = false
            return false
        }
        if (formvalue.Bath == "") {
            toast.error('Enter Bath ')
            ans = false
            return false
        }
        if (formvalue.Price == "") {
            toast.error('Enter Property Price ')
            ans = false
            return false
        }
        if (formvalue.img == "") {
            toast.error('Enter Image ')
            ans = false
            return false
        }
        return ans
    }
    const redirect = useNavigate()
    const submithandel = async (e) => {
        e.preventDefault()
        if (validation()) {
            dispatch(Proprty_insert(formvalue))
            toast.success(`data add succesfully`)
            setformvalue({ ...formvalue, id: "", cate_id: "",cate_name:"",Price:"", houes_name: "", location: "", sqft: "", Bed: "", Bath: "",img:"" })
            redirect('/manage_propty')

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
                                        <h5 className="card-title">Add Property </h5>

                                        <form className="row g-3" method='post' onChange={changehandel} onSubmit={submithandel}>
                                            <div className="col-12">
                                                {/* <label htmlFor="inputNanme4" className="form-label"> Name</label> */}
                                                <select className="form-control" value={formvalue.cate_id} name='cate_id' id="inputNanme4" >
                                                    <option value="">----------Select Property Category-----------</option>
                                                    {
                                                        dataa && dataa.map((val) => {
                                                            return (
                                                                <option value={val.id}>{val.category}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputEmail4" className="form-label">Property Category Name</label>
                                                <input type="text" className="form-control" value={formvalue.cate_name} name='cate_name' id="inputEmail4" />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputEmail4" className="form-label">Property Name</label>
                                                <input type="text" className="form-control" value={formvalue.houes_name} name='houes_name' id="inputEmail4" />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputEmail4" className="form-label">Location</label>
                                                <input type="text" className="form-control" value={formvalue.location} name='location' id="inputEmail4" />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputEmail4" className="form-label">Property square Fit</label>
                                                <input type="tel" className="form-control" value={formvalue.sqft} name='sqft' id="inputEmail4" />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputEmail4" className="form-label">Total Bed</label>
                                                <input type="number" className="form-control" value={formvalue.Bed} name='Bed' id="inputEmail4" />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputEmail4" className="form-label">Total Bath</label>
                                                <input type="number" className="form-control" value={formvalue.Bath} name='Bath' id="inputEmail4" />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputEmail4" className="form-label">Property Price</label>
                                                <input type="number" className="form-control" value={formvalue.Price} name='Price' id="inputEmail4" />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputEmail4" className="form-label">Image</label>
                                                <input type="url" className="form-control" value={formvalue.img} name='img' id="inputEmail4" />
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

export default Add_property