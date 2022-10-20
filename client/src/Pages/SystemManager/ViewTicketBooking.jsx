import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ManagerHeader from '../../Components/ManagerHeader';
import Managersidebar from '../../Components/Managersidebar';

export default function ViewTicketBooking() {
    const [ticket,setTicket]=useState([])
    const [message, setMessage] = useState([])

    useEffect(() => {
     axios.get("http://localhost:5000/book/view-all-booked-ticket")
     .then(response=>{
      if(response.data.success==true){
        setTicket(response.data.data)
        console.log(response.data.data);
      }
    })
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
                        <li className="breadcrumb-item"><a href="#">ticket Booking Details</a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="clearfix" />
                    <div className="col-md-12">
                        <div className="tile">
                            <h3 className="tile-title">Ticket Booking Table</h3>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead style={{backgroundColor:"#898993"}}>
                                        <tr>
                                            <th>ticket Number</th>
                                            <th>Date</th>
                                            <th>District</th>
                                            <th>User Name</th>
                                            <th>Conatct Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {ticket && ticket.map(item => (
                                            <tr >
                                                <td>{item?.ticketdetails?.ticket_number}</td>
                                                <td>{item.date}</td>
                                                <td>{item.district}</td>
                                                <td>{item?.userdetails[0]?.name}</td>
                                                <td>{item?.userdetails[0]?.mobile}</td>
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