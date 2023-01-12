import React, { Component } from "react";
import StudentService from "../services/StudentService";
import CourseService from "../services/CourseService";
import PaymentService from "../services/PaymentService";

class StudentRegistration extends Component {
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
      cid: "",
      courses: [],
      course: [],
      refno: "",
    };
  }

  componentDidMount() {
    CourseService.getCourseDetails().then((res) => {
      this.setState({ courses: res.data });
    });
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    const date = new Date();
    StudentService.addStudent(this.state).then((res) => {
      PaymentService.createPayment({
        amount: this.state.course.cfee,
        paydate: date.toISOString(),
        payment_method: "Bank Transfer",
        refno: this.state.refno,
        sid: res.data["sid"],
        cid: this.state.course.cid,
      });
      alert("Sucessfully registered a student !! ");
      window.location = "/student-register";
    });
  };
  courseHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      cid: e.target.value,
    });

    CourseService.getCourse(e.target.value).then((res) => {
      this.setState({ course: res.data });
    });
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
      refno,
    } = this.state;

    return (
      <div class="page_bg">
        <div class="col-md-6 offset-md-3 all_forms">
          <br />
          <h3 className ="text-center fw-bold">ADD STUDENT
          </h3>
          <br />
          <form onSubmit={this.submitHandler} >
            <div class="mb-2">
              <label class="form-label">First Name</label>
              <input
                type="text"
                class="form-control"
                id="fname"
                name="firstname"
                placeholder="Enter Student First Name"
                value={firstname}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <div class="mb-2">
              <label class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="lname"
                name="lastname"
                placeholder="Enter Student Last Name"
                value={lastname}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <div class="mb-2">
              <label class="form-label">Surname Name</label>
              <input
                type="text"
                class="form-control"
                id="surname"
                name="surname"
                placeholder="Enter Student Surname"
                value={surname}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <div class="mb-2">
              <label class="form-label">NIC</label>
              <input
                type="text"
                class="form-control"
                id="nic"
                name="nic"
                placeholder="Enter Student NIC"
                value={nic}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <div class="mb-2">
              <label class="form-label">Gender</label>
              <select
                class="form-control"
                name="gender"
                id="gender"
                onChange={this.changeHandler}
                value={this.state.selectValue}
                required
              >
                <option value="">Select a Gender</option>
                <option value="Male">Male</option>
                <option value="FeMale">FeMale</option>
              </select>
            </div>

            <div class="mb-2">
              <label class="form-label">DOB</label>
              <input
                type="date"
                class="form-control"
                id="dob"
                name="dob"
                value={dob}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <div class="mb-2">
              <label class="form-label">Address No</label>
              <input
                type="text"
                class="form-control"
                id="addressno"
                name="addressno"
                placeholder="Address No"
                value={addressno}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <div class="mb-2">
              <label class="form-label">Street</label>
              <input
                type="text"
                class="form-control"
                id="street"
                name="street"
                placeholder="Enter Student Street"
                value={street}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <div class="mb-2">
              <label class="form-label">City</label>
              <input
                type="text"
                class="form-control"
                id="city"
                name="city"
                placeholder="Enter Student City"
                value={city}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <div class="mb-2">
              <label class="form-label">Telephone</label>
              <input
                type="text"
                class="form-control"
                id="telephone"
                name="telephone"
                placeholder="Enter Student Telephone No."
                value={telephone}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <div class="mb-2">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="Enter Student Email Address"
                value={email}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <div class="mb-2">
              <label class="form-label">Course</label>
              <select
                class="form-control"
                name="course"
                id="course"
                onChange={this.courseHandler}
                value={this.state.selectValue}
                required
              >
                <option value="">Select a Course</option>
                {this.state.courses.map((courses) => (
                  <option value={courses.cid}>{courses.cname}</option>
                ))}
              </select>
            </div>

            <br />
            <div class="p-3 mb-2 bg-dark text-white">
              <p>
                Duartion : {this.state.course.cduration}<br/>
                Amout : Rs. {this.state.course.cfee}
              </p>
            </div>
            <br />

            <div class="mb-2">
              <label class="form-label">Transaction Id</label>
              <input
                type="text"
                class="form-control"
                id="refno"
                name="refno"
                placeholder="Enter Payment Reference No."
                value={refno}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <br />
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default StudentRegistration;
