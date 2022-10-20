import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ManagerHeader() {
    const navigate=useNavigate()
    const logout=()=>{
      localStorage.clear();
      window.sessionStorage.clear();
     navigate('/')
    }
      return (
        <header className="app-header"><a className="app-header__logo" href="/managerDashboard"> <img width="70px" src="\assets\Images\white-logo.png" alt="logo" /></a>
         <a className="adminapp-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
          <ul className="app-nav">
          
            
             <li><a style={{marginTop:"10Px"}} className="dropdown-item" onClick={logout}><i className="fa fa-sign-out fa-lg"></i> Logout</a></li>
            
          </ul>
        </header>
      )
    }
    
