import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ user: res.data });
    });
  }
  render() {
    return (
      <div className="container all_forms">
        <h2 className="text-center fw-bold">USER LIST</h2>
        <div className="row">
          <div>
            <table className="table table-stripped table-bordered table-hover">
              <thead>
                <tr>
                  <th>User ID</th>
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
                </tr>
              </thead>
              <tbody>
                {this.state.user.map((user) => (
                  <tr key={user.userid}>
                    <td>{user.userid}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.surname}</td>
                    <td>{user.nic}</td>
                    <td>{user.gender}</td>
                    <td>{user.dob}</td>
                    <td>{user.addressno}</td>
                    <td>{user.street}</td>
                    <td>{user.city}</td>
                    <td>{user.telephone}</td>
                    <td>{user.email}</td>
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

export default ViewUser;
