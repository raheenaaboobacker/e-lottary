import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/AdminHeader'
import AdminSidebar from '../../Components/AdminSidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function ApproveCategory() {
      
  const [category, setCategory] = useState([])
  const [message, setMessage] = useState(true)
    const navigate=useNavigate()
    useEffect(() => {
        axios.get("http://localhost:5000/lottary/view-all-category")
            .then(response => {
                if (response.data.success == true) {
                    setCategory(response.data.data)
                    console.log(response.data.data);
                }
            })
    }, [message])

  const approveCategory=(id)=>{
    console.log(id);
     axios.post(`http://localhost:5000/lottary/approve-category/${id}`)
      .then(response=>{
       if(response.data.success==true){
        alert(response.data.message)
        setMessage(!message)
       }
     })
    }


  return (
    <div> 
    <AdminHeader/>
    <AdminSidebar/>
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
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {category && category.map(item => (
                                            <tr >
                                                <td>{item.category_name}</td>
                                                <td>{item.category_type}</td>
                                                <td>{item.first_price}</td>
                                                <td>{item.second_price}</td>
                                                <td>{item.third_price}</td>
                                                {item.status==="0"?<td><button onClick={()=>approveCategory(item._id)}  className='btn btn-success'>approve</button></td>:null}
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
