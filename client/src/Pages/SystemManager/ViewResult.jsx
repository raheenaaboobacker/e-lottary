import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ManagerHeader from '../../Components/ManagerHeader'
import Managersidebar from '../../Components/Managersidebar'
import moment from "moment"
export default function ViewResult() {
    const [ticket,setticket]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/result/view-result')
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
                        <li className="breadcrumb-item"><a href="#">Result Details</a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="clearfix" />
                    <div className="col-md-12">
                        <div className="tile">
                            <h3 className="tile-title">Result Table</h3>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead style={{backgroundColor:"#898993"}}>
                                        <tr>
                                            <th>Ticket Name</th>
                                            <th>First</th>
                                            <th>Second</th>
                                            <th>Third 1</th>
                                            <th>Third 2</th>
                                            <th>Third 3</th>
                                            <th>Draw Held On</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {ticket && ticket.map(item => (
                                            <tr >
                                                <td>{item?.ticketdetails?.category_name}</td>
                                                <td>{item.first}</td>
                                                <td>{item.second}</td>
                                                <td>{item.third}</td>
                                                <td>{item.third2}</td>
                                                <td>{item.third3}</td>
                                                <td>{moment(item.result_date).format('MM/DD/YYYY')}</td>
                                                <td>{item?.status==="0"?<>Not Approved</>:<> approved</>}</td>

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