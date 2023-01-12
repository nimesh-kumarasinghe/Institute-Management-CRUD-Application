import React, { Component } from "react";
import StudentService from "../services/StudentService";
class ListStudents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: [],
    };
    this.studentRegistration = this.studentRegistration.bind(this);
  }
  componentDidMount() {
    StudentService.getStudents().then((res) => {
      this.setState({ student: res.data });
    });
  }
  studentRegistration() {
    this.props.history.push("/student-register");
  }
  render() {
    return (
      <div className="container all_forms">
        <h2 className="text-center fw-bold">STUDENT LIST</h2>
        <div className="row">
          <div>
            <table className="table table-stripped table-bordered table-hover">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Surname</th>
                  <th>NIC</th>
                  <th>Gender</th>
                  <th>Date of Birth</th>
                  <th>Address No</th>
                  <th>Street</th>
                  <th>City</th>
                  <th>Telephone</th>
                  <th>Email</th>
                  <th>Course ID</th>
                </tr>
              </thead>
              <tbody>
                {this.state.student.map((student) => (
                  <tr key={student.sid}>
                    <td>{student.sid}</td>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.surname}</td>
                    <td>{student.nic}</td>
                    <td>{student.gender}</td>
                    <td>{student.dob}</td>
                    <td>{student.addressno}</td>
                    <td>{student.street}</td>
                    <td>{student.city}</td>
                    <td>{student.telephone}</td>
                    <td>{student.email}</td>
                    <td>{student.cid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListStudents;
