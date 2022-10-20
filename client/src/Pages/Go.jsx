import React from 'react'
import Animation from '../Components/Animation'
import Cerousel from '../Components/Cerousel'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Servicenav from '../Components/Servicenav'

export default function Go() {
  return (
    <div>
        <Servicenav/>
        <Animation/>
        <div>
            <h1 className='text-success px-5'>  GO & Circulars</h1>
          
        </div>
        <div className='container py-5'>
                <table className="table table-hover table-bordered ">
  <thead className='table-info'>
    <tr  >
      <th scope="col-2">Date</th>
      <th scope="col">	GO/Circular No.</th>
      <th scope="col-3">Subject</th>
      <th scope="col">	Download</th>
      
    </tr>
  </thead>
  <tbody>
   
    <tr>
      <td scope="row">04-02-2019 </td>
      <td >നമ്പർ.OSL/66344/2019/DSL </td>
      <td>
      വ്യാജ ടിക്കറ്റുകൾ നിർമ്മിച്ച് സമ്മാനത്തിനായി ഓഫീസിൽ സമർപ്പിക്കുന്നത്  സംബന്ധിച്ച്.
      </td>
      <td>
        <a href="">
        <span className="text-pimary">
        <i class="fa fa-download" ></i><span>Doownload</span>
        </span>
        </a>
      </td>
    </tr>
    <tr>
      <td scope="row">03-10-2018 </td>
      <td > OSL/40976/17/DSL </td>
      <td>
      സംസ്ഥാന ഭാഗ്യക്കുറി ടിക്കറ്റുകളുടെ അവസാന നാലക്കങ്ങൾ ഒരേ രീതിയിൽ വരത്തക്കവണ്ണം ക്രമീകരിച്ച് ടിക്കറ്റ്‌ വില്‍പ്പന നടത്തുന്നത് - സംബന്ധിച്ച്
      </td>
      <td>
        <a href="">
        <span className="text-pimary">
        <i class="fa fa-download" ></i><span>Doownload</span>
        </span>
        </a>
      </td>
    </tr>
    <tr>
      <td scope="row">21-04-2018 </td>
      <td > സ. ഉ. (സാധാ) നം. 296/2018/ നി. വ. </td>
      <td>
      ഭാഗ്യക്കുറി ടിക്കറ്റുകൾ സെറ്റായി വിൽക്കുന്നത് - സർക്കാർ നിർദ്ദേശം റദ്ദ് ചെയ്തു ലോട്ടറി വകുപ്പ് ഡയറക്‌ടർ പുറപ്പെടുവിച്ച സർക്കുലർ സാധൂകരിച്ചും പുറപ്പെടുവിച്ച ഉത്തരവ്.
      </td>
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
