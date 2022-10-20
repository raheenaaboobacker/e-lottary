import React from 'react'

export default function Footer() {
  return (
    <div>
          <section className="location text-light py-5" >
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
                        <div className="me-3 mx-2">
                            <a href="https://www.facebook.com/">
                                <i className="fa fa-facebook-f fa-2x"></i>
                            </a>
                        </div>
                        <div className="me-3  mx-2">
                            <a href="https://twitter.com/">
                                <i className="fa fa-twitter fa-2x"></i>
                            </a>
                        </div>
                        <div className="me-3  mx-2">
                            <a href="https://www.instagram.com/">
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
                            <a href="/about"><p className="ms-3">About</p></a>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa fa-caret-right"></i>
                            <a href="#"><p className="ms-3">Services</p></a>
                        </div>
                        
                        <div className="d-flex align-items-center">
                            <i className="fa fa-caret-right"></i>
                            <a href="/#location"><p className="ms-3">Contact</p></a>
                        </div>
                    </div>
                </div> 

                <div className="col-lg-3 py-2 py-md-5">
                    <div>
                        <h4 className="py-2">Useful Links</h4>
                        <div className="d-flex align-items-center">
                            <i className="fa fa-caret-right"></i>
                            <a href={void(0)}><p className="ms-3">Privacy Policy</p></a>
                            
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa fa-caret-right"></i>
                            <a href={void(0)}><p className="ms-3">Terms & Conditions</p></a>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa fa-caret-right"></i>
                            <a href={void(0)}><p className="ms-3">Copyright Policy</p></a>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa fa-caret-right"></i>
                            <a href={void(0)}><p className="ms-3">FAQ</p></a>
                        </div>
                    </div>
                </div> 

                <div className="col-lg-3 py-2 py-md-5">
                    <a href="https://play.google.com/store/apps/details?id=gov.kerala.lotis&hl=en_IN&gl=US">
                    <i className="fa fa-mobile fa-3x mb-4"></i>
                    </a>
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
