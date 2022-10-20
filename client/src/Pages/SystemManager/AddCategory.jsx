import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ManagerHeader from '../../Components/ManagerHeader';
import Managersidebar from '../../Components/Managersidebar';
import axios from 'axios'

export default function AddCategory() {
    
  const [data,setData]=useState([])


  const navigate=useNavigate()

  const handleInputChange=(e)=>{
    const {name,value}=e.target
    setData({
        ...data,
        [name]:value
    })
    console.log(data);
}

const handleSubmit =  (e) => {
  e.preventDefault();
  console.log(data.category_type);
  if(data.category_type===undefined){
    alert("Please choose category name")
  }else{
  axios.post("http://localhost:5000/lottary/add-category",data)
  .then((result)=>{
    console.log(result.data);
    if(result.data.success==true){
      alert(result.data.message)
      navigate('/viewCategory')
    }else{
      alert(result.data.message)

    }
  
  }).catch(err=>{alert(err.response.data.message);})
 
}
}


  return (
    <div className="app sidebar-mini">
    <ManagerHeader/>
    <div className="adminapp-sidebar__overlay" data-toggle="sidebar"></div>
    <Managersidebar/>
    <main className="app-content">
    <div className="app-title">
      <div>
        <h1><i className="fa fa-edit"></i> Add Lottary Category</h1>
        {/* <p>Alert can sent to Fisher Man</p> */}
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
        <li className="breadcrumb-item">Add Lottary Category</li>
        {/* <li className="breadcrumb-item"><a href="#">Form Components</a></li> */}
      </ul>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="tile">
          <div className="row">
            <div className="col-lg-7 offset-lg-2">
              <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="exampleSelect1">Lottary Category Name</label>
                  <select className="form-control" id="exampleSelect1" onChange={handleInputChange} name="category_type">
                  <option >Select</option>
                    <option value={data.dept}>Bumber</option>
                    <option value={data.dept}>Weakly</option>
                  </select>
                </div>
               
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Tickect  Name</label>
                  <input className="form-control" id="exampleInputText" type="text"  placeholder="Ticket Category Name" name="category_name" value={data.category_name} onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Tickect  Amount</label>
                  <input className="form-control" id="exampleInputText" type="text"  placeholder="Ticket Category Name" name="ticket_amount" value={data.ticket_amount} onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">First Price</label>
                  <input className="form-control" id="exampleInputText" type="text"  placeholder="First Price" name="first_price" value={data.first_price} onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Second Price</label>
                  <input className="form-control" id="exampleInputText" type="text"  placeholder="Second Price" name="second_price" value={data.second_price} onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Third Price</label>
                  <input className="form-control" id="exampleInputText" type="text"  placeholder="Third Price" name="third_price" value={data.third_price} onChange={handleInputChange} required/>
                </div>
                <div className="form-submit">
                <input type="submit" style={{width:"200px"}} name="submit" id="submit" className="submit" value="Add" />
            </div>
              </form>
            </div>
            </div>
           
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}
