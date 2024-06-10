import React, { useEffect, useState } from 'react'
import Adm_header from '../Componts/Adm_header'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { data_delete, data_get, data_update } from '../../Dataslice'
import { toast } from 'react-toastify'

function Manage_categ() {


    const redirect = useNavigate()
    
    const [search,setsearch] = useState('')

    const { dataa } = useSelector((state) => state.dataa);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(data_get());
    });

    // const redirect = useNavigate()
    return (
        <div>
            <Adm_header />
            <div class="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4 mt-5">
                    <div className="container-xl">
                        <div className="row g-3 mb-4 align-items-center justify-content-between">
                            <div className="col-auto">
                                <h1 className="app-page-title mb-0">Mange Property:</h1>
                            </div>
                            <div className="col-auto">
                                <div className="page-utilities">
                                    <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
                                        <div className="col-auto">
                                            <form className="table-search-form row gx-1 align-items-center">
                                                <div className="col-auto">
                                                    <input type="text" onChange={((e)=>setsearch(e.target.value))} id="search-orders" name="searchorders" className="form-control search-orders" placeholder="Search" />
                                                </div>
                                                <div className="col-auto">
                                                    <button type="submit"  className="btn app-btn-secondary">Search</button>
                                                </div>
                                            </form>
                                        </div>{/*//col*/}
                                        <div className="col-auto">
                                            <select className="form-select w-auto">
                                                <option selected value="option-1">All</option>
                                                <option value="option-2">This week</option>
                                                <option value="option-3">This month</option>
                                                <option value="option-4">Last 3 months</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-5'>

                            <table class="table">
                                <thead class="table-dark">
                                    <tr>
                                        <td>Id</td>
                                        <td>Property catrgory</td>
                                        <td>Images</td>
                                        <td>Action</td>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        dataa && dataa.filter((value)=>{
                                            return search.toLowerCase() === ''? value : value.category.toLowerCase().includes(search)
                                        }).map((value) => {

                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.category}</td>
                                                    <td><img src={value.img} height={'50px'} alt="" /></td>
                                                    <td><button className='me-3 btn btn-success' onClick={() => {
                                                        
                                                        (redirect('/edit_protpy_cat/' + value.id))
                                                    }}>Edit</button>
                                                        <button className='btn btn-danger' onClick={() => {
                                                            dispatch(data_delete(value.id))
                                                            toast.success('data delete succesfuly')
                                                        }}>delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default Manage_categ