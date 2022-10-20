import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Agpre() {
  const navigate=useNavigate()


  const showDistrictAgency=(state)=>{
    const district=state;
    console.log(district);
    navigate(`/viewDistrictAgency/${district}`)
  }

  return (
    <div>
        <div className='container linked'>
            <p className='text-light'> Check here to go  
            </p>


        </div>

<div class="container  ">
   
    <div class="row gy-4 py-2 " data-aos="zoom-in">
        <div class="col-lg-3 mb-3">
            <div class="card  sector1">
                <i class="f1 fa fa-user-circle-o fa-5x"></i>
                <h4 class="py-2">27435</h4>
                <p className='py-1'>Agents Registered</p>
            </div>
        </div> 
        <div class="col-lg-3 mb-3">
            <div class="card  sector1">
                <i class="f1 fa fa-spinner fa-5x"></i>
                <h4 class="py-2">55</h4>
                <p className='py-1'>Upcoming Draws</p>
            </div>
        </div> 
        <div class="col-lg-3 mb-3">
            <div class="card  sector1">
                <i class="f1 fa fa-line-chart fa-5x"></i>
                <h4 class="py-2">491445.97L /-</h4>
                <p className='py-1'>Revenue Collected</p>

            </div>
        </div> 
        <div class="col-lg-3 mb-3">
            <div class="card  sector1">
                <i class="f1 fa fa-gift fa-5x"></i>
                <h4 class="py-2">271507.48L /</h4>
                <p className='py-1'>Prize Distributed</p>
            </div>
        </div> 
    </div>
 </div>
<div className='container py-5'>
    <h1 className='text-primary'>Agents</h1>
    <p>The Department of Lotteries has a wide distribution network consisting of more than 35,000 agents and above 100,000 retailers. The guidelines for starting an agency or becoming an agent are very simple and that too without any substantial investment. This has helped many an unskilled personnel find daily income for their family. Any Indian who is above the age of 18 can become a Kerala State Lotteries Agent. A person who applies in the prescribed form along with the necessary fees (Rs.200/-) and two passport size photos at the Directorate and District Lottery Offices can become an agent. This initial registration is valid for a calender year. Afterwards the agent can renew his/her agency, just for a fee of Rs. 50 per year. Casual agency is issued from District Lottery Offices on remitting a fee of Rs.50/-for a particular lottery. At present, agencies are issued only from District Lottery Offices.<a className='text-danger'>( Agency form - Download)</a></p>
    
    <div>
        <h3 className='text-dark'>An agent?</h3>
        <p>
        Agencies are allotted from the Directorate and from other District Offices. It is easy to identify the office to which an agent or an agency belongs. The directorate and each District Office are given a specific code.This code is given in front of agency number.
        </p>
       
        <table class="table  table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">Sl.no</th>
      <th scope="col">Office</th>
      <th scope="col">Code</th>
      
    </tr>
  </thead>
  <tbody>
    <tr onClick={()=>{showDistrictAgency("Thiruvananthapuram")}}>
      <th scope="row">1</th>
      <td>Directorate, Thiruvananthapuram</td>
      <td>L</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Thiruvananthapuram")}}>
      <th scope="row">2</th>
      <td>Thiruvananthapuram</td>
      <td>T</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Kollam")}}>
      <th scope="row">3</th>
      <td >Kollam</td>
      <td>Q</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Pathanamthitta")}}>
      <th scope="row">4</th>
      <td >Pathanamthitta</td>
      <td>H</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Alappuzha")}}>
      <th scope="row">5</th>
      <td >Allapuzha</td>
      <td>A</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Idukki")}}>
      <th scope="row">6</th>
      <td >Idukki</td>
      <td>Y</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Kottayam")}}>
      <th scope="row">7</th>
      <td >Kottayam</td>
      <td>K</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Ernakulam")}}>
      <th scope="row">8</th>
      <td >Ernakulam</td>
      <td>E</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Thrissur")}}>
      <th scope="row">9</th>
      <td >Thrissur</td>
      <td>R</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Palakkad")}}>
      <th scope="row">10</th>
      <td >Palakkad</td>
      <td>P</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Malappuram")}}>
      <th scope="row">11</th>
      <td >Malappuram</td>
      <td>M</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Kozhikode")}}>
      <th scope="row">12</th>
      <td >Kozhikode</td>
      <td>D</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Wayanad")}}>
      <th scope="row">13</th>
      <td >Wayanad</td>
      <td>W</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Kannur")}}>
      <th scope="row">14</th>
      <td >Kannur</td>
      <td>C</td>
    </tr>
    <tr onClick={()=>{showDistrictAgency("Kasaragod")}}>
      <th scope="row">15</th>
      <td >Kasaragod</td>
      <td>S</td>
    </tr>
  </tbody>
</table>
<p>
As per GO (P) No. 14/2011/TD dated 28.1.2011, the Director has the power to suspend or cancel an agency if it is found that the agent or seller is acting in contravention of any of the provisions of the Act or the Rules or is indulging in any act or omission in any form which is detrimental to the public interest. The aggrieved person may within 30 days from the date of such decision prefer an appeal to the Secretary, Taxes Department. Further, no agent shall conduct the sale of tickets through internet or by any other means without prior written permission of the Director and only sale of physical tickets is permitted. More over tickets shall be delivered to the sub agent, agent or general public immediately on reciept of the cost of tickets.

** As sated above, at present agency of any kind is issued only from District Lottery Offices. Tickets can be purchased by registered agents by remitting cash, by DD, by exchange of prize winning tickets or by credit on presenting adequate bank guarantee.
</p>


    </div>
</div>

  </div>
  )
}
