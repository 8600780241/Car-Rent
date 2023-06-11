import React from "react";

export default function CarDetails() {

    // const carName

    return <div>
        <h4>Add Car Details</h4>
        <div>
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">Car Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" />
                </div>

                <div>
                    <label>Type</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div>
                    <label>Model</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div>
                    <label>Milage</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="formGroupExampleInput">Per KM</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="0000" />
                </div>

                <div class="form-group">
                    <label for="formGroupExampleInput">Available From</label>
                    <input type="date" class="form-control" id="formGroupExampleInput" placeholder="0000" />
                </div>

                <div class="form-group">
                    <label for="formGroupExampleInput">Available From</label>
                    <input type="date" class="form-control" id="formGroupExampleInput" placeholder="0000" />
                </div>

                <div class="form-group">
                    <label for="formGroupExampleInput">Available Till</label>
                    <input type="date" class="form-control" id="formGroupExampleInput" placeholder="0000" />
                </div>

                <div class="form-group">
                    <label for="formGroupExampleInput">Description</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" />
                </div>
            </form>
        </div>
    </div>
}