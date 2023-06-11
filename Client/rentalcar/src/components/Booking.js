import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import React from "react";

export default function Booking() {
    const [inputdata, setInputData] = useState({
        origin: "",
        destination: "",
        startDate: "",
        endDate: "",
        distance: "",
        MapImg: ""
    });
    const navigate = useNavigate();
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputData({ ...inputdata, [name]: value });
    }
    const save = (e) => {
        e.preventDefault();
        const { origin, destination, startDate, endDate } = inputdata;
        const data = new FormData();
        data.append("origin", origin);
        data.append("destination", destination)
        data.append("startDate", startDate)
        data.append("endDate", endDate)
        console.log(inputdata);
        navigate('/orderpage')

    }
    return <div>
        <div id='logo'>Logo</div>
        <div id="parent" >
            <h1 id="welcome">W E L C O M E !!</h1>
            <div id='container'>

                <h1 id="quote">"Don't Dream it,Drive it"</h1>
                <form id="forms" onSubmit={save} >

                    <input type="text" placeholder='Origin Name' className='Fields'
                        name="origin" required onChange={handleInput} ></input>
                    <input type="text" placeholder='Destination Name' className="Fields" required
                        name="destination" onChange={handleInput}></input>

                    <input type="date" placeholder='Starting Date' className="Fields" required
                        name="startDate" onChange={handleInput}></input>

                    <input type="date" placeholder='End Date' className="Fields" required
                        name="endDate" onChange={handleInput}></input>

                    <button type="submit" className="Fields" id="modifybtn">Check</button>
                </form>

            </div>
        </div>
    </div>

}