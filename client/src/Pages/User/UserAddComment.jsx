import React from 'react'
import Cms from '../../Components/Cms'
import Footer from '../../Components/Footer'
import UserAnimation from '../../Components/UserAnimation'
import UserNav from '../../Components/UserNav'

export default function UserAddComment() {
  return (
    <div>
    <div className="home">
  <UserNav/>
</div>
<section className="home  d-flex align-items-center ">

    <div className="titile container text-light py-5"  > 
        <h1 style={{color:"white"}} id="top">Kerala State <br/> <span className="home_text">e-LOTTERY</span></h1>
        <p className="para para-light py-3"></p>
 
        <div className="my-3">
            <a className="btn btn-primary " href="/booking">BOOK NOW</a>
        </div>
    </div> 
</section> 
<div className='container py-4'>
 <UserAnimation/>
 <Cms/>
</div>
<Footer/>
    </div>
  )
}
