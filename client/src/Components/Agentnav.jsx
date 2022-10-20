import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Agentnav() {
  const navigate=useNavigate()
  const logout=()=>
	{
		localStorage.clear();
		window.sessionStorage.clear();
		// window.location.reload();
		navigate("/")
	
	}
  return (
    <div>
        <div className="home1 ">
        <nav className=" navbar  bg-transparent  d-flex  ">
     <div className="logo ">
        <div><img src="assets\Images\white-logo.png" className="text-light " width="100 " height="70 " alt=" "/></div>
       Kerala state e-lottery <br /> <p> kerala</p></div>
     <ul className="nav-links bg-transparent ">
       <label for="checkbox_toggle" className="hamburger">&#9776;</label>
       <div className="menu">
         <li><a href="/agenthome">Home</a></li>
         <li><a href="/agencyViewReult">Result</a></li>
         {/* <li> <a href='/#service'>services</a></li> */}
         {/* <li><a href="/agentreg">Agent Register</a></li> */}
         <li><a onClick={logout}>Signout</a></li>
         <li><a href="/agencyViewPrebook">Prebooked Tickets </a></li>
       </div>
     </ul>
   </nav>
    </div>
    <section className="home1  d-flex align-items-center ">

        <div className="titile container text-light "  > 
            <h1 style={{color:"white"}} id="top">Kerala State <br/> <span className="home_text">e-LOTTERY</span></h1>
            <p className="para para-light py-3"></p>
     
            <div className="my-3">
                <a className="btn btn-primary " href="/prebook">Ticket prebooking</a>
            </div>
        </div> 
    </section> 
    </div>
  )
}
