
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/AdminHeader'
import AdminSidebar from '../../Components/AdminSidebar'
import axios from 'axios';

export default function ManageSystemManager() {
  const [user,setUser]=useState([])
  const [message, setMessage] = useState([])

  useEffect(() => {
   axios.get("http://localhost:5000/system/view-system-manager")
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
 axios.delete(`http://localhost:5000/admin/delete-manager/${id}`)
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
    <h1><i className="fa fa-System Manager" /> System Manager</h1>
    {/* <p>A free and open source Bootstrap 4 admin template</p> */}
  </div>
  <ul className="app-breadcrumb breadcrumb">
    <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
    <li className="breadcrumb-item"><a href="#">System Manager</a></li>
  </ul>
</div>
{/* {user&&user.map(item=>(
<div className="col-lg-3">
<div className="bs-component">
 <div className="card">
  <img style={{height: 170, width: '100%', display: 'block'}} src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png" alt="Card image" />
   <div className="card-body">
   <h3 className="card-title">{item?.name}</h3>
   <p className="card-text">{item?.registerdetails[0]?.mobile}</p>
   <p className="card-text">{item?.registerdetails[0]?.address}</p>
   <p className="card-text">{item?.registerdetails[0]?.email}</p>
   {item?.status === 0 ?
 <input type="submit" style={{width:"150px",marginTop:"10px"}} onClick={()=>approveuser(item._id)} className="submit" value="Approve" />
 :null}
 <input type="submit" style={{width:"150px" ,marginTop:"10px"}}  className="submit" onClick={()=>deleteuser(item._id)} value="Delete" />

 </div>
 </div>
</div>
</div>
))} */}
  {user&&user.map(item=>(
 <div class="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
 <div class="carddd p-4"> 
     <div class=" images d-flex flex-column justify-content-center align-items-center"> 
     <button class="btnn btn-secondary"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4f0DI1X1WlH8pT-7AISElRfANyS2T5jf35A&usqp=CAU" height="100" width="100" /></button> 
         <span class="name mt-3">Username:{item?.registerdetails[0]?.name}</span> 
                <span class="idd">email:{item?.email} </span> 
                <span class="idd">Phone:{item?.registerdetails[0]?.mobile} </span> 
                <span class="idd">Id Proof:{item?.registerdetails[0]?.id_category} </span> 
                <span class="idd">Id number:{item?.registerdetails[0]?.id_proof} </span> 
                <span class="idd">district:{item?.registerdetails[0]?.district} </span> 
                
         <div class="d-flex flex-row justify-content-center align-items-center gap-2"> 
             <span class="idd1">Address:{item?.registerdetails[0]?.address} </span> 
         </div> 
         <div class="d-flex flex-row justify-content-center align-items-center mt-3"> 
         {item?.status === "0" ?
 <button class="number" type="submit" style={{width:"150px",marginTop:"10px"}} onClick={()=>approveuser(item._id)} className="submit"  >Approve</button>
 :null} 
                </div> 
         
         
         
         {/* <!-- <div class=" d-flex mt-2"> <button class="btn1 btn-dark"><a href="#" style="text-decoration: none;">Edit Profile</a></button>  --> */}
         </div> 
         </div>
         </div>
  ))}
  </main>
  </div>
 
)
}