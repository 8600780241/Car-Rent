import React from "react";
import { useState } from "react";
import "../Nav/filterpage.css"
  export default function FilterPage(){

        const [querry, setQuerry] = useState("");
  
        const search = (data) => {
            return data.filter(
                (item) =>
                    item.type.toLowerCase().includes(querry) ||
                    item.milage.toLowerCase().includes(querry)
                   
            );
        };


        let token = localStorage.getItem('token')
    
     return (
      <div>
         {token ?  <div id="form">
           <div id="button">
              
              <select className="select" onChange={(e) => setQuerry(e.target.value)}>
              
                 <option>CarType</option>
                 <option>XUV</option>
                 <option>UV</option>
                 <option>All</option>
              </select>
     
              <select className="select" onChange={(e) => setQuerry(e.target.value)} >
               
                 <option>Milage</option>
                 <option>10KM/L</option>
                 <option>20KM/L</option>
                 <option>15KM/L</option>
              </select>
  
              <select className="select" onChange={(e) => setQuerry(e.target.value)}>
             
                 <option>Seater</option>
                 <option>10</option>
                 <option>6</option>
                 <option>4</option>
              </select>
  
           </div>
           <div>
           
           </div>
        </div> : <div>Not Authorized</div>}
      </div>
      )
  }