import React from "react";
import "../Nav/filterpage.css"
  export default function FilterPage(){
    return(
        <>
         <div id="filter-box-oppo">
           <div id="choose-the-car-type">
          <select className="select">
          <option>Car Type</option>
           <option>XUV</option>
           <option>UV</option>
           <option>All</option>
          </select>
     
          <select className="select">
          <option>Milage</option>
           <option>10KM/L</option>
           <option>20KM/L</option>
           <option>15KM/L</option>
          </select>
     
          <select className="select">
          <option>Seating</option>
           <option>10</option>
           <option>6</option>
           <option>4</option>
          </select>
     
          </div>
       </div>
       </>
      )
  }