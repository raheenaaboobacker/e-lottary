import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Prebook() {
  const [category, setCategory] = useState([])
  const [ticket, setTicket] = useState([])
  const [pticket, setPticket] = useState([])
  const [pre, setPre] = useState([])
  const [data, setData] = useState("false")
    const navigate=useNavigate()
    useEffect(() => {
        axios.get("http://localhost:5000/lottary/view-category")
            .then(response => {
                if (response.data.success == true) {
                    setCategory(response.data.data)
                    console.log(response.data.data);
                }
            })
    }, [])

    const showTicket= (event) => {
      console.log('Selected value:', event.target.value);
      const id=event.target.value;
      if(id===0)
      {alert("Please Choose Category")}
      else{
        axios.get(`http://localhost:5000/lottary/view-ticket/${id}`)
        .then(response => {
            if (response.data.success == true) {
                setTicket(response.data.data)
                console.log(response.data.data);
            }
        })
      }
     
    }
    const handleInputChange=(e)=>{
      const {name,value}=e.target
      setPre({
          ...pre,
          [name]:value
      })
      console.log(pre);
    }

    const handleChange = (e) => {
      let value = Array.from(e.target.selectedOptions, option => option.value);
      setPticket(value);
      console.log(pticket);
    }

    const prebook=()=>{
     let id=localStorage.getItem("loginId")

     pticket.forEach((element, index) => {
     console.log(element);
     
      console.log(pre);
      // axios.post(`http://localhost:5000/lottary/pre-book/${id}/${element}`,pre)
      // .then(response => {
      //   console.log(response);
      //     if (response.data.success == true) {
      //       setData(true)
      //     }
      // })
    })
    if(data===true){
      alert("pre booked")
    }else{
      alert("something Went wrong")
    }
    }

  return (
    <div>
        <section className="about d-flex  py-1 " id="about">
          
        <div className="container" >
            <div  className="  px-5 text-center  pb-4 row"><h1>Prebook your Tickets</h1></div>
            <div className="input-group row mt-4 mb-3">
                <select className=" col-md-12 form-select bod" id="inputGroupSelect01" name='district' value={pre.district} onChange={handleInputChange}>
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
             
              <div className="input-group mb-3 row">
                
                <select onChange={e => {showTicket(e);handleInputChange(e)}} className="form-select col-12  bod"   id="inputGroupSelect01" name='category_id' value={pre.category_id} >
                  <option selected>Tickect Category</option>
                  {category&&category.map(data=>(
                      <option  value={data._id}>{data.category_name}</option>

                    ))}
                    </select>
              </div>
              <div className="input-group row mb-3">
                <select multiple={true} className="form-select col-12   bod" id="inputGroupSelect01"name='ticket_id' value={pre.ticket_id} onChange={handleChange} required>
                  <option selected> Select your Tickect</option>
                  {ticket&&ticket.map(data=>(<>
                      {data.status==0?<option  value={data._id}>{data.ticket_number}</option>:null}

                  </>))}
                </select>
              </div>

              <div className='container py-5'>
                <table className="table table-hover   ">
                    <thead className='text-dark'>
                      <tr  >
                        <th scope="col">Sl.No</th>
                        <th scope="col">Ticket Number</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {ticket&&ticket.map((data,index)=>(
                      // {data.}
                      <tr>
                      <td scope="row">{index+1}</td>
                        <td scope="row">{data.ticket_number}</td>
                        <td>
                          <span className="text-pimary">
                          <span>{data.status===0?<>Available</>:<>Not Available</>}</span>
                          </span>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>


              <div className="form-check py-3">
              <input type="radio" aria-label="Radio button for following text input"/>
                <label className=" mx-2 form-check-label" for="flexCheckIndeterminate" aria-required>
                 the condition texts
                </label>
              </div>
              <div className='row py-3'>
              <button type="submit" onClick={prebook} className="btn btn-success btn-lg col-3" >Prebook</button>
            <button type="reset"   className=" mx-5 btn btn-primary btn-lg col-2">Reset</button>  
            </div>       
        </div> 
      
    </section>


    </div>
  )
}
