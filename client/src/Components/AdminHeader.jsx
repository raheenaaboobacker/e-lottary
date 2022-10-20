import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminHeader() {
  const navigate=useNavigate()
const logout=()=>{
  localStorage.clear();
  window.sessionStorage.clear();
 navigate('/')
}
  return (
    <header className="app-header"><a className="app-header__logo" href="/admindashboard"> <img width="70px" src="assets\Images\white-logo.png" alt="logo" /></a>
     <a className="adminapp-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
     <center><p className="adminapp-sidebar__user-name">E-Lottary</p></center>
        <p className="adminapp-sidebar__user-designation"></p>
     
      <ul className="app-nav">
        {/* <li className="app-search">
          <input className="app-search__input" type="search" placeholder="Search"/>
          <button className="app-search__button"><i className="fa fa-search"></i></button>
        </li> */}
        {/* <li className="dropdown"><a className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Show notifications"><i className="fa fa-bell-o fa-lg"> */}
          {/* <span class="badge">17</span> */}
          {/* </i></a> */}
          {/* <ul className="app-notification dropdown-menu dropdown-menu-right"> */}
            {/* <li className="app-notification__title">You have 4 new notifications.</li>
            <div className="app-notification__content">
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Lisa sent you a mail</p>
                    <p className="app-notification__meta">2 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger"></i><i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Mail server not working</p>
                    <p className="app-notification__meta">5 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success"></i><i className="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Transaction complete</p>
                    <p className="app-notification__meta">2 days ago</p>
                  </div></a></li>
              <div className="app-notification__content">
                <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p className="app-notification__message">Lisa sent you a mail</p>
                      <p className="app-notification__meta">2 min ago</p>
                    </div></a></li>
                <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger"></i><i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p className="app-notification__message">Mail server not working</p>
                      <p className="app-notification__meta">5 min ago</p>
                    </div></a></li>
                <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success"></i><i className="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p className="app-notification__message">Transaction complete</p>
                      <p className="app-notification__meta">2 days ago</p>
                    </div></a></li>
              </div>
            </div>
            <li className="app-notification__footer"><a href="#">See all notifications.</a></li>
          </ul>
        </li> */}
        
         <li><a style={{marginTop:"10Px" }} className="dropdown-item" onClick={logout}><i className="fa fa-sign-out fa-lg"></i> Logout</a></li>
        
      </ul>
    </header>
  )
}
