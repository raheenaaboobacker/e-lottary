import React from 'react'

export default function Servicenav() {
  
  return (
    <div>
        <div className="home2 ">
        <nav className=" navbar d-flex bg-transparent ">
     <div className="logo ">
        <div><img src="assets\Images\white-logo.png" className="text-light " width="100 " height="70 " alt=" "/></div>
       Government of kerala</div>
     <ul className="nav-links">
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" className="hamburger">&#9776;</label>
       <div className="menu">
         <li><a href="/">Home</a></li>
         <li><a href="/booking">Pre Book</a></li>
         <li> <a href='/dptlogin'>DEPT.Login</a></li>
         <li><a href="/usrreg">Register</a></li>
         <li><a href="/#location">Contact</a></li>
       </div>
     </ul>
   </nav>
    </div>
          
 <section className="home2  d-flex align-items-center ">

<div className="titile container text-light py-5"  > 
    <h2 className="para para-light py-3"> e-lottery| SERVICES</h2>
</div> 
</section> 

        
    </div>
  )
}
