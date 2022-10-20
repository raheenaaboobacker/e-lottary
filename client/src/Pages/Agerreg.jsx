import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Agerreg() {
  const [file,setFile]=useState(null)
  const navigate=useNavigate();
const [contacts,setContacts]=useState({})
const [isChecked, setIsChecked] = useState(false);


const handleOnChange = () => {
  setIsChecked(!isChecked);
};

const handleInputChange=(e)=>{
  const {name,value}=e.target
  setContacts({
      ...contacts,
      [name]:value
  })
  console.log(contacts);
}
 
const formSubmit=(e)=>{
  console.log(file);
  e.preventDefault()
  console.log(isChecked);
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
  if(contacts.district===undefined) {
    alert("Please Choose district!!")

  }else
  if(file===null) {
    alert("Please upload Licence  proof!!")

  } 
  else
   if(contacts.password!=contacts.cpassword){
    alert("Please Enter same password ")
  }
  else
  if(!isChecked){
   alert("Agree terms and services ")
 }
 
 else{
  if(file){
    const data=new FormData();
    const filename=file.name
    data.append("name",filename)
    data.append("file",file)
    axios.post("http://localhost:5000/user/upload",data)
    .then((response)=>{
        console.log(response)
    })
}
  axios.post("http://localhost:5000/agency/agency-register",contacts)
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

}


  return (
    <div>
         <section className=" bgimage" >
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" >
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Register Your Agency</h2>

              <form onSubmit={formSubmit}>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg"  placeholder="Agency Name"
                  name='name'  value={contacts.name} onChange={handleInputChange} required/>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder=" Email Id"
                  name='email' value={contacts.email} onChange={handleInputChange} required/>
                </div>
                
                <div className="form-outline mb-4">
                  <input type="number" id="form3Example3cg" className="form-control form-control-lg" placeholder=" Contact Number"
                  name='mobile' value={contacts.mobile} onChange={handleInputChange} required/>
                </div>
                <div className="form-outline mb-4">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Agency Address"
                    name='address' value={contacts.address} onChange={handleInputChange} required></textarea>
                  </div>

                <div className="form-outline mb-4">
                    <select className="select badge-light " name='district' value={contacts.district} onChange={handleInputChange} required>
                        <option selected >District</option>
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

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg" placeholder="Licence Name"
                  name='license_name' value={contacts.license_name} onChange={handleInputChange} required/>
                </div>
                <div className="form-outline mb-4">
                    <input type="text" id="form3Example4cdg" className="form-control form-control-lg" placeholder="Licence Number "
                    name='licence_no' value={contacts.licence_no} onChange={handleInputChange} required/>
                  </div>
                  <div className=" col-md-6 mb-4  form-inline mb-4 ">
                    <label className="mb-1" for="exampleFormControlFile1 ">Upload Licence Proof</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"
                    name='licence_proof' onChange={(e)=>{setFile(e.target.files[0]); setContacts({...contacts,licence_proof:e.target.files[0].name})}}/>
                 </div>
                 <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg" placeholder="Password" 
                  name='password'value={contacts.password} onChange={handleInputChange} required/>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="form3Example4cdg" className="form-control form-control-lg" placeholder="Conform your Password " 
                    name='cpassword'value={contacts.cpassword} onChange={handleInputChange} required/>
                  </div>


                  
                <div className="form-check d-flex justify-content-center mt-5  mb-3">
                
                <input  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Paneer"
                  checked={isChecked}
                  onChange={handleOnChange}/>
               
                  <label className="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="javascript:void(0)" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                    className="fw-bold text-body"><u>Login here</u></a></p>

              </form>

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
