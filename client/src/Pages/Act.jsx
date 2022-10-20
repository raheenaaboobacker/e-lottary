import React from 'react'
import Cerousel from '../Components/Cerousel'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Servicenav from '../Components/Servicenav'

export default function Act() {
  return (
    <div>
      <Servicenav/>
        <div className=' act Container py-5 px-5'>
            <h3   >
            Acts and Rules
                
            </h3>
            <div>
                <a href="assets\File\Kerala_Lottaries_rule.pdf">
                <i className="fa fa-file-text fa-5x r" aria-hidden="true"></i>
                </a>
                </div>
        </div>
        <Footer/>

    </div>
  )
}
