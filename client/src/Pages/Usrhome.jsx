import React from 'react'
import Animation from '../Components/Animation'
import Cms from '../Components/Cms'
import Footer from '../Components/Footer'
import UserAnimation from '../Components/UserAnimation'
import UserNav from '../Components/UserNav'

export default function Usrhome() {
  return (
    <div>
        <div className="home">
      <UserNav/>
    </div>
    <section className="home  d-flex align-items-center ">

        <div className="titile container text-light py-5"  > 
            <h1 style={{color:"white"}} id="top">Kerala State <br/> <span className="home_text">e-LOTTERY</span></h1>
            <p className="para para-light py-3"></p>
     
            <div className="my-3">
                <a className="btn btn-primary " href="/booking">BOOK NOW</a>
            </div>
        </div> 
    </section> 
    <div className='container py-4'>
     <UserAnimation/>
    </div>
    
    <section className="information">
    <div className="container-fluid">
       
        <div className="row text-light">
            <div className="col-lg-4 text-center p-5 bg-danger " data-aos="zoom-in">
                <i className="fa fa-building fa-3x p-2"></i>
                <h4 className="py-3">Lottery Agents</h4>
                <a className="btn btn-outline-dark" href="/userViewAgency">click</a>
            </div>
            <div className="col-lg-4 text-center p-5 bg-info"  data-aos="zoom-in">
                <i class="fa fa-clock-o fa-3x p-2" aria-hidden="true"></i>
                <h4 className="py-3">Lottery Result</h4>
                <a className="btn btn-outline-dark" href="/userViewResult">click</a>
            </div>
            <div className="col-lg-4 text-center p-5 bg-dark"  data-aos="zoom-in"> 
                <i className="fa fa-file fa-3x p-2"></i>
                <h4 className="py-3 ">Lottery Structure</h4>
                <a className="btn  btn-outline-light" href="/userViewStruct">click</a>
            </div>
        </div>
       
    </div> 
</section>
<section className="about d-flex align-items-center text-light py-5 mt-5" id="about">
        <div className="px-4" >
            <div className="row d-flex align-items-center">
                <div className="col-lg-7" data-aos="fade-right">
                    <p className="  text-dark">Welcome to</p>
                    <h1 className=" text-dark">Kerala state <br/> Lotteries</h1>
                    <p className="py-2 text-dark">Kerala, the Gods own country, added another first to its cap in 1967, when a Department was setup in the Government sector for the first time in India for the conduct of paper Lotteries . It was late Shri. P. K. Kunju Sahib, who envisaged this idea for the generation of revenue through the sale of lotteries and for providing a stable source of income to the poor and needy belonging to the marginalized section of society.</p>
                    

                    <div className="my-3">
                        <a className="btn btn-outline-warning" href="#your-link">Learn More</a>
                    </div>
                </div>
                <div className="col-lg-5 text-center py-4 py-sm-0" data-aos="fade-down"> 
               
                <img class="img-fluid d-none d-lg-block" src="assets\Images\agent.jpg" alt="contact"/>
                </div>
            </div> 
        </div> 
    </section> 
    
    <Cms/>
<Footer/>
    {/* <section className="location text-light py-5">
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
    </div>  */}

    </div>
  )
}
