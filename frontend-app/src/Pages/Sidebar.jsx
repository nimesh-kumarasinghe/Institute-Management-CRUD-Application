import React, { Component } from "react";

class ToggleSidebar extends Component {
  constructor(props) {
    super(props);
  }
  openNav() {
    //console.log("nimesh");
    document.getElementById("mySidebar").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    //console.log("nimesh");
    document.getElementById("mySidebar").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
  }
  loginout = () => {
    if (this.props.userlogged == true) {
      document.cookie =
        "access_token" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      window.location = "/login";
    } else {
      window.location = "/login";
    }
  };
  sidebardata() {
    if (this.props.userlogged == true) {
      return (
        <div class="pt-5">
          <a href="/">Home</a>
          <a href="/my-account">My Account</a>
          <a href="/create-user">Add User</a>
          <a href="/update-user-list">Update User</a>
          <a href="/delete-user">Delete User</a>
          <a href="/view-users">View All user</a>
          <a href="/add-courses">Add Course</a>
          <a href="/update-course-list">Update Course</a>
          <a href="/delete-course">Delete Course</a>
          <a href="/view-courses">View All Courses</a>
          <a href="/student-register">Register Student</a>
          <a href="/update-student">Update Student</a>
          <a href="/delete-student">Delete Student</a>
          <a href="/students">View All Students</a>
          <a href="/payments">View All Payments</a>
          <center>
            <button
              type="button"
              onClick={this.loginout}
              class="btn btn-danger"
            >
              Logout
            </button>
          </center>
        </div>
      );
    } else {
      return (
        <div className="pt-5">
          <a href="/">Home</a>
          <br />
          <center>
            <button
              type="button"
              onClick={this.loginout}
              class="btn btn-primary"
            >
              Login
            </button>
          </center>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div id="mySidebar" class="sidebar">
          <div type="button" class="closebtn pt-5" onClick={this.closeNav}>
            ×
          </div>
          {this.sidebardata()}
        </div>

        <button class="openbtn" id="btn-nav" onClick={this.openNav}>
          ☰
        </button>
      </div>
    );
  }
}

export default ToggleSidebar;
