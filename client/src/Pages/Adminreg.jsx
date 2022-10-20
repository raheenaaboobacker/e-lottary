import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Adminreg() {
  const navigate=useNavigate();

  const [contacts,setContacts]=useState({})

const handleInputChange=(e)=>{
  const {name,value}=e.target
  setContacts({
      ...contacts,
      [name]:value
  })
  console.log(contacts);
}
 
 
const formSubmit=(e)=>{
  e.preventDefault()
  console.log("ygfghuijok");
  var phoneno = /^[6-9]\d{9}$/;
  var cardno = /^\(?([0-9]{12})$/;
  var pan=/([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
  let voterId=/^([a-zA-Z]){3}([0-9]){7}?$/g
  let licence= /^\(?([0-9]{12})$/;
  
  if(!phoneno.test(contacts.mobile))
  {
      alert("Please enter a valid  phone number!!")
  }else
  if(contacts.password!=contacts.cpassword){
   alert("Please Enter same password ")
 }else
  if(contacts.id_category===undefined) {
    alert("Please Choose Id Proof!!")

  }else{
    if(contacts.id_category===undefined) {
      alert("Please Choose Your Id Proof!!")
  
    }else 
    if(contacts.id_category==="voter id")
    {
      if(!voterId.test(contacts.id_proof)) {
        alert("Please enter a valid  Voter Id!!")
    
      }else {
        axios.post("http://localhost:5000/system/system-register",contacts)
        .then((response) => {
            console.log("Result========",response)
            if(response.data.success===true)
            {
              
              alert(response.data.message);
              navigate('/login')
            }
            else{
                alert(response.data.message);
            }
      }).catch((err)=>{
      alert(err.response.data.message);
      })
      }
    }else 
    if(contacts.id_category==="adhar card")
    {
      if(!cardno.test(contacts.id_proof)) {
        alert("Please enter a valid  Adhar number!!")
    
      }
      else {
        axios.post("http://localhost:5000/system/system-register",contacts)
        .then((response) => {
            console.log("Result========",response)
            if(response.data.success==true)
            {
              
              alert(response.data.message);
              navigate('/login')
            }
            else{
                alert(response.data.message);
            }
      }).catch((err)=>{
      alert(err.response.data.message);
      })
      }
    }
    else
    if(contacts.id_category==="driving licence")
    {
      if(!licence.test(contacts.id_proof)) {
        alert("Please enter a valid  driving licence number!!")
    
      }else {
        axios.post("http://localhost:5000/system/system-register",contacts)
        .then((response) => {
            console.log("Result========",response)
            if(response.data.success==true)
            {
              
              alert(response.data.message);
              navigate('/login')
            }
            else{
                alert(response.data.message);
            }
      }).catch((err)=>{
      alert(err.response.data.message);
      })
      }
    }
    else
    if(contacts.id_category==="pancard")
    {
      if(!pan.test(contacts.id_proof)) {
        alert("Please enter a valid  pancard number!!")
    
      }else {
        axios.post("http://localhost:5000/system/system-register",contacts)
        .then((response) => {
            console.log("Result========",response)
            if(response.data.success==true)
            {
              
              alert(response.data.message);
              navigate('/login')
            }
            else{
                alert(response.data.message);
            }
      }).catch((err)=>{
      alert(err.response.data.message);
      })
      }
    }
    
  }
  

}
  return (
    <div> <section>
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" > 
          {/* style="border-radius: 25px;" */}
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
                  <form onSubmit={formSubmit} class="mx-1 mx-md-4">
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fa fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" class="form-control"  placeholder="Your Name"
                        name="name" value={contacts.name} onChange={handleInputChange} required/>

                      </div>
                    </div>
  
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fa fa-phone-square fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="number" id="form3Example3c" class="form-control"  placeholder="Contact Number" 
                        name="mobile" value={contacts.mobile} onChange={handleInputChange}required/>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fa fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" class="form-control"  placeholder="Your Email" 
                        name="email" value={contacts.email} onChange={handleInputChange}required/>
                      </div>
                      </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fa fa-address-book fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example3c" class="form-control"  placeholder="Your Address"
                        name="address" value={contacts.address} onChange={handleInputChange} required/> 
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fa fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" class="form-control"  placeholder="Password"
                        name="password" value={contacts.password} onChange={handleInputChange} required/>

                      </div>
                    </div><div class="d-flex flex-row align-items-center mb-4">
                      <i class="fa fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" class="form-control"  placeholder="Conform your Password"
                        name="cpassword" value={contacts.cpassword} onChange={handleInputChange} required/>
                      </div>
                    </div>
                    <div class="  d-flex flex-row align-items-center mb-2">
                      <div class=" col-md-6  form-inline mb-2 ">

                      <select class="se select" name="id_category" value={contacts.id_category} onChange={handleInputChange} required>
                        <option selected >Identity proof</option>
                        <option value="adhar card">Aadhar card</option>
                        <option value="voter id">Voter id</option>
                        <option value="driving licence">Drivinglicence</option>
                        <option value="pancard">Pancard</option>

                      </select>
        
                      </div >
                    </div>
  
                    <div class=" d-flex flex-row align-items-center mb-4" >
                      <div class=" col-md-6 mb-4  form-inline mb-4 ">
                        <label class="mb-1" for="exampleFormControlFile1 ">Enter Your Id</label>
                        <input type="text" class="form-control-file" id="exampleFormControlFile1" name="id_proof" value={contacts.id_proof} onChange={handleInputChange} required />

                     </div>
                    </div>
  
                    <div class="form-check d-flex justify-content-center mb-5">
                      <input class="form-check-inline badge-secondary " type="checkbox" value="" id="check" checked required/>
                      <label class="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>
  
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" class="btn btn-primary btn-lg">Register</button>
                    </div>
  
                  </form>
  
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid" alt="Sample image"/>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
</div>
  )
}
