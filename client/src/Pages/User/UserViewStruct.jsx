import React from 'react'
import Footer from '../../Components/Footer'
import Lott from '../../Components/Lott'
import UserNav from '../../Components/UserNav'

export default function UserViewStruct() {
  return (
    <div>
        <UserNav/>
        <Lott/>
        <Footer/>
    </div>
  )
}
