import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Cms() {
    const navigate=useNavigate();
    const [contacts,setContacts]=useState({})
    const [message, setMessage] = useState(null) 
    const [temp, setTemp] = useState(true) 

    useEffect(() => {
      axios.get("http://localhost:5000/comment/view-commend")
          .then(response => {
              if (response.data.success == true) {
                setMessage(response.data.data)
                  console.log(response.data.data);
              }
          })
  }, [temp])
    const handleInputChange=(e)=>{
      const {name,value}=e.target
      setContacts({
          ...contacts,
          [name]:value
      })
      console.log(contacts);
    }

    const formSubmit=(e)=>{
        e.preventDefault()
        console.log("ygfghuijok");
        axios.post("http://localhost:5000/comment/add-comment",contacts)
        .then((response) => {
            console.log("Result========",response)
            if(response.data.success==true)
            {
              
              alert(response.data.message);
              setTemp(!temp)
            }
            else{
                alert(response.data.message);
            }
      }).catch((err)=>{
      alert(err.response.data.message);
      })
      
      }
  return (
    <div>
         <section className="contact d-flex align-items-center py-5" id='location'>
        <div className="container-fluid text-light">
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center px-lg-5" data-aos="fade-right">
                <form onSubmit={formSubmit}>
                    <div style={{width:"90%"}}>
                        <div className="text-center text-lg-start py-4 pt-lg-0">
                            <p className='text-dark'>CONTACT US</p>
                            <h2 className="py-2 text-dark">Send your query</h2>
                        </div>
                        <div>
                            <div className="row" >
                                <div className="col-lg-6">
                                    <div className="form-group py-2">
                                        <input type="text" className="form-control form-control-input" id="exampleFormControlInput1" placeholder="Enter name"
                                        name='name' value={contacts.name} onChange={handleInputChange}/>
                                    </div>                                
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group py-2">
                                        <input type="number" className="form-control form-control-input" id="exampleFormControlInput2" placeholder="Enter phone number"
                                        name='phone' value={contacts.phone} onChange={handleInputChange}/>
                                    </div>                                 
                                </div>
                            </div>
                            <div className="form-group py-1">
                                <input type="email" className="form-control form-control-input" id="exampleFormControlInput3" placeholder="Enter email"
                                name='email' value={contacts.email} onChange={handleInputChange}/>
                            </div>  
                            <div className="form-group py-2">
                                <textarea className="form-control form-control-input" id="exampleFormControlTextarea1" rows="6" placeholder="Message"
                                name='message' value={contacts.message} onChange={handleInputChange}></textarea>
                            </div>                            
                        </div>
                        <div className="my-3">
                            <button type='submit'  className="btn form-control-submit-button btn-outline-danger" href="#your-link">Submit</button>
                        </div>
                    </div> 
                    </form>
                </div>
                <div className="col-lg-6 px-5 d-flex align-items-center" >
                    <img className="img-fluid d-none d-lg-block" src="assets\Images\139-1395528_the-cost-of-customer-service-customer-service-flat.png" alt="contact"/>        
                </div>
                 
            
            </div>
            {message===null?null:
            <div className="row">
            <div className="text-center text-lg-start py-4 pt-lg-0">
                {/* <p className='text-dark'></p> */}
                <h2 className="py-2 text-dark">Reviews</h2>
            </div>
            </div>}
            
            {
              message&&message.map(item=>(
                <div className="row">
                
                <div className="col-lg-6 d-flex justify-content-right justify-content-lg-end align-items-right px-lg-5" data-aos="fade-right">
                <div className="timeline-post" style={ {textAlign:"right"}}>
                    <div className="post-media">
                        <div className="content">
                        <h5><a href="#">{item.name}</a></h5>
                        {/* <p className='text-dark'><small>2 January at 9:30</small></p> */}
                        </div>
                    </div>
                    <div className="post-content">
                        <p className='text-dark'>{item.message}</p>
                    </div>
                    
                    </div>
                </div>{
                  item.reply===null?<>No Reply </>: <div className="col-lg-6 d-flex justify-content-left  align-items-left px-lg-5" data-aos="fade-right">
                  <div className="timeline-post">
                  <div className="post-media">
                      <div className="content">
                      <h5><a href="#">Reply From Admin</a></h5>
                      {/* <p className='text-dark'><small>2 January at 9:30</small></p> */}
                      </div>
                  </div>
                  <div className="post-content">
                      <p className='text-dark'>{item.reply}</p>
                  </div>
                 
                  </div>
                  </div>
                }
               
            </div>
              ))
            } 
            
        </div> 
    </section> 

    </div>
  )
}
