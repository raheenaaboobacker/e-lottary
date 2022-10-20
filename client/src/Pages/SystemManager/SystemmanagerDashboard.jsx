import React from 'react'
import ManagerHeader from '../../Components/ManagerHeader'
import Managersidebar from '../../Components/Managersidebar'
import { useNavigate } from 'react-router-dom';

export default function SystemmanagerDashboard() {
  const navigate=useNavigate()

  return (
    <div>
      <ManagerHeader/>
      <Managersidebar/>
      <main className="app-content">
 
      <div className="row">

<div className="col-md-6 col-lg-6">  
  <div className='mainuserdiv'>
      <div className='innermaindiv'>
        <img src='https://img.freepik.com/premium-vector/multitask-office-man-workaholic-person-hard-working-businessman-work-system-manager-tasks-male-relax-meditation-vector-character-illustration-office-worker-busy-person-multitasking-workload_53562-14085.jpg?w=2000' alt=''></img>
      </div>
      <div className='buttondiv' onClick={()=>{navigate("/managerViewUsers")}}>
        <h4>USERS</h4>
      </div>
  </div>
</div>

<div className="col-md-6 col-lg-6">  
  <div className='mainuserdiv'>
      <div className='innermaindiv'>
      <img src='https://us.123rf.com/450wm/redeer/redeer1805/redeer180500026/101917998-engaging-content-blogging-media-planning-promotion-in-social-network-flat-vector-concept-.jpg?ver=6' alt=''></img>
      </div>
      <div className='buttondiv' onClick={()=>{navigate("/managerViewTicketBooking")}}>
        <h4>TICKET  DETAILS</h4>
      </div>
  </div>
</div>

 
</div>

</main>
    </div>
  )
}
