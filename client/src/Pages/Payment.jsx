import React,{useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Payment() {
  const location = useLocation()
	const contacts=location.state
  console.log(contacts);
  const navigate=useNavigate();
  const [token,setToken]=useState(localStorage.getItem("token"))

	const [paymentdata,setPaymentdata]=useState({})
  const [ticket,setTicket]=useState(null)
	useEffect(() => {
      const id=contacts.category_id
      axios.get(`http://localhost:5000/book/view-ticket-amound/${id}`)
      .then(response => {
        if (response.data.success == true) {
          setTicket(response.data.data[0].ticket_amount)
            console.log(response.data.data[0].ticket_amount);
        }
    })

	}, [])
	

	const handleInputChange=(e)=>{
        const {name,value}=e.target
        setPaymentdata({
            ...paymentdata,
            [name]:value
        })
        console.log(paymentdata);
    }


	const submitForm=(e)=>{
		e.preventDefault();
    var cardno = /^\(?([0-9]{14})$/;
    var ifsccode=/[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/;
		
    if(!ifsccode.test(paymentdata.ifsc)){
      alert("Please Enter valid IFSC Code!!")
    }else
    if(!cardno.test(paymentdata.number)){
      alert("Please Enter valid Card Number!!")
    }else{
		
			let id=localStorage.getItem("loginId")
     console.log(id);
      axios.post(`http://localhost:5000/book/ticket-book/${id}/${ticket}`,contacts)
      .then(response => {
          if (response.data.success == true) {
              alert(response.data.message);
              navigate("/userViewResult")
          }
      })
		}
	}


  
  return (
  <div>
  <section className="p-4 p-md-5 paymentprehome " >
  <div className="row d-flex justify-content-center">
    <div className="">
      <div className="card rounded-3">
        <div className="card-body p-4">
          <div className="text-center mb-4">
           <h2>Bank details</h2>
           <h6></h6>           
          </div>
          <form onSubmit={submitForm}>
            <div className="d-flex flex-row align-items-center mb-4 pb-1">           
              <div className="flex-fill mx-3">
                <div className='row'>
                <div className="form-outline col-6 ">
                <label className="form-label" for="formControlLgXc">Bank name</label>
                  <input type="text" id="formControlLgXc" className="form-control form-control-lg"name="bankname"
                  onChange={handleInputChange} value={paymentdata.bankname} required />
                </div>
                <div className="form-outline col-6 ">
                <label className="form-label" for="formControlLgXc">Branch Name</label>
                  <input type="text" id="formControlLgXc" className="form-control form-control-lg"name="bname"
                  onChange={handleInputChange} value={paymentdata.bname} required />
                </div>
                </div>
              </div>
            </div>      
            <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <div className="flex-fill mx-3">
                <div className="form-outline">
                <label className="form-label" for="formControlLgXs">IFSC code</label>
                  <input type="text" id="formControlLgXs" className="form-control form-control-lg"  placeholder='IFSC code' name="ifsc"
                  onChange={handleInputChange} value={paymentdata.ifsc} required />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <div className="flex-fill mx-3">
                <div className="form-outline">
                <label className="form-label" for="formControlLgXs">Accountholder Name:</label>
                  <input type="text" id="formControlLgXs" className="form-control form-control-lg" name="name"
                     onChange={handleInputChange} value={paymentdata.name} required  placeholder='Beneficiary name' />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <div className="flex-fill mx-3">
                <div className="form-outline">
                <label className="form-label" for="formControlLgXs">Account Number:</label>
                  <input type="number" id="formControlLgXs" className="form-control form-control-lg" name="number"
                  onChange={handleInputChange} value={paymentdata.number} required  placeholder='Account Number'/>
                </div>
              </div>
            </div>
            <button type='submit' className="mx-5 btn btn-success btn-lg btn-block col-10 mb-5">Make payment  ₹{ticket}</button>
            <a href="" className='px-5 text-danger'> are  you make making card payment?</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
