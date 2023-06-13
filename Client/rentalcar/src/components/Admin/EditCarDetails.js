import React, { useEffect } from "react";
import "./CarDetails.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCarDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState({});

    const token = localStorage.getItem('token')

    const [formData, setFormData] = useState({
      name: "",
      type: "",
      model: "",
      mileage: "",
      availableFrom: "",
      availableTill: "",
      perKm: "",
      description: "",
      carDetails: "",
      Details: "",
      image: null,
    });
  
    useEffect(() => {
      fetch(`http://localhost:8080/cars/getCars/${id}`)
        .then((response) => response.json())
        .then((data) => setCar(data))
        .catch((error) => console.log(error));
    }, [id]);
  
    useEffect(() => {
      if (car) {
          console.log(car)
        setFormData({
          name: car.name,
          type: car.type,
          model: car.model,
          mileage: car.mileage,
          availableFrom: car.availableFrom,
          availableTill: car.availableTill,
          perKm: car.perKm,
          description: car.description,
          carDetails: car.carDetails,
          Details: car.Details,
          image: null,
        });
      }
    }, [car]);
  
    const handleInputChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleImageChange = (event) => {
      setFormData({
        ...formData,
        image: event.target.files[0],
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const updatedCar = new FormData();
      updatedCar.append("name", formData.name);
      updatedCar.append("type", formData.type);
      updatedCar.append("model", formData.model);
      updatedCar.append("mileage", formData.mileage);
      updatedCar.append("availableFrom", formData.availableFrom);
      updatedCar.append("availableTill", formData.availableTill);
      updatedCar.append("perKm", formData.perKm);
      updatedCar.append("description", formData.description);
      updatedCar.append("carDetails", formData.carDetails);
      updatedCar.append("Details", formData.Details);
      if (formData.image) {
        updatedCar.append("image", formData.image);
      }
  
      fetch(`http://localhost:8080/cars/updateCar/${id}`, {
        method: "PUT",
        body: updatedCar,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          navigate("/adminCarList");
        })
        .catch((error) => console.log(error));
    };
  
      function logout(e) {
      localStorage.removeItem("token")
      navigate('/admin/signIn')
  }

  return<div>
    {token ? <div>
      <header id="logo">
        LOGO
        <span id="logout" onClick={logout}>Logout</span>
      </header>
      <div>
        <form className="body-container" onSubmit={handleSubmit}>
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
                onChange={handleInputChange}
                value={formData.name}
              />
            </div>

            <div>
              <div className="inline-input">
                <label>Type</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                >
                  <option selected>Select</option>
                  <option value="XUV">XUV</option>
                  <option value="UV">UV</option>
                  <option value="ALL">ALL</option>
                </select>
              </div>

              <div className="inline-input">
                <label>Model</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
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
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="milage"
                  value={formData.mileage}
                  onChange={handleInputChange}
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
                  value={formData.perKm}
                  onChange={handleInputChange}
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
                  value={formData.availableFrom}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group inline-input">
                <label for="formGroupExampleInput">Available Till</label>
                <input
                  type="date"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="0000"
                  name="availableTill"
                  value={formData.availableTill}
                  onChange={handleInputChange}
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
                value={formData.description}
                onChange={handleInputChange}
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
                onChange={handleImageChange}
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
                value={formData.carDetails}
                onChange={handleInputChange}
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
                value={formData.Details}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btns">
              Add
            </button>
          </div>
        </form>
      </div>
    </div> : <div>Not Authorized</div>}
  </div>
}
