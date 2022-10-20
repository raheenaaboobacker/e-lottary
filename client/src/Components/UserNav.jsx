import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function UserNav() {
    const navigate=useNavigate()
  const logout=()=>
	{
		localStorage.clear();
		window.sessionStorage.clear();
		// window.location.reload();
		navigate("/")
	
	}
  return (
    <div>  <nav className=" navbar d-flex bg-tranceparent fixed-top">
    <div className="logo ">
       <div><img src="\assets\Images\1200px-Government_of_Kerala_Logo.png" className="text-light " width="100 " height="70 " alt=" "/></div>
      Government of kerala</div>
    <ul className="nav-links">
      <label for="checkbox_toggle" className="hamburger">&#9776;</label>
      <div className="menu">
        <li><a href="/Usrhome">Home</a></li>
        {/* <li><a href="/Usrhome/#about">About</a></li> */}
        <li> <a href='/userViewResult'>Result</a></li>
        <li><a href="/userAddComment">Contact</a></li>
        <li><a href="/userViewAgency">Agency</a></li>
        <li><a onClick={logout}>Signout</a></li>

      </div>
    </ul>
  </nav></div>
  )
}
