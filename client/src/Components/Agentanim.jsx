import React from 'react'

export default function Agentanim() {
  return (
    <div>
         <section className="information">
    <div className="container-fluid">  
        <div className="row text-dark">
            <div className="col-lg-4 text-center p-5 bg-transparent" data-aos="zoom-in">
                <i className="fa fa-rupee fa-3x p-2"></i>
                <h4 className="py-3">Payments</h4>
                <a className="btn btn-outline-dark" href="/viewPayment">click</a>
            </div>
            <div className="col-lg-4 text-center p-5 bg-transparent"  data-aos="zoom-in">
                <i class="fa fa-clock-o fa-3x p-2" aria-hidden="true"></i>
                <h4 className="py-3">Lottery Result</h4>
                <a className="btn btn-outline-dark" href="/agencyViewReult">click</a>
            </div>
            <div className="col-lg-4 text-center p-5 bg-transparent"  data-aos="zoom-in"> 
                <i className="fa fa-file fa-3x p-2"></i>
                <h4 className="py-3 ">Prebooked Tickets</h4>
                <a className="btn  btn-outline-dark" href="/agencyViewPrebook">click</a>
            </div>
        </div>
    </div> 
</section>
        
    </div>
  )
}
