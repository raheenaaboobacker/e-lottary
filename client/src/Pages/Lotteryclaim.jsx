import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Animation from '../Components/Animation'
import Footer from '../Components/Footer'
import Servicenav from '../Components/Servicenav'

export default function Lotteryclaim() {
  const [claim, setClaim] = useState([])


  
  const handleInputChange=(e)=>{
    const {name,value}=e.target
    setClaim({
        ...claim,
        [name]:value
    })
    console.log(claim);
  }

const claimTicket=(e)=>{
e.preventDefault()
console.log(claim);
axios.post("http://localhost:5000/result/claim-ticket",claim)
.then(response => {
    if (response.data.success == true) {
        // setCategory(response.data.data)
        console.log(response.data.data);
    }
})
}
  return (
    <div>
        <Servicenav/>
        <Animation/>

        <div className='container'>

            <h2 className='px-5 text-success'> Claim your prize </h2>
            <form onSubmit={claimTicket}>
        <div className="container " >
            
            <div className="input-group row mt-4 mb-4">
                   <select className="form-select col-12 bod" id="inputGroupSelect01"name='district' value={claim.district} onChange={handleInputChange} required>
                   <option value="Alappuzha">Alappuzha</option>
                        <option value="Ernakulam">Ernakulam</option>
                        <option value="Idukki">Idukki</option>
                        <option value="Kannur">Kannur</option>
                        <option value="Kasaragod">Kasaragod</option>
                        <option value="Kollam">Kollam</option>
                        <option value="Kottayam">Kottayam</option>
                        <option value="Kozhikode">Kozhikode</option>
                        <option value="Malappuram">Malappuram</option>
                        <option value="Palakkad">Palakkad</option>
                        <option value="Pathanamthitta">Pathanamthitta</option>
                        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Wayanad">Wayanad</option>
                      </select>
              </div>
             
              <div className="input-group row mb-4">
                
                  <label> Eneter Your Tickect number</label>
                  <input type='text' name='ticketNumber' value={claim.ticketNumber} onChange={handleInputChange} required></input> 
              </div>
              <div className="form-check mb-3 ">
              <input type="radio" aria-label="Radio button for following text input"/>
                <label className="form-check-label mx-2" for="flexCheckIndeterminate">
                  The above given informations are true
                </label>
              </div>
              <div className='row mb-5'>
              <button type="submit" className="btn btn-success btn-lg col-3" >Claim my Ticket</button>
            <button type="reset"  className="btn btn-primary btn-lg  mx-5 col-3" >RESET</button>        
            </div> 
        </div> 
    </form>
        </div>
        <div className='container pb-5'>
            <h1 className='pt-3 '>
                Claim for manuel ticket
            </h1>
            <a className=' px-5 text-dark' href="http://statelottery.kerala.gov.in/English/index.php/prize-claim"> Click here to view </a>
        </div>


        <Footer/>

    </div>
  )
}
