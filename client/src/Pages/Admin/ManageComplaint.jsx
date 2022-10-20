import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Components/AdminHeader'
import AdminSidebar from '../../Components/AdminSidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';

export default function ManageComplaint() {
    const [message, setMessage] = useState([]) 
    const [reply, setReply] = useState("") 
    const [id, setId] = useState("") 
	const [show,setShow]=useState(false)
  const navigate=useNavigate()

  useEffect(() => {
      axios.get("http://localhost:5000/comment/view-commend")
          .then(response => {
              if (response.data.success == true) {
                setMessage(response.data.data)
                  console.log(response.data.data);
              }
          })
  }, [])

  const addReply=(e)=>{
    e.preventDefault();
    console.log(id);
    console.log(reply);
    var data={
        vreply:reply
    }
    axios.post(`http://localhost:5000/comment/post-reply/${id}`,data)
          .then(response => {
              if (response.data.success == true) {
                alert(response.data.message)
                  console.log(response.data.message);
                  setShow(false)
              }
          })
  }
  return (
    <div> 
    <AdminHeader/>
    <AdminSidebar/>
    <main className="app-content">
                <div className="app-title">
                    <div>
                        <h1><i className="fa fa-Ticket Booking Details" /> Messages Details</h1>
                        {/* <p>A free and open source Bootstrap 4 admin template</p> */}
                    </div>
                    <ul className="app-breadcrumb breadcrumb">
                        <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
                        <li className="breadcrumb-item"><a href="#">Messages Details</a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="clearfix" />
                    <div className="col-md-12">
                        <div className="tile">
                            <h3 className="tile-title">Messages</h3>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead style={{backgroundColor:"#898993"}}>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Message</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {message && message.map(item => (
                                            <tr >
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.message}</td>
                                                <td>{item.reply===null?<><button onClick={()=>{setId(item._id);setShow(true)}}  className='btn btn-success'>Reply</button></>:<>{item.reply}</>}</td>
                                            </tr>
                                        ))}



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Modal
        show={show}
		size="lg"
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
		dialogClassName="modal-100w"
        // dialogClassName="modal-100w"
        // aria-labelledby="example-custom-modal-styling-title"
		style={{padding:"70px 0px 0px 0px"}}
      >
          
		
		<Modal.Body>
	<div className="container">
	
  
		<div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
       
		<div className="row">
        <div className="p-r-50 p-t-5 p-lr-0-lg">
            <div class="row">
                {console.log(id)}
                <form onSubmit={addReply}>
        <div class="col-md-12">
          <div class="tile">
            <div class="row">
              <div class="col-lg-6">
              <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    Add Reply Here
                </h4>

                <textarea onChange={(e)=>{setReply(e.target.value)}} name="reply" value={reply} class="form-control" id="exampleTextarea" rows="3" required></textarea>

                </div>
                </div>
                </div>
                <button type='submit' style={{marginLeft:"10px"}}   className='btn btn-success'>Post</button>
                </div>
                </form>
                </div>
               
            </div>
				</div>
				</div>
			</div> 	
        </Modal.Body>
      </Modal></div>
  )
}
