import React from 'react'
import Cerousel from '../Components/Cerousel'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Servicenav from '../Components/Servicenav'

export default function Downloadforms() {
  return (
    <div>
        <Servicenav/>
        <div className='container py-5'>
                <table className="table table-hover table-bordered ">
  <thead className='table-info'>
    <tr  >
      <th scope="col">Forms</th>
      <th scope="col">Download</th>
    </tr>
  </thead>
  <tbody>
   
    <tr>
      <th scope="row">Agency Form</th>
      <td>
        <a href="">
        <span className="text-pimary">
        <i class="fa fa-download" ></i><span>Doownload</span>
        </span>
        </a>
      </td>
    </tr>
    <tr>
      <th scope="row">Collecting Bank</th>
      <td>
        <a href="">
        <span className="text-pimary">
        <i class="fa fa-download" ></i><span>Doownload</span>
        </span>
        </a>
      </td>
    </tr><tr>
      <th scope="row">Letter of Authorisation</th>
      <td>
        <a href="">
        <span className="text-pimary">
        <i class="fa fa-download" ></i><span>Doownload</span>
        </span>
        </a>
      </td>
    </tr><tr>
      <th scope="row">Receiving Bank</th>
      <td>
        <a href="">
        <span className="text-pimary">
        <i class="fa fa-download" ></i><span>Doownload</span>
        </span>
        </a>
      </td>
    </tr><tr>
      <th scope="row">Payees Receipt</th>
      <td>
        <a href="">
        <span className="text-pimary">
        <i class="fa fa-download" ></i><span>Doownload</span>
        </span>
        </a>
      </td>
    </tr><tr>
      <th scope="row">Nominee Form (Agent)</th>
      <td>
        <a href="">
        <span className="text-pimary">
        <i class="fa fa-download" ></i><span>Doownload</span>
        </span>
        </a>
      </td>
    </tr><tr>
      <th scope="row">Agent Prize Voucher</th>
      <td>
        <a href="">
        <span className="text-pimary">
        <i class="fa fa-download" ></i><span>Doownload</span>
        </span>
        </a>
      </td>
    </tr><tr>
      <th scope="row">Prize Voucher</th>
      <td>
        <a href="">
        <span className="text-pimary">
        <i class="fa fa-download" ></i><span>Doownload</span>
        </span>
        </a>
      </td>
    </tr><tr>
      <th scope="row">Demand Form</th>
      <td>
        <a href="">
        <span className="text-pimary">
        <i class="fa fa-download" ></i><span>Doownload</span>
        </span>
        </a>
      </td>
    </tr>
    
  </tbody>
</table>
        </div>
        <Footer/>


    </div>
  )
}
