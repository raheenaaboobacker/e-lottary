import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment'

export default function Result() {
    const [result, setResult] = useState("")
  const [ticket, setTicket] = useState(null)
  const [ticketresult, setTicketresult] = useState([])
  const [filterData, setfilterData] = useState([])
  const [view, setView] = useState(true)
  const [keyData,setkeyData]=useState("")
  const [pricedata,setPricedata]=useState('')
  const [ticketrslt, setTicketrslt] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/result/view-ticket-results")
    .then(response => {
        if (response.data.success == true) {
          setTicketrslt(response.data.data)
         
            console.log("total result======>",response.data.data);
        }
    })
  },[])


  useEffect(() => {
    const id=localStorage.getItem("loginId");
    console.log(id);
      axios.get(`http://localhost:5000/book/view-booked-ticket/${id}`)
          .then(response => {
              if (response.data.success == true) {
                setTicket(response.data.data)
               
                  console.log(response.data.data);
              }
          })

          
        
  }, [keyData])

  const viewProfile=()=>{
    if(result===""){
      alert("Please Enter Ticket Number")
    }
    else{
    console.log("result",result)
    axios.get("http://localhost:5000/result/view-ticket-resultS")
    .then(response => {
      if (response.data.success == true) {
        console.log("hi");
        setfilterData(response.data.data.filter((filterdata) => {
          return filterdata.firstPriceTicket.includes(result)||filterdata.secondPriceTicket.includes(result)||filterdata.thirdPriceTicket.includes(result)
          ||filterdata.thirdPriceTicket2.includes(result)||filterdata.thirdPriceTicket3.includes(result)
        }))
        }
        else{
          setTicketresult("hai")
        }
    })
  }
}


  console.log( "fltrdt",filterData);

  useEffect(()=>{

    if(filterData?._id!=""){
      setTicketresult(filterData)
      
    }
    

  },[filterData])


   useEffect(()=>{

    if(filterData?._id!=""){
      setView(!view)        
    }
   

  },[ticketresult])

console.log("final",ticketresult);
  useEffect(()=>{
    if(ticketresult!=""){
// console.log(Object.keys(ticketresult).find(key => ticketresult[key] === result));
   const getObjKey=(obj, value) =>{
   return Object.keys(obj[0]).find(key => obj[0][key] === value);
    }
    setkeyData(getObjKey(ticketresult, result));

    }
  },[ticketresult])

 

  useEffect(()=>{
    const keyDatadata=()=>{
      
      switch(keyData) {

        case "firstPriceTicket":   return <> {ticketresult&&ticketresult.map(item=><>First Price {item.first_price} Draw On {moment(item.date).format('MM/DD/YYYY')}</>)} </>;
        case "secondPriceTicket":   return <> {ticketresult&&ticketresult.map(item=><>Second Price {item.second_price} Draw On {moment(item.date).format('MM/DD/YYYY')}</>)} </>;
        case "thirdPriceTicket":   return <> {ticketresult&&ticketresult.map(item=><>Third Price 1 {item.third_price} Draw On {moment(item.date).format('MM/DD/YYYY')}</>)}  </>;
        case "thirdPriceTicket2":   return <> {ticketresult&&ticketresult.map(item=><>Third Price 2 {item.third_price} Draw On {moment(item.date).format('MM/DD/YYYY')}</>)}  </>;
        case "thirdPriceTicket3":   return <> {ticketresult&&ticketresult.map(item=><>Third Price 3 {item.third_price} Draw On {moment(item.date).format('MM/DD/YYYY')}</>)}  </>;


        default:      return <>Not found</>
      }
      
    }
    
    setPricedata(keyDatadata)
    
  },[keyData])
  
console.log("key",keyData);
console.log("Pdata",pricedata);
console.log("view",view);

  return (
    <div>
         <div className='container' id='resultt' style={{marginTop:"50px"}}>
        <h1 className='text-dark'>
            <u >RESULT</u>
        </h1>
        <p className='py-2'>
        Latest Lottery Draw Results
        </p>
        <div className='py-5 container justify-content-end'>
          <p>Check your result</p>
          <input type="text" name="result" onChange={(e)=>setResult(e.target.value)} id="" />
          <button type="button" className=" mx-3 btn btn-success  col-1" onClick={viewProfile}>Submit</button>

        </div>
        <div className='container' id="resultShow">
          {view===false? <>{keyData!=""?<><h3>Congratulation !!!!You won {pricedata}</h3></>
          :<h3>better luck next time</h3>}
          </>:""}
        </div>
        
        
       
         
         
          {/* <select className=" mx-2 form-select  " id="inputGroupSelect05">
                  <option selected>10</option>
                  <option value="1">25</option>
                  <option value="2">50</option>
                  <option value="3">100</option>
                  </select>
                  entries */}
        </div>
      

        <div className='container py-5'>
             
                 <table className="table table-hover  ">
                 <thead className='text-dark'>
                   <tr  >
                     <th scope="col">Sl.No</th>
                     <th scope="col">Ticket</th>
                     <th scope="col">Result Date</th>
                     <th scope="col">First Price</th>
                     <th scope="col">Second Price</th>
                     <th scope="col">Third Price 1</th>
                     <th scope="col">Third Price 2</th>
                     <th scope="col">Third Price 3</th>
                     
                     
                   </tr>
                 </thead>
                 <tbody>
                 {ticketrslt&&ticketrslt.map((data,i)=>(
                <tr>
                <td scope="row">{i+1}</td>
                 <td scope="row">{data?.category_name}</td>
                 <td scope="row">{moment(data?.date).format('MM/DD/YYYY')}</td>
                 <td scope="row">{data?.firstPriceTicket}</td>
                 <td scope="row">{data?.secondPriceTicket}</td>
                 <td scope="row">{data?.thirdPriceTicket}</td>
                 <td scope="row">{data?.thirdPriceTicket2}</td>
                 <td scope="row">{data?.thirdPriceTicket3}</td>
                
               </tr>
                 ))}

                   
                   
                 </tbody>
             </table> 
             
        </div>
    </div>
  )
}
