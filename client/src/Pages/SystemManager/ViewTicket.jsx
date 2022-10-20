import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ManagerHeader from '../../Components/ManagerHeader'
import Managersidebar from '../../Components/Managersidebar'

export default function Viewticket() {
    const [ticket,setticket]=useState([])
    const {id}=useParams()
    console.log(id);
    useEffect(()=>{
        axios.get(`http://localhost:5000/lottary/view-ticket/${id}`)
        .then(response => {
            if (response.data.success == true) {
                setticket(response.data.data)
                console.log(response.data.data);
            }
        }).catch(err=>{console.log(err.response.data.message);})
    },[])
  return (
    <div>
        <ManagerHeader/>
        <Managersidebar/>
        <main className="app-content">
                    <div className="app-title">
                    <div>
                        <h1><i className="fa fa-ticket Booking Details" /> ticket Details</h1>
                        {/* <p>A free and open source Bootstrap 4 admin template</p> */}
                    </div>
                    <ul className="app-breadcrumb breadcrumb">
                        <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
                        <li className="breadcrumb-item"><a href="#">ticket Details</a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="clearfix" />
                    <div className="col-md-12">
                        <div className="tile">
                            <h3 className="tile-title">ticket Table</h3>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead style={{backgroundColor:"#898993"}}>
                                        <tr>
                                            <th>ticket Number</th>
                                            <th>Date</th>
                                            <th>ticket Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {ticket && ticket.map(item => (
                                            <tr >
                                                <td>{item.ticket_number}</td>
                                                <td>{item.date}</td>
                                                <td>{item.status===0?<>Not booked</>:<>{item.status===1?<>Prebooked</>:<>booked</>}</>}</td>
                                            </tr>
                                        ))}



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                </main>

    </div>
  )
}
