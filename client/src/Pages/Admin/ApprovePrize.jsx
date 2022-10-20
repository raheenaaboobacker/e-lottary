import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/AdminHeader'
import AdminSidebar from '../../Components/AdminSidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ApprovePrize() {
    
  const [category, setCategory] = useState([])
  const [message, setMessage] = useState([])
    const navigate=useNavigate()
    useEffect(() => {
        axios.get("http://localhost:5000/result/view-result")
            .then(response => {
                if (response.data.success == true) {
                    setCategory(response.data.data)
                    console.log(response.data.data);
                }
            })
    }, [message])

    const approvePrice=(id)=>{
      console.log(id);
       axios.post(`http://localhost:5000/result/approve-price/${id}`)
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
        <h1><i className="fa fa-th-list" /> Price Tables</h1>
        <p>Approve Price</p>
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
        <li className="breadcrumb-item">Home</li>
        <li className="breadcrumb-item active"><a href="#">Pirce Tables</a></li>
      </ul>
    </div>
    <div className="row">
      <div className="clearfix" />
      <div className="col-md-12">
        <div className="tile">
          <h3 className="tile-title">Result</h3>
          <div className="table-responsive">
            <table className="table">
              <thead style={{backgroundColor:"#898993"}}>
                <tr>
                  <th>Lottary Category Name</th>
                  <th>First Price</th>
                  <th>Second Price</th>
                  <th>Third Price1</th>
                  <th>Third Price2</th>
                  <th>Third Price3</th>
                  <th>Result Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {category&&category.map(data=>(
                  <tr>
                  <td>{data?.ticketdetails?.category_name}</td>
                  <td>{data?.first}</td>
                  <td>{data?.second}</td>
                  <td>{data?.third}</td>
                  <td>{data?.third2}</td>
                  <td>{data?.third3}</td>
                  <td>{data?.result_date}</td>
                  <td>{data?.status==="0"?<input  type='button' id="submit" className="submit" value="Approve"onClick={()=>{approvePrice(data._id)}} />:null}</td>
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
