import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/AdminHeader'
import AdminSidebar from '../../Components/AdminSidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ViewClaim() {
  const [message, setMessage] = useState([])
  const navigate=useNavigate()
  useEffect(() => {
      axios.get("http://localhost:5000/claim/view-claim")
          .then(response => {
              if (response.data.success == true) {
                setMessage(response.data.data)
                  console.log(response.data.data);
              }
          })
  }, [])

  return (
    <div> 
    <AdminHeader/>
    <AdminSidebar/>
    <main className="app-content">
                <div className="app-title">
                    <div>
                        <h1><i className="fa fa-Ticket Booking Details" /> Claimed Ticket Details</h1>
                        {/* <p>A free and open source Bootstrap 4 admin template</p> */}
                    </div>
                    <ul className="app-breadcrumb breadcrumb">
                        <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
                        <li className="breadcrumb-item"><a href="#">Claimed Ticket Details</a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="clearfix" />
                    <div className="col-md-12">
                        <div className="tile">
                            <h3 className="tile-title">Claimed Ticket</h3>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead style={{backgroundColor:"#898993"}}>
                                        <tr>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Ticket Number</th>
                                            <th>Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {message && message.map(item => (
                                            <tr >
                                                <td>{item?.result[0]?.name}</td>
                                                <td>{item?.result[0]?.mobile}</td>
                                                <td>{item.ticket_number}</td>
                                                <td>{item.price}</td>
                                                <td></td>
                                            </tr>
                                        ))}



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main></div>
  )
}

