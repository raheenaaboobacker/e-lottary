import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className="home">
        <nav className=" navbar d-flex bg-tranceparent fixed-top">
     <div className="logo ">
        <div><img src="\assets\Images\white-logo.png" className="text-light " width="100 " height="70 " alt=" "/></div>
       Government of kerala</div>
     <ul className="nav-links">
       <label for="checkbox_toggle" className="hamburger">&#9776;</label>
       <div className="menu">
         <li><a href="/">Home</a></li>
         <li><a href="/about">About</a></li>        
         <div class="dropdown show">
            <a class="btn" style={{fontWeight:400,fontSize:"1.1rem"}} href="#"   data-toggle="dropdown"  >
            Register
            </a>
            <div class="dropdown-menu" style={{backGroundColor:"#008080"}} aria-labelledby="dropdownMenuLink" >
              <a class="dropdown-item" href="/usrreg">User</a>
              <a class="dropdown-item" href="/adminreg">System Manager</a>
              <a class="dropdown-item" href="/agentreg">Agency</a>
            </div>
          </div>
        <li> <a href='/dptlogin'>DEPT.Login</a></li>

        <li><a href="/#location">Contact</a></li> 
        </div>
     </ul>
   </nav>
    </div>
    </div>
  )
}
