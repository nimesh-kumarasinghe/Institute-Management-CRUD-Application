import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import {useParams} from "react-router-dom";
import StudentService from '../services/StudentService';

function UpdateStudent() {
    const { sid } = useParams();
    const [studentdata, setStudentData] = useState({
      sid: "",
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
      cid: "",      
    });
    
    useEffect(() => {
      StudentService.getStudentById(sid).then((res) => {
        setStudentData(res.data);
        console.log(studentdata);
      });
    }, []);
  
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(studentdata);
      StudentService.updateStudent(studentdata);
      alert("Sucessfully updated a student !! ");
      window.location = "/update-student";
    };
  
    const changeHandler = (e) => {
        setStudentData((studentdata) => ({
        ...studentdata,
        [e.target.name]: e.target.value,
      }));
    };

    const [lib, setLib] = useState("");
    const onLibChange = value => {
      console.log("onLibChange: ", value);
      setLib(value);
    };

    return (
        <div className = "p-3 page_bg text-black">
          <div>
            <div className="col-md-6 offset-md-3 all_forms">
              <h3 className="text-center fw-bold">UPDATE STUDENT</h3>
              <div>
                <form>
                  <div className="form-group mb-4">
                    <label className="text-black">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      value={studentdata.firstname}
                      placeholder="Enter Student First Name"
                      onChange={changeHandler}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label className="text-black">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastname"
                      value={studentdata.lastname}
                      placeholder="Enter Student Last Name"
                      onChange={changeHandler}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label className="text-black">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      name="surname"
                      value={studentdata.surname}
                      placeholder="Enter Student Surname"
                      onChange={changeHandler}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label className="text-black">NIC</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nic"
                      value={studentdata.nic}
                      placeholder="Enter Student NIC"
                      onChange={changeHandler}
                      required
                    />
                  </div>
                  <div class="form-group mb-4">
                        <label>Gender</label>
                            <div class="input-group mb-4">
                                <select 
                                class="form-select" 
                                name="gender" 
                                value={studentdata.gender} 
                                onChange={changeHandler}>
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
                            value={studentdata.dob} 
                            onChange={changeHandler}
                            required
                            />
                    </div>
                    <div className="form-group mb-4">
                            <label className="text-black">Address No</label>
                            <input
                            type="text"
                            className="form-control"
                            name="addressno"
                            value={studentdata.addressno}
                            placeholder="Enter Address No."
                            onChange={changeHandler}
                            required
                            />
                  </div>
                  <div className="form-group mb-4">
                            <label className="text-black">Street</label>
                            <input
                            type="text"
                            className="form-control"
                            name="street"
                            value={studentdata.street}
                            placeholder="Enter Student Street"
                            onChange={changeHandler}
                            required
                            />
                  </div>
                  <div className="form-group mb-4">
                            <label className="text-black">City</label>
                            <input
                            type="text"
                            className="form-control"
                            name="city"
                            value={studentdata.city}
                            placeholder="Enter Student City"
                            onChange={changeHandler}
                            required
                            />
                  </div>
                  <div className="form-group mb-4">
                            <label className="text-black">Telephone</label>
                            <input
                            type="text"
                            className="form-control"
                            name="telephone"
                            value={studentdata.telephone}
                            placeholder="Enter Student Telephone No."
                            onChange={changeHandler}
                            required
                            />
                  </div>
                  <div className="form-group mb-4">
                            <label className="text-black">Email</label>
                            <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={studentdata.email}
                            placeholder="Enter Student Email"
                            onChange={changeHandler}
                            required
                            />
                  </div>
                  <div className="form-group mb-4">
                            <label className="text-black">Course ID</label>
                            <input
                            type="text"
                            className="form-control"
                            name="cid"
                            value={studentdata.cid}
                            placeholder="Enter Course"
                            onChange={changeHandler}
                            required
                            />
                  </div>
                  <button type="button" className="btn btn-primary" onClick={submitHandler}>Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
       
    export default UpdateStudent;
    