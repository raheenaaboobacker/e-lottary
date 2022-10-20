import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Usrreg from './Pages/Usrreg';
import Usrhome from './Pages/Usrhome';
import Booking from './Pages/Booking';
import About from './Pages/About';
// import Agenthome from './Pages/Agenthome';
import Agerreg from './Pages/Agerreg';
import Deptlogin from './Pages/Deptlogin';
import Adminreg from './Pages/Adminreg';
import Struct from './Pages/Struct';
import Prebooking from './Pages/Prebooking';
import Agentpre from './Pages/Agentpre';
import Lotteryresult from './Pages/Lotteryresult';
import Welfare from './Pages/Welfare';
import Act from './Pages/Act';
import Downloadforms from './Pages/Downloadforms';
import Go from './Pages/Go';
import Payment from './Pages/Payment';
import Lotteryclaim from './Pages/Lotteryclaim';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import ApproveCategory from './Pages/Admin/ApproveCategory';
import ApprovePrize from './Pages/Admin/ApprovePrize';
import ManageAgency from './Pages/Admin/ManageAgency';
import ManageComplaint from './Pages/Admin/ManageComplaint';
import ManageSystemManager from './Pages/Admin/ManageSystemManager';
import AddCategory from './Pages/SystemManager/AddCategory';
import AddResult from './Pages/SystemManager/AddResult';
import SystemmanagerDashboard from './Pages/SystemManager/SystemmanagerDashboard';
import ViewUsers from './Pages/SystemManager/ViewUsers';
import ViewTicketBooking from './Pages/SystemManager/ViewTicketBooking';
import ViewCategory from './Pages/SystemManager/ViewCategory';
import GenerateTicket from './Pages/SystemManager/GenerateTicket';
import ViewTicket from './Pages/SystemManager/ViewTicket';
import ViewResult from './Pages/SystemManager/ViewResult';
// import ViewFeedback from './Pages/Admin/ViewFeedback';
import UserViewAgency from './Pages/User/UserViewAgency';
import UserViewTicketResult from './Pages/User/UserViewTicketResult';
import UserAddComment from './Pages/User/UserAddComment';
import ViewClaim from './Pages/Admin/ViewClaim';
import AgencyHome from './Pages/Agency/AgencyHome';
import ViewDistrictAgency from './Pages/ViewDistrictAgency';
import UserViewDistrictAgency from './Pages/User/UserViewDistrictAgency';
import UserViewStruct from './Pages/User/UserViewStruct';
import AgencyViewPrebookedTicket from './Pages/Agency/AgencyViewPrebookedTicket';
import AgencyViewResult from './Pages/Agency/AgencyViewResult';
import ViewPayment from './Pages/Agency/ViewPayment';

function App() {
  return (
    <div >
       <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
    <Route path='/usrreg' element={<Usrreg/>}/>
    <Route path='/booking' element={<Booking/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/welfare' element={<Welfare/>}/>
    <Route path='/act' element={<Act/>}/>
    <Route path='/down' element={<Downloadforms/>}/>
    <Route path='/go' element={<Go/>}/>
    <Route path='/struct' element={<Struct/>}/>

    <Route path='/result' element={<Lotteryresult/>}/>
    <Route path='/viewAgent' element={<Agentpre/>}/>
    <Route path='/viewDistrictAgency/:district' element={<ViewDistrictAgency/>}/> 
    <Route path='/admindashboard' element={<AdminDashboard/>}/>
   
    <Route path='/usrreg' element={<Usrreg/>}/>
    <Route path='/Usrhome' element={<Usrhome/>}/>
    <Route path='/cliam' element={<Lotteryclaim/>}/>
    <Route path='/userViewResult' element={<UserViewTicketResult/>}/>
    <Route path='/userViewAgency' element={<UserViewAgency/>}/>
    <Route path='/userViewDistrictAgency/:district' element={<UserViewDistrictAgency/>}/> 
    <Route path='/userAddComment' element={<UserAddComment/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/userViewStruct' element={<UserViewStruct/>}/>

    <Route path='/adminreg' element={<Adminreg/>}/>
    <Route path='/managerViewTicketBooking' element={<ViewTicketBooking/>}/>
    <Route path='/addCategory' element={<AddCategory/>}/>
    <Route path='/addResult' element={<AddResult/>}/>
    <Route path='/viewCategory' element={<ViewCategory/>}/>
    <Route path='/generateTicket' element={<GenerateTicket/>}/>
    <Route path='/viewTicket/:id' element={<ViewTicket/>}/>
    <Route path='/approveCategory' element={<ApproveCategory/>}/>
    <Route path='/approvePrice' element={<ApprovePrize/>}/>
    <Route path='/manageAgency' element={<ManageAgency/>}/>
    <Route path='/manageComplaint' element={<ManageComplaint/>}/>
    <Route path='/ManageSystemManager' element={<ManageSystemManager/>}/>
    <Route path='/addCategory' element={<AddCategory/>}/>
    <Route path='/managerDashboard' element={<SystemmanagerDashboard/>}/>
    <Route path='/managerViewUsers' element={<ViewUsers/>}/>
    <Route path='/viewClaim' element={<ViewClaim/>}/>
    <Route path='/managerViewResult' element={<ViewResult/>}/>
    <Route path='/dptlogin' element={<Deptlogin/>}/>

    <Route path='/agentlog' element={<AgencyHome/>}/>
    <Route path='/agentreg' element={<Agerreg/>}/>
    <Route path='/agenthome' element={<AgencyHome/>}/>
    <Route path='/prebook' element={<Prebooking/>}/>
    <Route path='/agencyViewPrebook' element={<AgencyViewPrebookedTicket/>}/>
    <Route path='/agencyViewReult' element={<AgencyViewResult/>}/>
    <Route path='/viewPayment' element={<ViewPayment/>}/>
    <Route path='/viewPayment' element={<ViewPayment/>}/>
    {/* 
    <Route path='/Usrhome' element={<Usrhome/>}/>
    <Route path='/about' element={<About/>}/>
   
    
    <Route path='/dptlogin' element={<Deptlogin/>}/>
    
   
    
    
    */}

 {/*  */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
