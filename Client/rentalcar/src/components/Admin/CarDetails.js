import React from "react";
import './CarDetails.css'

export default function CarDetails() {

    // const carName

    return <div>
        <header id="logo">
            LOGO
            <span id="logout">Logout</span>
        </header>
        <div>
            <form className="body-container">
                <div>
                <h4>Add Car Details</h4>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Car Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" />
                    </div>

                    <div>
                    <div className="inline-input">
                        <label>Type</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="inline-input">
                        <label>Model</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    </div>

                    <div>
                    <div className="inline-input">
                        <label>Milage</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="form-group inline-input">
                        <label for="formGroupExampleInput">Per KM</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="0000" />
                    </div>
                    </div>

                     <div>
                     <div className="form-group inline-input">
                        <label for="formGroupExampleInput">Available From</label>
                        <input type="date" class="form-control" id="formGroupExampleInput" placeholder="0000" />
                    </div>

                    <div className="form-group inline-input">
                        <label for="formGroupExampleInput">Available Till</label>
                        <input type="date" class="form-control" id="formGroupExampleInput" placeholder="0000" />
                    </div>
                     </div>

                    <div className="form-group" id="description">
                        <label for="formGroupExampleInput">Description</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" />
                    </div>
                </div>

                <div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Images</label>
                        <input type="file" class="form-control" id="formGroupExampleInput" placeholder="" />
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput">Car Details</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Car Details" />
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput">Details</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Details" />
                    </div>
                </div>
            </form>
        </div>
    </div>
}