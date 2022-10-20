import React from 'react'
import Cerousel from '../Components/Cerousel'
import Footer from '../Components/Footer'
import Lott from '../Components/Lott'
import Navbar from '../Components/Navbar'

export default function Struct() {
  return (
    <div>
        <Navbar/>
        <Cerousel/>
        <Lott/>
        <Footer/>

    </div>
  )
}
