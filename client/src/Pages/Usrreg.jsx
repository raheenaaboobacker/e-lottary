import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function () {
 
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
  console.log(contacts.password);
  console.log(contacts.cpassword);
  // console.log();
  var phoneno = /^[6-9]\d{9}$/;
  var cardno = /^\(?([0-9]{12})$/;
  var pan=/([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
  let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
  let voterId=/^([a-zA-Z]){3}([0-9]){7}?$/g
  let licence= /^\(?([0-9]{12})$/;
  
  if(!phoneno.test(contacts.mobile))
  {
      alert("Please enter a valid  phone number!!")
  }else
  if(contacts.gender===undefined) {
    alert("Please Choose gender!!")

  }else
  if(contacts.id_category===undefined) {
    alert("Please Choose Your Id Proof!!")

  }else 
  if(contacts.id_category==="voter id")
  {
    if(!voterId.test(contacts.id_proof)) {
      alert("Please enter a valid  Voter Id!!")
  
    }
  }else 
  if(contacts.id_category==="adhar card")
  {
    if(!cardno.test(contacts.id_proof)) {
      alert("Please enter a valid  Adhar number!!")
  
    }
  }
  else
  if(contacts.id_category==="driving licence")
  {
    if(!licence.test(contacts.id_proof)) {
      alert("Please enter a valid  driving licence number!!")
  
    }
  }
  else
  if(contacts.id_category==="pancard")
  {
    if(!pan.test(contacts.id_proof)) {
      alert("Please enter a valid  pancard number!!")
  
    }
  }
  
  
 

  if(contacts.nominee_proof===undefined) {
    alert("Please Choose Nominee Id Proof!!")

  }else 
  if(contacts.nominee_proof==="voter id")
  {
    if(!voterId.test(contacts.nominee_id)) {
      alert("Please enter a valid  Voter Id of Nominee!!")
  
    }
  }else 
  if(contacts.nominee_proof==="adhar card")
  {
    if(!cardno.test(contacts.nominee_id)) {
      alert("Please enter a valid  Adhar number of Nominee!!")
  
    }
  }
  else
  if(contacts.nominee_proof==="driving licence")
  {
    if(!licence.test(contacts.nominee_id)) {
      alert("Please enter a valid  driving licence number of Nominee!!")
  
    }
  }
  else
  if(contacts.nominee_proof==="pancard")
  {
    if(!pan.test(contacts.nominee_id)) {
      alert("Please enter a valid  pancard number of Nominee!!")
  
    }
  }
  
   if(contacts.password!=contacts.cpassword){
    alert("Please Enter same password ")
  }
 
 else{
  axios.post("http://localhost:5000/user/user-register",contacts)
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

  return (
    <div>
        <section class="text-center">
   
    <div class="p-5 bgimage1  py-2" id="bI" ></div>
   
  
    <div class="ca card mx-4 mx-md-5 shadow-5-strong border-info " >
      <div class="card-body py-5 px-md-5">
  
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <h2 class="fw-bold mb-5">Register now</h2>
            <a href="/agentreg" className="px-5">Are you a lottery agent..?</a>
            <form onSubmit={formSubmit} >
             
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <label class="form-label" for="form3Example1">NAME</label>
                    <input type="text" name="name" value={contacts.name} onChange={handleInputChange}
                    id="form3Example1" class="form-control" placeholder="Full name as per your id"required />
                    
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <label class="form-label" for="form3Example2">Email</label>
                    <input type="email" name="email" value={contacts.email} onChange={handleInputChange}
                     id="form3Example2" class="form-control"  required/>
                   
                  </div>
                </div>
              </div>
              <div class=" mb-3 mt-3 ">
                <label class="form-label form-inline" for="form3Example2">Phone number</label>
                <input type="number" id="form3Example1" class="form-control" name="mobile" 
                value={contacts.mobile} onChange={handleInputChange} required/>
              </div>
             
              <div class="form-inline mb-4 ">
                <select class="select border-dark" name="gender" value={contacts.gender} onChange={handleInputChange} required>
                  <option selected >Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-outline mb-4">
                <label class="form-check-label form-inline" for="form3Example8">Address</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                name="address" value={contacts.address} onChange={handleInputChange} required ></textarea>
              </div>
              <div class="row">
               <div class=" col-md-6 mb-4 form-inline mb-4 mt-4">

                  <select class="se select" name="id_category" value={contacts.id_category} onChange={handleInputChange} required>
                    <option selected >Identity proof</option>
                    <option value="adhar card">Aadhar card</option>
                    <option value="voter id">Voter id</option>
                    <option value="driving licence">Drivinglicence</option>
                    <option value="pancard">Pancard</option>

                  </select>
  
                </div >

                 <div class=" col-md-6 mb-4  form-inline mb-4 ">
                    <label class="mb-1" for="exampleFormControlFile1 "  >Id Number</label>
                    <input type="text" class="form-control-file" id="exampleFormControlFile1"
                     name="id_proof" value={contacts.id_proof} onChange={handleInputChange} required />
                 </div>
                 
                </div>
                <div class=" mb-3 mt-3">
                    <label class="form-label form-inline " for="form3Example1" >Nominee name</label>
                      <input type="text" id="form3Example1" class="form-control" name="nominee_name"
                       value={contacts.nominee_name} onChange={handleInputChange} required/>  
                  </div>
                   <div class=" mb-3 mt-3">
                    <label class="form-label form-inline " for="form3Example1" >Relationship</label>
                      <input type="text" id="form3Example1" class="form-control" name="relation" 
                      value={contacts.relation} onChange={handleInputChange} required/>  
                  </div>
              <div class="row">
                    <div class="col-md-6 mb-3  mt-3 ">
                      <label class="form-label  form-inline" for="form3Example2">Nominee Id proof </label>
                      
                    </div>
                    
                      <div class="col-md-6 mb-3 form-inline mt-3">
                      <label for="form3Example1"> Id </label>
                      </div>
               </div>
              <div class="row">
               <div  class="col-md-6 mb-4 form-inline mt-2">
                <select class="select " name="nominee_proof" value={contacts.nominee_proof} onChange={handleInputChange} required>
                <option selected >Identity proof</option>
                    <option value="adhar card">Aadhar card</option>
                    <option value="voter id">Voter id</option>
                    <option value="driving licence">Drivinglicence</option>
                    <option value="pancard">Pancard</option>

                </select>
               </div>
               <div class="col-md-6 mb-4 form-inline mt-2" > 
                <input type="text" class="form-control-file" id="exampleFormControlFile1" name="nominee_id"
                 value={contacts.nominee_id} onChange={handleInputChange} placeholder='Id Number'required/>
               </div>
               </div>
             
              <div class="form-outline mb-4">
                <label class="form-label form-inline" for="form3Example4">Password</label>
                <input type="password" id="form3Example4" class="form-control" required name="password"
                 value={contacts.password} onChange={handleInputChange} />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label form-inline" for="form3Example4">Conform Your Password</label>
                <input type="password" id="form3Example4" class="form-control"  required name="cpassword" value={contacts.cpassword} onChange={handleInputChange}/>
              </div>
             
              <div class="form-check d-flex justify-content-center mt-5 " >
                <input  type="checkbox" value="" id="check" checked required/>
                <label class="form-check-label " for="form2Example33">
                  I understand that the secrecy and security of the personal details given by me for Aadhaar based demographic authentication will be ensured.
                </label>
              </div>
  
              
              <button type="submit" class="btn btn-success btn-block mb-4 mt-3">
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
