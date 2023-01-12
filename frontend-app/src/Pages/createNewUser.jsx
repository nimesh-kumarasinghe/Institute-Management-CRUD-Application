import React, { Component } from "react";
import axios from "axios";
import UserService from "../services/UserService";
class CreateNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      surname: "",
      nic: "",
      gender: "",
      dob: "",
      addressno: "",
      street: "",
      city: "",
      telephone: "",
      email: "",
      password: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    UserService.createUser(this.state);
    alert("Sucessfully added an user !! ");
    window.location = "/create-user";
  };

  render() {
    const {
      firstname,
      lastname,
      surname,
      nic,
      gender,
      dob,
      addressno,
      street,
      city,
      telephone,
      email,
      password,
    } = this.state;

    return (
      <div className="p-3 page_bg text-black">
        <div>
          <div className="col-md-6 offset-md-3 all_forms">
            <h3 className="text-center fw-bold">ADD USER</h3>
            <div>
              <form onSubmit={this.submitHandler}>
                <div class="form-group mb-4">
                  <label className="text-black">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="firstname"
                    placeholder="Enter User First Name"
                    value={firstname}
                    onChange={this.changeHandler}
                    required
                  />
                </div>
                <div class="form-group mb-4">
                  <label className="text-black">Last Name</label>
                  <input
                    type="text"
                    class="form-control "
                    name="lastname"
                    placeholder="Enter User Last Name"
                    value={lastname}
                    onChange={this.changeHandler}
                    required
                  />
                </div>
                <div class="form-group mb-4">
                  <label className="text-black">Surname</label>
                  <input
                    type="text"
                    class="form-control"
                    name="surname"
                    placeholder="Enter User Surname"
                    value={surname}
                    onChange={this.changeHandler}
                    required
                  />
                </div>
                <div class="form-group mb-4">
                  <label className="text-black">NIC</label>
                  <input
                    type="text"
                    class="form-control"
                    name="nic"
                    placeholder="Enter User NIC"
                    value={nic}
                    onChange={this.changeHandler}
                    required
                  />
                </div>
                <div class="form-group mb-4">
                  <label className="text-black">Gender</label>
                  <div class="input-group mb-4">
                    <select
                      class="form-select"
                      name="gender"
                      value={gender}
                      onChange={this.changeHandler}
                    >
                      <option selected>Choose Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div class="form-group mb-4">
                  <label className="text-black">Date of Birth</label>
                  <input
                    type="date"
                    class="form-control"
                    name="dob"
                    value={dob}
                    onChange={this.changeHandler}
                    required
                  />
                </div>
                <div class="form-group mb-4">
                  <label className="text-black">User Address</label>
                  <span class="input-group-text">
                    <input
                      type="text"
                      class="form-control"
                      name="addressno"
                      placeholder="Address No"
                      value={addressno}
                      onChange={this.changeHandler}
                      required
                    />
                    <input
                      type="text"
                      class="form-control"
                      name="street"
                      placeholder="Enter User Street"
                      value={street}
                      onChange={this.changeHandler}
                      required
                    />
                    <input
                      type="text"
                      class="form-control"
                      name="city"
                      placeholder="Enter User City"
                      value={city}
                      onChange={this.changeHandler}
                      required
                    />
                  </span>
                </div>
                <div class="form-group mb-4">
                  <label className="text-black">Telephone No.</label>
                  <input
                    type="text"
                    class="form-control"
                    name="telephone"
                    placeholder="Enter User Telephone No."
                    value={telephone}
                    onChange={this.changeHandler}
                    required
                  />
                </div>
                <div class="form-group mb-4">
                  <label className="text-black">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Enter User Email Address"
                    value={email}
                    onChange={this.changeHandler}
                    required
                  />
                </div>
                <div class="form-group mb-4">
                  <label className="text-black">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.changeHandler}
                    required
                  />
                </div>
                <div>
                  <button className="btn btn-primary">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewUser;
