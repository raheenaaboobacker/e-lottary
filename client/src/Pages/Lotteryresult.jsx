import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import Agentnav from '../Components/Agentnav'
import Animation from '../Components/Animation'
import Cerousel from '../Components/Cerousel'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Result from '../Components/Result';

export default function Lotteryresult() {


   
    return (
    <div>
  
        <Navbar/>
        <Cerousel/>
        <Animation/>
        <>
       <Result/>
        
        </>

      <Footer/>  
    </div>
  )
}

