import React from "react";
import './CarDetails.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CarDetails() {

    
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [model, setModel] = useState('')
    const [milage, setMilage] = useState('')
    const [image, setImage] = useState('')
    const [availableFrom, setAvailableFrom] = useState('')
    const [availableTill, setAvailableTill] = useState('')
    const [perKm, setPerKm] = useState('')
    const [description, setDescription] = useState('')
    const [carDetails, setCarDetails] = useState('')
    const [Details, setDetails] = useState('')

    const navigate = useNavigate()

    const imageupload = e => {
        setImage(e.target.files[0])
      }

      function submitForm(e){
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", name);
        formData.append("type", type);
        formData.append("model", model);
        formData.append("milage", milage);
        formData.append("image", image);
        formData.append("availableFrom", availableFrom);
        formData.append("availableTill", availableTill);
        formData.append("perKm", perKm);
        formData.append("description", description);
        formData.append("carDetails", carDetails);
        formData.append("Details", Details);

        console.log(formData)
    
        fetch("http://localhost:8000/cars/postCar", {
          method: 'POST',
          headers: {
            // 'Content-Type': 'application/json',
          },
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => navigate('/adminCarList'))
      }

    return <div>
        <header id="logo">
            LOGO
            <span id="logout">Logout</span>
        </header>
        <div>
            <form className="body-container" onSubmit={submitForm}>
                <div>
                <h4 className="add-details">Add Car Details</h4>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Car Name</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="Name" 
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                    </div>

                    <div>
                    <div className="inline-input">
                        <label>Type</label>
                        <select className="form-select" aria-label="Default select example" name="type" value={type}
                        onChange={(e) => setType(e.target.value)}
                        >
                            <option selected>Select</option>
                            <option value="XUV">XUV</option>
                            <option value="UV">UV</option>
                            <option value="ALL">ALL</option>
                        </select>
                    </div>

                    <div className="inline-input">
                        <label>Model</label>
                        <select className="form-select" aria-label="Default select example" name="model" value={model}
                        onChange={(e) => setModel(e.target.value)}
                        >
                            <option selected>Select</option>
                            <option value="Basic">Basic</option>
                            <option value="Mid-range">Mid Range</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </div>
                    </div>

                    <div>
                    <div className="inline-input">
                        <label>Milage</label>
                        <select className="form-select" aria-label="Default select example" name="milage" value={milage}
                        onChange={(e) => setMilage(e.target.value)}
                        >
                            <option selected>Select</option>
                            <option value="20Km/L">20Km/L</option>
                            <option value="14Km/L">14Km/L</option>
                            <option value="15Km/L">15Km/L</option>
                            <option value="18Km/L">18Km/L</option>
                            <option value="10Km/L">10Km/L</option>
                        </select>
                    </div>

                    <div className="form-group inline-input">
                        <label for="formGroupExampleInput">Per KM</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="0000" 
                        name="perKm"
                        value={perKm}
                        onChange={(e) => setPerKm(e.target.value)}
                        />
                    </div>
                    </div>

                     <div>
                     <div className="form-group inline-input">
                        <label for="formGroupExampleInput">Available From</label>
                        <input 
                        type="date" 
                        class="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="0000" 
                        name="availableFrom"
                        value={availableFrom}
                        onChange={(e) => setAvailableFrom(e.target.value)}
                        />
                    </div>

                    <div className="form-group inline-input">
                        <label for="formGroupExampleInput">Available Till</label>
                        <input 
                        type="date" 
                        class="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="0000" 
                        name="availabeTill"
                        value={availableTill}
                        onChange={(e) => setAvailableTill(e.target.value)}
                        />
                    </div>
                     </div>

                    <div className="form-group" id="description">
                        <label for="formGroupExampleInput">Description</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="" 
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>

                <div className="right-inputs">
                    <div className="form-group">
                        <label for="formGroupExampleInput">Images</label>
                        <input 
                        type="file" 
                        class="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="" 
                        name="image"
                      
                        onChange={imageupload}
                        />
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput">Car Details</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="Car Details" 
                        name="carDetails"
                        value={carDetails}
                        onChange={(e) => setCarDetails(e.target.value)}
                        />
                    </div>

                    <div className="form-group" id="details-input">
                        <label for="formGroupExampleInput">Details</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="formGroupExampleInput" 
                        placeholder="Details" 
                        name="Details"
                        value={Details}
                        onChange={(e) => setDetails(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" className="btns">Add</button>
                </div>
            </form>
        </div>
    </div>
}