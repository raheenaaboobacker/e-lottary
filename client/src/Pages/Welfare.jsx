import React from 'react'
import Animation from '../Components/Animation'
import Cerousel from '../Components/Cerousel'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Servicenav from '../Components/Servicenav'

export default function Welfare() {
  return (
    <div>
            <Servicenav/>
            <Animation/>

            <div className='container text-dark'>
            <h1 className='wel py-4 '> Welfare Fund Board</h1>
            <p>Kerala State Lottery Agents and sellers Welfare Fund Board was established in 2008 for the social and economic upliftment of state lottery agents and lottery sellers as per the Kerala State Lottery Agents and sellers Welfare Fund Act .There are eleven members in the Welfare Fund Board of State lottery agents and sellers, including four official members and seven unofficial members.Four official members include Secratary to Government(Taxes), Additional Secretary to Finance, Additional Secretary to Labor Department and State Lottery Director. In addition to it, Government depute 7 members representing Lottery Agents and Sellers as un official members and appoint one among them through a Government order as the Chairman of the Welfare Fund Board .The Director of State Lotteries is the Chief Executive Officer of the State Lotteries Welfare Fund Board under whom functions a HQ office with a District Lottery Officer acting as State Lottery Welfare Fund Officer . Besides ,there are 14 Assistant District Lottery Officers acting as District Welfare Officers.</p>
          <p>  One percetage of total revenue turn over is earnmemarked for the welfare of Lottery Agents and Sellers.Lottery agents or sellers who buys tickets worth 10000/- per month or made quarterly purchase of tickets for an amount of Rs 30,000/- are eligible for the Lottery Agents and sellers Welfare Fund Board membership. Such agents are eligible to subcribe Lottery Agents and Sellers Welfare Fund by paying Rs 50/- (Fifty) only and can retain the membership by remtting a contribution of Rs 50 in every other month. The Board started functioning with 2000 members in 2008 has the membership of more than 50000 members now.An amount of Rs. 3000 / – is earnmarked per annum for members of Welfare Fund as treatment assistance, Rs 20,000 / – as special treatment scheme for those members undergoing treatment for crtical ilness , Rs. 5000/-  to women members of welfare fund as maternity assistance , Rs.5,000 for marriage assistance and Rs 25,000/- as scholarship for the children of the members pursuing higher studies. Educationa awards are being given to the children of members who win high marks in SSLC and HSC exams. Posthumous financial assistance scheme for the dependents of those who met with natural death and with Rs. 1,00,000 for those died due to accidental . Along with this, pensions, family pension, pension for diseased person are also granted as per Welfare fund notification.</p>
           
           <h2 className='wel'>Eligibility for subscribing Welfare Fund Membership</h2>
           <p>
           Members who wish to take membership should come in between the age group of 18 and 60. Those who buy tickets and do monthly sales of Rs 10,000 or quarterly sales of Rs 30,000 are eligible. sellers who are interested in subscription need to get ticket account book from the District Lottery Welfare Office for Rs 25 and the details of the tickets bought from the agents approved and recorded by them.The application forms are available from the District Lottery Welfare Fund Offices. The registration fee of Rs 25 and other documents should be submitted to the district lottery welfare offices.?
           </p>
           <h2  className='wel py-2'>
           Expiry of Membership
           </h2>
           <p className='pb-5'>
           Membership ends at the age of 70.The membership should be ended by submitting the resignation letter to the District Lottery Welfare Officer.
The comprehensive details in this regard may be availabale from <a href="http://kslaswfb.com/"> www.kslaswfb.com</a>
           </p>
            </div>
            <Footer/>

    </div>
  )
}
