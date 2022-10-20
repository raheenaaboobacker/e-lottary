import React from 'react'

export default function Sector() {
  return (
    <div>
        <section className="information">
    <div className="container-fluid">
       
        <div className="row text-light">
            <div className="col-lg-4 text-center p-5 bg-danger " data-aos="zoom-in">
                <i className="fa fa-building fa-3x p-2"></i>
                <h4 className="py-3">Lottery Agents</h4>
                <a className="btn btn-outline-dark" href="/viewAgent">click</a>
            </div>
            <div className="col-lg-4 text-center p-5 bg-info"  data-aos="zoom-in">
                <i class="fa fa-clock-o fa-3x p-2" aria-hidden="true"></i>
                <h4 className="py-3">Lottery Result</h4>
                <a className="btn btn-outline-dark" href="/result">click</a>
            </div>
            <div className="col-lg-4 text-center p-5 bg-dark"  data-aos="zoom-in"> 
                <i className="fa fa-file fa-3x p-2"></i>
                <h4 className="py-3 ">Lottery Structure</h4>
                <a className="btn  btn-outline-light" href="/struct">click</a>
            </div>
        </div>
       
    </div> 
</section>
<section className="about d-flex align-items-center text-light py-5" id="about">
        <div className="px-4" >
            <div className="row d-flex align-items-center">
                <div className="col-lg-7" data-aos="fade-right">
                    <p className="  text-dark">Welcome to</p>
                    <h1 className=" text-dark">Kerala state <br/> Lotteries</h1>
                    <p className="py-2 text-dark">Kerala, the Gods own country, added another first to its cap in 1967, when a Department was setup in the Government sector for the first time in India for the conduct of paper Lotteries . It was late Shri. P. K. Kunju Sahib, who envisaged this idea for the generation of revenue through the sale of lotteries and for providing a stable source of income to the poor and needy belonging to the marginalized section of society.</p>
                    

                    <div className="my-3">
                        <a className="btn btn-outline-warning" href="/about">Learn More</a>
                    </div>
                </div>
<div className="col-3 text-center py-4  " > 
  <div className=" conatiner card-deck cp ">
  <div className='row'>
  <div className="card  ">
    <img src="assets\Images\Pinarayi_Vijayan_cm.jpg" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h6 className="card-title text-dark">Shri. Pinarayi Vijayan</h6>
      <p className="card-text text-dark">Hon'ble Chief Minister</p>
      
    </div>
  </div>
  <div className="card  ">
    <img src="assets\Images\119 KN Balagopal Kottarakkara.jpg" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-dark">Shri. K N Balagopal</h5>
      <p className="card-text text-dark">Hon'ble Minister for Finance</p>
     
    </div>
  </div>
  </div>
  <div className='row  my-2'>
  <div class="card">
    <img src="assets\Images\secretary.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-dark">Shri. Rajesh Kumar Singh IAS</h5>
      <p class="card-text text-dark">Additional Chief Secretary, Finance Department</p>
     
    </div>
  </div>
  <div class="card ">
    <img src="assets\Images\Abraham_Renn_S_IRS.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-dark">Shri.Abraham Renn S. IRS</h5>
      <p class="card-text text-dark">Director</p>
     
    </div>
  </div>
</div>
</div>
                    
                    
                </div>
            </div> 
        </div> 
    </section> 
    </div>
  )
}
