import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/UserService";
import 'react-date-picker/dist/DatePicker.css';

function UpdateUser() {
  
    const { userid } = useParams();
  
  const [useredata, setUsereData] = useState( {
    userid: "",
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
  });
  
  useEffect(() => {
    UserService.getUserById(userid).then((res) => {
    setUsereData(res.data);
    console.log(useredata);
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(useredata);
    UserService.updateUser(useredata);
    alert("Sucessfully updated an user !! ");
    window.location = "/update-user-list";
  };

  const changeHandler = (e) => {
    setUsereData((useredata) => ({
      ...useredata,
      [e.target.name]: e.target.value,
    }));
  };

  return(
    <div className = "p-3 page_bg text-black">
        <div className="row">
            <div className ="col-md-6 offset-md-3 offset-md-3 all_forms">
                <h3 className ="text-center fw-bold">UPDATE USER</h3>
                <div className ="card-body">
                <form onSubmit={submitHandler} >
                    <div class="form-group mb-4">
                        <label>First Name</label>
                        <input type="text" class="form-control" name="firstname" placeholder="Enter User First Name"
                        value={useredata.firstname} onChange={changeHandler}
                        required/>
                    </div>
                    <div class="form-group mb-4">
                        <label >Last Name</label>
                        <input type="text" class="form-control " name="lastname" placeholder="Enter User Last Name"
                        value={useredata.lastname} onChange={changeHandler}
                        required/>
                    </div>
                    <div class="form-group mb-4">
                        <label>Surname</label>
                        <input type="text" class="form-control" name="surname" placeholder="Enter User Surname"
                        value={useredata.surname} onChange={changeHandler}
                        required/>
                    </div>
                    <div class="form-group mb-4">
                        <label>NIC</label>
                        <input type="text" class="form-control" name="nic" placeholder="Enter User NIC"
                        value={useredata.nic} onChange={changeHandler}
                        required/>
                    </div>
                    <div class="form-group mb-4">
                        <label>Gender</label>
                            <div class="input-group mb-4">
                                <select class="form-select" name="gender" value={useredata.gender} onChange={changeHandler}>
                                    <option selected>Choose Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                    </div>
                    <div class="form-group mb-4">
                        <label>Date of Birth</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="dob"
                            placeholder="yyyy-mm-dd"
                            value={useredata.dob} 
                            onChange={changeHandler}
                            required/>
                    </div>
                    <div class="form-group mb-4">
                        <label>User Address</label>
                        <span class="input-group-text">
                            <input type="text" class="form-control" name="addressno" placeholder="Address No"
                            value={useredata.addressno} onChange={changeHandler} required/>
                            <input type="text" class="form-control" name="street" placeholder="Enter User Street"
                            value={useredata.street} onChange={changeHandler} required/>
                            <input type="text" class="form-control" name="city" placeholder="Enter User City"
                            value={useredata.city} onChange={changeHandler} required/>
                        </span>
                    </div>
                    <div class="form-group mb-4">
                        <label>Telephone No.</label>
                        <input type="text" class="form-control" name="telephone" placeholder="Enter User Telephone No."
                        value={useredata.telephone} onChange={changeHandler} required/>
                    </div>
                    <div class="form-group mb-4">
                        <label>Email Address</label>
                        <input type="email" class="form-control" name="email" placeholder="Enter User Email Address"
                        value={useredata.email} onChange={changeHandler} required/>
                    </div>
                    <div>
                    <button class="btn btn-primary">Save</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default UpdateUser;