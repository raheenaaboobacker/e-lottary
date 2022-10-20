import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment'
import Agentnav from '../../Components/Agentnav'
import Footer from '../../Components/Footer'
import Result from '../../Components/Result';

export default function AgencyViewResult() {
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
             
                console.log(response.data.data);
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
            case "thirdPriceTicket":   return <> {ticketresult&&ticketresult.map(item=><>Third Price {item.third_price} Draw On {moment(item.date).format('MM/DD/YYYY')}</>)}  </>;
    
    
            default:      return <>Not found</>
          }
          
        }
        
        setPricedata(keyDatadata)
        
      },[keyData])
      
  console.log("key",keyData);
  console.log("Pdata",pricedata);
  console.log("view",view);
  return (
    <div className='Agenthome'>
    <Agentnav/>
    <Result/>
    <Footer/>
    </div>
  )
}
