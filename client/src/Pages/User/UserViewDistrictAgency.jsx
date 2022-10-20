import React, { useEffect, useState } from 'react'
import axios from 'axios';import Footer from '../../Components/Footer'
import UserNav from '../../Components/UserNav'
import { useNavigate, useParams } from 'react-router-dom';
import UserAnimation from '../../Components/UserAnimation';

export default function UserViewDistrictAgency() {
    const {district}=useParams()
    console.log(district);
    const [agency, setAgency] = useState(null)
    
    useEffect(() => {
        axios.get(`http://localhost:5000/agency/view-district-agency/${district}`)
            .then(response => {
                if (response.data.success == true) {
                    setAgency(response.data.data)
                    console.log(response.data.data);
                }
            })
    }, [])
  return (
    <div>
           <div className="home">
      <UserNav/>
    </div>
    <section className="home  d-flex align-items-center ">

        <div className="titile container text-light py-5"  > 
            <h1 style={{color:"white"}} id="top">Kerala State <br/> <span className="home_text">e-LOTTERY</span></h1>
            <p className="para para-light py-3"></p>
     
            <div className="my-3">
                <a className="btn btn-primary " href="/booking">BOOK NOW</a>
            </div>
        </div> 
    </section> 
    <div className='container py-4'>
     <UserAnimation/>
    </div>
       <div className='container py-5'>
    {/* <h1 className='text-primary'>Agents</h1>
    <p>The Department of Lotteries has a wide distribution network consisting of more than 35,000 agents and above 100,000 retailers. The guidelines for starting an agency or becoming an agent are very simple and that too without any substantial investment. This has helped many an unskilled personnel find daily income for their family. Any Indian who is above the age of 18 can become a Kerala State Lotteries Agent. A person who applies in the prescribed form along with the necessary fees (Rs.200/-) and two passport size photos at the Directorate and District Lottery Offices can become an agent. This initial registration is valid for a calender year. Afterwards the agent can renew his/her agency, just for a fee of Rs. 50 per year. Casual agency is issued from District Lottery Offices on remitting a fee of Rs.50/-for a particular lottery. At present, agencies are issued only from District Lottery Offices.<a className='text-danger'>( Agency form - Download)</a></p>
     */}
    <div>
        <h3 className='text-dark'>An agent?</h3>
        <p>
        Agencies are allotted from the Directorate and from other District Offices. It is easy to identify the office to which an agent or an agency belongs. The directorate and each District Office are given a specific code.This code is given in front of agency number.
        </p>
        <h1 className='text-primary'>Agencies In {district}</h1>
        <br/><br/>
        {agency===null ?<> 
                <div style={{width:"600px", height:"200px", margin:"auto"}}><div style={{textAlign:"center",fontSize:20}}  className="alert alert-success" role="alert">
                      No Agency Found!
                    </div> </div></>
                    :<>
                     <table class="table  table-hover table-bordered">
          
          <thead>
            <tr>
              <th scope="col">Sl.no</th>
              <th scope="col">Agency name</th>
              <th scope="col">Contact No</th>
              
            </tr>
          </thead>
          <tbody>
            {agency&&agency.map((item,i)=>(
              <tr>
              <th scope="row">{i+1}</th>{console.log(item)}
              <td>{item?.agency?.name}</td>
              <td>{item?.agency?.mobile}</td>
            </tr>
            ))}
            
           
          </tbody>
        </table></>}
       
<p>
As per GO (P) No. 14/2011/TD dated 28.1.2011, the Director has the power to suspend or cancel an agency if it is found that the agent or seller is acting in contravention of any of the provisions of the Act or the Rules or is indulging in any act or omission in any form which is detrimental to the public interest. The aggrieved person may within 30 days from the date of such decision prefer an appeal to the Secretary, Taxes Department. Further, no agent shall conduct the sale of tickets through internet or by any other means without prior written permission of the Director and only sale of physical tickets is permitted. More over tickets shall be delivered to the sub agent, agent or general public immediately on reciept of the cost of tickets.

** As sated above, at present agency of any kind is issued only from District Lottery Offices. Tickets can be purchased by registered agents by remitting cash, by DD, by exchange of prize winning tickets or by credit on presenting adequate bank guarantee.
</p>


    </div>
</div>
       <Footer/> 
    </div>
  )
}
