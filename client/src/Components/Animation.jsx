import React from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Animation() {
  const navigate=useNavigate()
  return (

    <div className='container py-4 z1' >
      <h2 className='text-info justify-content-center'>Resent updates</h2>
      <div>
      <br/><marquee  class=" marquee" style={{cursor:'pointer'}} onClick={()=>{navigate("/result")}}>Latest Ticket Draw Result.Click here to view</marquee>
      </div>
    </div>
  )
}
