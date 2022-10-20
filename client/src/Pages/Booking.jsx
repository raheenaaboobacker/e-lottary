import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Animation from '../Components/Animation'
import Servicenav from '../Components/Servicenav';
import UserNav from '../Components/UserNav';
import UserAnimation from '../Components/UserAnimation';

export default function Booking() {
    const [category, setCategory] = useState([])
    const [agency, setAgency] = useState([])
    const [ticket, setTicket] = useState([])
    const [pre, setPre] = useState([])
    const navigate=useNavigate()

    const showAgency=(event) => {
        const id=event.target.value;
          axios.get(`http://localhost:5000/agency/view-district-agency/${id}`)
              .then(response => {
                  if (response.data.success == true) {
                    setAgency(response.data.data)
                      console.log(response.data.data);
                  }
              })
      }



    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setPre({
            ...pre,
            [name]:value
        })
        console.log(pre);
      }

      const showTicket= (event) => {
        console.log('Selected value:', event.target.value);
        const lid=pre.agency_id;
        const id=event.target.value;
        axios.get(`http://localhost:5000/agency/view-prebooked-ticket/${lid}/${id}`)
        .then(response => {
            if (response.data.success == true) {
                setTicket(response.data.data)
                console.log(response.data.data);
            }
        })
      }

    const agencyTicket=(event)=>{
    console.log('Selected value:', event.target.value);
    const id=event.target.value;
    axios.get(`http://localhost:5000/agency/view-prebooked-category/${id}`)
    .then(response => {
        if (response.data.success == true) {
            // setCategory(response.data.data)
            console.log(response.data.data);
            const uniqueIds = [];
            setCategory(response.data.data.filter(element => {
                const isDuplicate = uniqueIds.includes(element.category_id);
            
                if (!isDuplicate) {
                    uniqueIds.push(element.category_id);
            
                  return true;
                }
            
                return false;
              }))
            //   console.log("uniqueEmployees======>",uniqueEmployees);
        }
    })
}

    const book =(e)=>{
        e.preventDefault();
        if(pre.district===""||pre.agency_id===""||pre.category_id===""||pre.ticket_id==="")
        {
            alert("Choose Fill All fields")
        }else{
        navigate("/payment",{state:pre})
        }
    }




    
    

  return (
    <div>
      <UserNav/>
    
    <UserAnimation/>
   <form onSubmit={book}>
        <div className="container booker" >
            <div  className="text-center pb-4"><h1> Book your TIcket</h1></div>
            <div className="input-group row mt-4 mb-4">
            <select className=" col-md-12 form-select bod" id="inputGroupSelect01" name='district' value={pre.district} onChange={(e)=>{handleInputChange(e);showAgency(e)}} required>
                <option selected >District</option>
                        <option value="Alappuzha">Alappuzha</option>
                        <option value="Ernakulam">Ernakulam</option>
                        <option value="Idukki">Idukki</option>
                        <option value="Kannur">Kannur</option>
                        <option value="Kasaragod">Kasaragod</option>
                        <option value="Kollam">Kollam</option>
                        <option value="Kottayam">Kottayam</option>
                        <option value="Kozhikode">Kozhikode</option>
                        <option value="Malappuram">Malappuram</option>
                        <option value="Palakkad">Palakkad</option>
                        <option value="Pathanamthitta">Pathanamthitta</option>
                        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Wayanad">Wayanad</option>
                      </select>
              </div>
              
              <div class="input-group row mb-4">
                
                <select className="form-select col-12 bod" onChange={e => {agencyTicket(e);handleInputChange(e)}} id="inputGroupSelect01" name='agency_id' value={pre.agency_id} required>
                  <option selected>Select Agency</option>
                 {agency&&agency.map(data=>(
                    <option  value={data._id}>{data?.agency?.name}</option>

                 ))}
                </select>
              </div>  
              <div class="input-group row mb-4">
                
              <select onChange={e => {showTicket(e);handleInputChange(e)}} className="form-select col-12  bod"   id="inputGroupSelect01" name='category_id' value={pre.category_id} required>
                  <option selected>Tickect Category</option>
                  {category&&category.map(data=>(
                      <option  value={data.category_id}>{data?.category_name}</option>

                    ))}
                    </select>
              </div>
              <div className="input-group row mb-4">
                
                <select className="form-select col-12 bod" id="inputGroupSelect01" name='ticket_id' value={pre.ticket_id} onChange={handleInputChange} required>
                  <option selected> Select your Tickect number</option>
                  {ticket&&ticket.map(data=>(<>
                    {data?.registerdetails?.status===2?null:<option  value={data?.registerdetails?._id}>{data?.registerdetails?.ticket_number}</option>}
                      
                      </>
                    ))}
                </select>
              </div>
              <div className="form-check mb-4 ">
              <input type="radio" aria-label="Radio button for following text input"/>
                <label className="form-check-label mx-2" for="flexCheckIndeterminate">
                  The above given informations are true
                </label>
              </div>
              <div className='row mb-5'>
              <button type="submit" className="btn btn-success btn-lg col-3" >BOOK</button>
            <button type="reset"  className="btn btn-primary btn-lg  mx-5 col-3" >RESET</button>        
            </div> 
        </div> 
    </form>






        <section className="location text-light py-5">
        <div className="container" data-aos="zoom-in">
            <div className="row">
                <div className="col-lg-3 d-flex align-items-center">
                    <div className="p-2"><i className="fa fa-map fa-3x"></i></div>
                    <div className="ms-2">
                        <h6>ADDRESS</h6>
                        <p>Vikas Bhavan P.O., <br/> Thiruvananthapuram
                           <br/> Kerala – 695033.</p>
                    </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center" >
                    <div className="p-2"><i className="fa fa-mobile fa-3x"></i></div>
                    <div className="ms-2">
                        <h6>CALL FOR QUERY</h6>
                        <p>Ph: 0471-2305193, <br/> 0471-2305230, <br/>0471-2301741</p>
                    </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center" >
                    <div className="p-2"><i className="fa fa-envelope fa-3x"></i></div>
                    <div className="ms-2">
                        <h6>SEND US MESSAGE</h6>
                        <p>e-mail: cru.dir.lotteries@kerala.gov.in</p>
                    </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center" >
                    <div className="p-2"><i className="fa fa-fax fa-3x"></i></div>
                    <div className="ms-2">
                        <h6>Fax</h6>
                        <p> 0471-2301740(Fax)</p>
                    </div>
                </div>
            </div> 
        </div> 
    </section>     
    <section className="footer text-light">
        <div className="container">
            <div className="row" data-aos="fade-right">
                <div className="col-lg-3 py-2 py-md-5">
                    <div className="d-flex align-items-center">
                        <h4 className="">e-LOTTERY</h4>
                    </div>
                    <p className="py-3 para-light">The Kerala state e-lottery is a new concept that leeds to a better future and more stability in the lottery system  </p>
                    <div className="d-flex">
                        <div className="me-3">
                            <a href="#your-link">
                                <i className="fa fa-facebook-f fa-2x"></i>
                            </a>
                        </div>
                        <div className="me-3">
                            <a href="#your-link">
                                <i className="fa fa-twitter fa-2x"></i>
                            </a>
                        </div>
                        <div className="me-3">
                            <a href="#your-link">
                                <i className="fa fa-instagram fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div> 

                <div className="col-lg-3 py-2 py-md-5">
                    <div>
                        <h4 className="py-2">Quick Links</h4>
                        <div className="d-flex align-items-center">
                            <i className="fa fa-caret-right"></i>
                            <a href="#about"><p className="ms-3">About</p></a>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa fa-caret-right"></i>
                            <a href="#"><p className="ms-3">Services</p></a>
                        </div>
                        
                        <div className="d-flex align-items-center">
                            <i className="fa fa-caret-right"></i>
                            <a href="#"><p className="ms-3">Contact</p></a>
                        </div>
                    </div>
                </div> 

                <div className="col-lg-3 py-2 py-md-5">
                    <div>
                        <h4 className="py-2">Useful Links</h4>
                        <div className="d-flex align-items-center">
                            <i className="fa fa-caret-right"></i>
                            <a href="privacy.html"><p className="ms-3">Privacy Policy</p></a>
                            
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa fa-caret-right"></i>
                            <a href="terms.html"><p className="ms-3">Terms & Conditions</p></a>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa fa-caret-right"></i>
                            <a href="#your-link"><p className="ms-3">Copyright Policy</p></a>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa fa-caret-right"></i>
                            <a href="#your-link"><p className="ms-3">FAQ</p></a>
                        </div>
                    </div>
                </div> 

                <div className="col-lg-3 py-2 py-md-5">
                    <i className="fa fa-mobile fa-3x mb-4"></i>
                    <div className="d-flex align-items-center">
                        <h4>Bhagya Keralam</h4>
                    </div>
                    <p className="py-2 para-light">Bhagyakeralam is a Mobile application initiative undertaken by the Department of State Lotteries.
                    </p>
                    <div className="d-flex align-items-center">
                        <div className="input-group mb-3">
                            <a href=""></a>       
                        </div>
                    </div>
                </div> 
            </div> 
        </div> 
    </section> 


 
    <div className="bottom text-light " >
        <div className="container d-flex justify-content-between">
            <div>
                <p>Copyright © Directorate of Kerala State Lotteries</p><br/>
                <p>Distributed by: <a href="https://themewagon.com/">sample </a></p>
            </div>
            <div>
                <i className="fa fa-cc-visa fa-lg p-1"></i>
                <i className="fa fa-cc-mastercard fa-lg p-1"></i>
                <i className="fa fa-cc-paypal fa-lg p-1"></i>
                <i className="fa fa-cc-amazon-pay fa-lg p-1"></i>
            </div>
        </div> 
    </div> 
    </div>
  )
}
