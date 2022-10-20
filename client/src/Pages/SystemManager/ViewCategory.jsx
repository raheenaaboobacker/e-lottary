import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ManagerHeader from '../../Components/ManagerHeader';
import Managersidebar from '../../Components/Managersidebar';
import { useNavigate } from 'react-router-dom';

export default function ViewCategory() {
    const [category, setCategory] = useState([])
    const navigate=useNavigate()
    useEffect(() => {
        axios.get("http://localhost:5000/lottary/view-category")
            .then(response => {
                if (response.data.success == true) {
                    setCategory(response.data.data)
                    console.log(response.data.data);
                }
            })
    }, [])

const viewTickets=(id)=>{
console.log(id);
navigate(`/viewTicket/${id}`)
}


    return (
        <div>
            <ManagerHeader />
            <Managersidebar />
            <main className="app-content">
                <div className="app-title">
                    <div>
                        <h1><i className="fa fa-Ticket Booking Details" /> Catagory Details</h1>
                        {/* <p>A free and open source Bootstrap 4 admin template</p> */}
                    </div>
                    <ul className="app-breadcrumb breadcrumb">
                        <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
                        <li className="breadcrumb-item"><a href="#">Catagory Details</a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="clearfix" />
                    <div className="col-md-12">
                        <div className="tile">
                            <h3 className="tile-title">Category Table</h3>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead style={{backgroundColor:"#898993"}}>
                                        <tr>
                                            <th>Category Name</th>
                                            <th>Category Type</th>
                                            <th>First Prie</th>
                                            <th>Second Prie</th>
                                            <th>Third Prie</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {category && category.map(item => (
                                            <tr onClick={()=>viewTickets(item._id)}>
                                                <td>{item.category_name}</td>
                                                <td>{item.category_type}</td>
                                                <td>{item.first_price}</td>
                                                <td>{item.second_price}</td>
                                                <td>{item.third_price}</td>
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