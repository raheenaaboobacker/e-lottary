import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ManagerHeader from '../../Components/ManagerHeader';
import Managersidebar from '../../Components/Managersidebar';
import axios from 'axios';


export default function AddResult() {
   const navigate=useNavigate()
  const [data,setData]=useState([])
  const [category, setCategory] = useState([])
  const [ticket, setTicket] = useState([])
  const [firstprice, setFirstprice] = useState([])
  const [secondprice, setSecondprice] = useState([])
  const [thirdprice, setThirdprice] = useState([])
  const [fourprice, setFourprice] = useState([])
  const [fiveprice, setFiveprice] = useState([])
  const [seconddata, setSeconddata] = useState([])
  const [thirddata, setThirddata] = useState([])
  const [fourddata, setFourddata] = useState([])
  const [fivedata, setFivedata] = useState([])
  const [sixdata, setSixdata] = useState([])

  useEffect(() => {
      axios.get("http://localhost:5000/lottary/view-category")
          .then(response => {
              if (response.data.success == true) {
                  setCategory(response.data.data)
                  console.log(response.data.data);
              }
          })
        },[])

  const handleInputChange=(e)=>{
    const {name,value}=e.target
    setData({
        ...data,
        [name]:value
    })
    console.log(data);
}

const showTicket= (event) => {
  console.log('Selected value:', event.target.value);
  const id=event.target.value;
  axios.get(`http://localhost:5000/lottary/view-ticket/${id}`)
        .then(response => {
            if (response.data.success == true) {
                setTicket(response.data.data)
                console.log(response.data.data);
                
            }
        }).catch(err=>{console.log(err.response.data.message);})
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(firstprice.ticket_number);
  console.log(data.category_id);
  if(data.category_id===undefined){
    alert("Please choose category name")
  }else if(firstprice.ticket_number==undefined)
  {
    alert("Please Drow First Price")
  }else if(secondprice.ticket_number==undefined)
  {
    alert("Please Drow Second Price")
  }else if(thirdprice.ticket_number==undefined)
  {
    alert("Please Drow Third Price")
  }else{

  
    const rdata={
      category_id:data.category_id,
      first:firstprice.ticket_number,
      second:secondprice.ticket_number,
      third:thirdprice.ticket_number,
      third2:fourprice.ticket_number,
      third3:fiveprice.ticket_number,
    }
    console.log(rdata);
  axios.post("http://localhost:5000/result/add-result",rdata)
  .then((result)=>{
    console.log(result.data);
    if(result.data.success==true){
      alert(result.data.message)
      navigate('/managerViewResult')
    }else{
      alert(result.data.message)

    }
  
  }).catch(err=>{alert(err.response.data.message);})
}
}
const randomGenerate=()=>{
  const random=ticket[Math.floor(Math.random()*ticket.length)]  
  setFirstprice(random);
  console.log(seconddata);
}

const secondgenerate=()=>{
  const random=seconddata[Math.floor(Math.random()*seconddata.length)]  
  setSecondprice(random);
  console.log(thirddata);
}


const thirdgenerate=()=>{
  const random=thirddata[Math.floor(Math.random()*thirddata.length)]  
  setThirdprice(random);
  console.log(fourddata);
}

const fourgenerate=()=>{
  const random=fourddata[Math.floor(Math.random()*fourddata.length)]  
  setFourprice(random);
  console.log(fivedata);
}

const fivegenerate=()=>{
  const random=fivedata[Math.floor(Math.random()*fivedata.length)]  
  setFiveprice(random);
  console.log(sixdata);
}

useEffect(()=>{
  setSeconddata(ticket.filter((item)=>{
    return item.ticket_number!==firstprice.ticket_number  
  }))
},[firstprice])
useEffect(()=>{
  setThirddata(seconddata.filter((item)=>{
    return item.ticket_number!==secondprice.ticket_number  
  }))
},[secondprice])
useEffect(()=>{
  setFourddata(thirddata.filter((item)=>{
    return item.ticket_number!==thirdprice.ticket_number  
  }))
},[thirdprice])
useEffect(()=>{
  setFivedata(fourddata.filter((item)=>{
    return item.ticket_number!==fourprice.ticket_number  
  }))
},[fourprice])
useEffect(()=>{
  setSixdata(fivedata.filter((item)=>{
    return item.ticket_number!==fiveprice.ticket_number  
  }))
},[fiveprice])
console.log(seconddata);
console.log(thirddata);
console.log(fourddata);
  return (
    <div className="app sidebar-mini">
    <ManagerHeader/>
    <div className="adminapp-sidebar__overlay" data-toggle="sidebar"></div>
    <Managersidebar/>
    <main className="app-content">
    <div className="app-title">
      <div>
        <h1><i className="fa fa-edit"></i> Add Result</h1>
        {/* <p>Alert can sent to Fisher Man</p> */}
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
        <li className="breadcrumb-item">home</li>
        <li className="breadcrumb-item"><a href="#">Add Result</a></li>
      </ul>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="tile">
          <div className="row">
            <div className="col-lg-7 offset-lg-2">
              <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="exampleSelect1">Lottary Category Name</label>
                  <select className="form-control" id="exampleSelect1" onChange={e => {showTicket(e);handleInputChange(e)}} name="category_id" value={data.category_id}>
                  <option selected>Tickect Category</option>
                  {category&&category.map(data=>(
                      <option  value={data._id}>{data?.category_name}</option>

                    ))}
                     </select>
                </div>
                <div className="row">
                  <div className="col-sm-9">
                     <input className="form-control" type="text"value={firstprice?.ticket_number} />
                     </div>
                  <div className="col-sm-3">
                  {ticket!=""?<button type='button' onClick={randomGenerate}>First Price</button>:""}

                  </div>
                </div>
                                  
                <div className="row">
                  <div className="col-sm-9">
                     <input className="form-control" type="text"value={secondprice?.ticket_number} /> 
                     </div>    
                     <div className="col-sm-3">            
                  {seconddata!=""?<button type='button' onClick={secondgenerate}>Second Price </button>:""}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-9">
                     <input className="form-control" type="text"value={thirdprice?.ticket_number} />
                     </div>    
                     <div className="col-sm-3">                     
                {thirddata!=""?<button type='button' onClick={thirdgenerate}>Third Price1</button>:""}
                </div>
                </div>
                <div className="row">
                  <div className="col-sm-9">
                     <input className="form-control" type="text"value={fourprice?.ticket_number} />
                     </div>    
                     <div className="col-sm-3">                     
                {fourddata!=""?<button type='button' onClick={fourgenerate}>Third Price 2</button>:""}
                </div>
                </div>
                <div className="row">
                  <div className="col-sm-9">
                     <input className="form-control" type="text"value={fiveprice?.ticket_number} />
                     </div>    
                     <div className="col-sm-3">                     
                {fivedata!=""?<button type='button' onClick={fivegenerate}>Third Price 3</button>:""}
                </div>
                </div>
                
                {/* <div className="form-group">
                  <label htmlFor="exampleSelect1">Second Price</label>
                   <select className="form-select col-12 bod" id="inputGroupSelect01" name='second' value={data.second} onChange={handleInputChange} required>
                  <option selected> Select Tickect number</option>
                  {ticket&&ticket.map(data=>(<>
                    <option  value={data?.ticket_number}>{data?.ticket_number}</option>
                      
                      </>
                    ))}
                </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleSelect1">Third Price</label>
                   <select className="form-select col-12 bod" id="inputGroupSelect01" name='third' value={data.third} onChange={handleInputChange} required>
                  <option selected> Select your Tickect number</option>
                  {ticket&&ticket.map(data=>(<>
                    <option  value={data?.ticket_number}>{data?.ticket_number}</option>
                      
                      </>
                    ))}
                </select>
                </div> */}
                <div className="form-submit">
                <input type="submit" style={{width:"200px"}} name="submit" id="submit" className="submit" value="Add" />
            </div>
              </form>
            </div>
            </div>
           
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}
