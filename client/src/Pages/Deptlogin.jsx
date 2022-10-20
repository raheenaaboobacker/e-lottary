import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
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
  axios.post("http://localhost:5000/login",contacts)
  .then((response) => {
      console.log("Result========",response)
      if(response.data.success==true)
      {
        
        console.log(response);
        if(response.data.success===true){
          if(response.data.role==="1"){
          localStorage.setItem("loginId",response.data.loginId)
          localStorage.setItem("role",response.data.role)
          localStorage.setItem("token",response.data.token)
          sessionStorage.setItem("currentloggedin",response.data.name);
          navigate("/admindashboard")
          }
          else if(response.data.role==="2"){
              localStorage.setItem("name",response.data.name)
              localStorage.setItem("loginId",response.data.loginId)
              localStorage.setItem("role",response.data.role)
              localStorage.setItem("token",response.data.token)
              sessionStorage.setItem("currentloggedin",response.data.name);
              navigate("/Usrhome")
              }
              else if(response.data.role==="3"){
                localStorage.setItem("name",response.data.name)
                localStorage.setItem("loginId",response.data.loginId)
                localStorage.setItem("role",response.data.role)
                localStorage.setItem("token",response.data.token)
                sessionStorage.setItem("currentloggedin",response.data.name);
                navigate("/managerDashboard")
                }
                else if(response.data.role==="4"){
                  localStorage.setItem("name",response.data.name)
                  localStorage.setItem("loginId",response.data.loginId)
                  localStorage.setItem("role",response.data.role)
                  localStorage.setItem("token",response.data.token)
                  sessionStorage.setItem("currentloggedin",response.data.name);
                  navigate("/agenthome")
                  }
            }
      }
      else{
          alert(response.data.message);
      }
}).catch((err)=>{
alert(err.response.data.message);
})

}

  return (
    <div>
         <section className="h-100 gradient-form  py-5"  >
        <div className="container  h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="c1 card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
      
                      <div className="text-center mb-3">
                        <img id='a1' src="assets\Images\1200px-Government_of_Kerala_Logo.png" style={{height:"60px",width:"80PX"}} />
                         
                      </div>
      
                      <form onSubmit={formSubmit}>
                        <p className="text-center">Please login to your account</p>
      
                        <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="form2Example11">Username</label>
                          <input type="email" name='email' value={contacts.email} onChange={handleInputChange} id="form2Example11" className="form-control" 
                            placeholder=" email address" required/>
                        </div>
      
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example22">Password</label>
                          <input type="password" name='password' value={contacts.password} onChange={handleInputChange} id="form2Example22" className="form-control" required/>
                          
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button className="btn btn-primary btn-block " type="submit" >Login</button>
                          <a className="text-muted" href="#!">Forgot password?</a> <br/>
                          
                        </div> 
      
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <a className="btn btn-outline-danger border-0 " href='/usrreg'>Create new</a>
                        </div>
      
                      </form>
      
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className=" shad card ">
                    <div className="text-dark px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">Welcome To Kerala State Lotteries</h4>
                      <p className="small mb-0">
                        Kerala, the Gods own country, added another first to its cap in 1967, when a lottery department was setup for the first time in India. The right idea came from the then Finance Minister of Kerala, the late Shri. P. K. Kunju Sahib, who envisaged revenue from sale of lotteries as a major source of non-tax revenue for the state, at the same time providing a stable income source for the poor and the common. Within no time</p>
                    </div>
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
