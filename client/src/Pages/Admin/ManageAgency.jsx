
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/AdminHeader'
import AdminSidebar from '../../Components/AdminSidebar'
import axios from 'axios';


export default function ManageAgency() {
  const [user,setUser]=useState([])
    const [message, setMessage] = useState([])

    useEffect(() => {
     axios.get("http://localhost:5000/agency/view-agency")
     .then(response=>{
      if(response.data.success==true){
        setUser(response.data.data)
        console.log(response.data.data);
      }
    })
},[message])

const approveuser=(id)=>{
  console.log(id);
   axios.post(`http://localhost:5000/approve/${id}`)
    .then(response=>{
     if(response.data.success==true){
      alert(response.data.message)
      setMessage(response.data.message)
     }
   })
 }
 
 const deleteuser=(id)=>{
   console.log(id);
   axios.delete(`http://localhost:5000/agency/delete-agency/${id}`)
    .then(response=>{
     if(response.data.success==true){
      alert(response.data.message)
      setMessage(response.data.message)
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
      <h1><i className="fa fa-Agency" /> Agency</h1>
      {/* <p>A free and open source Bootstrap 4 admin template</p> */}
    </div>
    <ul className="app-breadcrumb breadcrumb">
      <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
      <li className="breadcrumb-item"><a href="#">Agency</a></li>
    </ul>
  </div>
  <div className='row'>
  {user&&user.map(item=>(
 <div className="col-lg-6">
 <div class="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
 <div class="carddd p-4"> 
     <div class=" images d-flex flex-column justify-content-center align-items-center"> 
     <button class="btnn btn-secondary"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4f0DI1X1WlH8pT-7AISElRfANyS2T5jf35A&usqp=CAU" height="100" width="100" /></button> 
         <span class="name mt-3">Username:{item?.registerdetails[0]?.name}</span> 
                <span class="idd">email:{item?.email} </span> 
                <span class="idd">Phone:{item?.registerdetails[0]?.mobile} </span> 
                <span class="idd">Id Proof:{item?.registerdetails[0]?.license_name} </span> 
                <span class="idd">Id number:{item?.registerdetails[0]?.licence_no} </span> 
                <span class="idd">district:{item?.registerdetails[0]?.district} </span> 
                
         <div class="d-flex flex-row justify-content-center align-items-center gap-2"> 
             <span class="idd1">Address:{item?.registerdetails[0]?.address} </span> 
         </div> 
         <div class="d-flex flex-row justify-content-center align-items-center mt-3"> 
                    {item.status==="1"?null:<button class="number" onClick={()=>{approveuser(item._id)}}>Approve </button>} 
                </div>  <div class="d-flex flex-row justify-content-center align-items-center mt-3"> 
                    <button class="number" onClick={()=>{deleteuser(item._id)}}>Delete </button>
                </div> 
         
         
         
         {/* <!-- <div class=" d-flex mt-2"> <button class="btn1 btn-dark"><a href="#" style="text-decoration: none;">Edit Profile</a></button>  --> */}
         </div> 
         </div>
         </div>
         </div>
  ))}
</div>

 


    </main>
    </div>
   
  )
}