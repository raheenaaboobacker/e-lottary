import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/AdminHeader';
import AdminSidebar from '../../Components/AdminSidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

 function AdminDashboard() {
  const navigate=useNavigate()
  const [user,setUser]=useState([])
  const [agency,setAgency]=useState([])
  let count=0
  
  
  // useEffect(() => {
  //  axios.get("http://localhost:5000/admin/view-users")
  //  .then(response=>{
  //   if(response.data.success==true){
  //     setUser(response.data.data)
  //     console.log(user);
  //   }
  // })
  // axios.get("http://localhost:5000/admin/view-agency")
  //  .then(response=>{
  //   if(response.data.success==true){
  //     setAgency(response.data.data)
  //     console.log(agency);
  //   }
  // })
  // }, [])
  
  return (
              <div className="app sidebar-mini">
    <AdminHeader/>
    <div className="adminapp-sidebar__overlay" data-toggle="sidebar"></div>
    <AdminSidebar/>
   <main className="app-content">
  {/* <div className="app-title">
    <div>
      <h1><i className="fa fa-dashboard" /> Dashboard</h1> */}
      {/* <p>A free and open source Bootstrap 4 admin template</p> */}
    {/* </div>
    <ul className="app-breadcrumb breadcrumb">
      <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
      <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
    </ul>
  </div>   */}

  <div className="row">

  <div className="col-md-6 col-lg-6">  
    <div className='mainuserdiv'>
        <div className='innermaindiv'>
          <img src='https://img.freepik.com/premium-vector/multitask-office-man-workaholic-person-hard-working-businessman-work-system-manager-tasks-male-relax-meditation-vector-character-illustration-office-worker-busy-person-multitasking-workload_53562-14085.jpg?w=2000' alt=''></img>
        </div>
        <div className='buttondiv' onClick={()=>{navigate("/ManageSystemManager")}}>
          <h4>SYSTEM MANAGER</h4>
        </div>
    </div>
  </div>

  <div className="col-md-6 col-lg-6">  
    <div className='mainuserdiv'>
        <div className='innermaindiv'>
        <img src='https://us.123rf.com/450wm/redeer/redeer1805/redeer180500026/101917998-engaging-content-blogging-media-planning-promotion-in-social-network-flat-vector-concept-.jpg?ver=6' alt=''></img>
        </div>
        <div className='buttondiv' onClick={()=>{navigate("/manageAgency")}}>
          <h4>AGENCY</h4>
        </div>
    </div>
  </div>

    
    {/* <div className="col-md-6 col-lg-6" onClick={()=>{navigate("/ManageSystemManager")}}>
      <div className="widget-small primary coloured-icon"><i className="icon fa fa-users fa-3x" />
        <div className="info">
          <h4>System Manager</h4>
        
        </div>
      </div>
    </div>
    
    <div className="col-md-6 col-lg-6"  onClick={()=>{navigate("/manageAgency")}}>
      <div className="widget-small warning coloured-icon"><i className="icon fa fa-users fa-3x" />
        <div className="info">
          <h4>Agency </h4>
        </div>
      </div>
    </div> */}
   
  </div>
  
</main>

    </div>
    
      
  )
}


export default AdminDashboard;
