import React from 'react'
import Animation from '../Components/Animation'
import Cerousel from '../Components/Cerousel'
import Cms from '../Components/Cms'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Sector from '../Components/Sector'
import Services from '../Components/Services'
export default function Home() {
  return (
    <div>
    <Navbar/>
    <Cerousel/>
    <Animation/>
    <Sector/>
    <Services/>
    <Cms/>
    <Footer/>
    </div>
  )
}
