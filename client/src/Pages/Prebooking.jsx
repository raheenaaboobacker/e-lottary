import React from 'react'
import Agentnav from '../Components/Agentnav'
import Animation from '../Components/Animation'
import Footer from '../Components/Footer'
import Prebook from '../Components/Prebook'

export default function Prebooking() {
  return (
    <div>
         <Agentnav/>
        {/* <section className="home1  d-flex align-items-center ">

        <div className="titile container text-light "  > 
            <h1 style={{color:"white"}} id="top">Kerala State <br/> <span className="home_text">e-LOTTERY</span></h1>
            <p className="para para-light py-3"></p>
     
            <div className="my-3">
                <a className="btn btn-primary " href="/login">Ticket prebooking</a>
            </div>
        </div> 
    </section>  */}
    <Animation/>
    <Prebook/>

<Footer/>

    </div>
  )
}
