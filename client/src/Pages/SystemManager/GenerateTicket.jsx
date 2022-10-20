import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ManagerHeader from '../../Components/ManagerHeader';
import Managersidebar from '../../Components/Managersidebar';
import axios from 'axios'

export default function GenerateTicket() {
    const [data,setData]=useState([])


    const navigate=useNavigate()
    const [user, setUser] = useState([])
    const [message, setMessage] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/lottary/view-category")
            .then(response => {
                if (response.data.success == true) {
                    setUser(response.data.data)
                    console.log(response.data.data);
                }
            })
    }, [message])
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
    // console.log(data.first);
    var start=parseInt(data.first);
    var end=data.second;
// if(data.category_name===) 
// console.log(data.category_type,start);
var l_name= data.category_type.slice(0,3)
var s_name = l_name.toUpperCase()+"1100"
    var len = end - start + 1;
    var a = new Array();
    for (let i = start ; i < start+len; i++) a[i] = s_name  + i;
    console.log(a);


    for(let i=0;i<a.length;i++)
    {
      if(a[i]===undefined){
console.log("err");
      }else{
     var vdata={
      category_type:data.category_type,
      ticket_number:a[i],
     }
     axios.post("http://localhost:5000/lottary/generate-lottary",vdata)
    .then((result)=>{
      console.log(result);
      if(result.data.success==true){
        // alert(result.data.message)
        navigate('/viewCategory')
      }
    
    })
      }
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
                    <label htmlFor="exampleSelect1">Lottary  Name</label>
                    <select className="form-control" id="exampleSelect1" onChange={handleInputChange} name="category_type">
                    <option >Select</option>
                    {user&&user.map(data=>(
                      <option value={data.category_name}>{data.category_name}</option>

                    ))}
                    </select>
                  </div>
                 
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Start Sequence</label>
                    <input className="form-control" id="exampleInputText" type="text"  placeholder="Ticket Category Name" name="first" value={data.first} onChange={handleInputChange} required/>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">End Sequence</label>
                    <input className="form-control" id="exampleInputText" type="text"  placeholder="First Price" name="second" value={data.second} onChange={handleInputChange} required/>
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
  