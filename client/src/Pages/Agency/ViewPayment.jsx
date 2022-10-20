import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import Agentnav from '../../Components/Agentnav'
import Footer from '../../Components/Footer'
import moment from 'moment'

export default function ViewPayment() {
    const [ticket,setTicket]=useState(null)
    const id=localStorage.getItem("loginId")

        useEffect(() => {
            axios.get(`http://localhost:5000/book/agency-view-Payment/${id}`)
                .then(response => {
                    if (response.data.success == true) {
                        setTicket(response.data.data)
                        console.log(response.data.data);
                    }
                })
        }, [])
  return (
    <div>
        <Agentnav/>
        <div className='container' id='resultt' style={{paddingTop:"40px"}}>
        <h1 className='text-dark' >
            <u >Prebooked Ticket</u>
        </h1>
        </div>
      

      <div className='container py-5'>
           
               <table className="table table-hover  ">
               <thead className='text-dark'>
                 <tr  >
                   <th scope="col">Sl.No</th>
                   <th scope="col">Name</th>
                   <th scope="col">Ticket Number</th>
                   <th scope="col">Amount</th>
                   <th scope="col">Date</th>
                   
                   
                   
                 </tr>
               </thead>
               <tbody>
               {ticket&&ticket.map((data,i)=>(
               <tr>
               <td scope="row">{i+1}</td>
               <td scope="row">{data?.name}</td>
               <td scope="row">{data?.ticket_number}</td>
               <td scope="row">{data?.amount} ₹</td>
               <td scope="row">{moment(data?.date).format('MM/DD/YYYY')}</td>
 
             </tr>
               ))}

                 
                 
               </tbody>
           </table> 
           
      </div>
        <Footer/>
    </div>
  )
}
