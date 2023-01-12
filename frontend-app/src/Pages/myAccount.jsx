import React from "react";
import UserService from "../services/UserService";
import UserImage from "../Backgrounds/userimg.png";

function MyAccount() {
  const loginout = () => {
    document.cookie =
      "access_token" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    window.location = "/login";
  };
  return (
    <div
      className="form_container"
      style={{ width: "auto", height: "100vh"}}
    >
      <div>
        <center>
          <img
            alt="userImage"
            src={UserImage}
            width="100px"
            height="100px"
          />
          <h1 className="text-center">My Account</h1>
        </center>

        <br />
        <p className="text-center">
          From your account dashboard you can manage all the Students / Employees / Courses
        </p>
        <div className="text-center">
          <a class="btn btn-primary m-2" href="/">
            Home
          </a>
          <a class="btn btn-primary m-2" href="/create-user">
            Add User
          </a>

          <a class="btn btn-primary m-2" href="/update-user-list">
            Update User
          </a>

          <a class="btn btn-primary m-2" href="/delete-user">
            Delete User
          </a>

          <a class="btn btn-primary m-2" href="/view-users">
            View All user
          </a>
        </div>
        <div className="text-center">
          <a class="btn btn-primary m-2" href="/add-courses">
            Add Course
          </a>

          <a class="btn btn-primary m-2" href="/update-course-list">
            Update Course
          </a>

          <a class="btn btn-primary m-2" href="/delete-course">
            Delete Course
          </a>

          <a class="btn btn-primary m-2" href="/view-courses">
            View All Courses
          </a>
        </div>
        <div className="text-center">
          <a class="btn btn-primary m-2" href="/student-register">
          Register Student
          </a>

          <a class="btn btn-primary m-2" href="/update-student">
            Update Student
          </a>

          <a class="btn btn-primary m-2" href="/delete-student">
            Delete Student
          </a>

          <a class="btn btn-primary m-2" href="/students">
            View All Students
          </a>
        </div>

        <div className="text-center">
          <a class="btn btn-primary m-2" href="/payments">
            View All Payments
          </a>
        </div>
        <br />
        <br />
        <center>
          <button type="button" class="btn btn-danger" onClick={loginout}>
            Logout
          </button>
        </center>
      </div>
    </div>
  );
}

export default MyAccount;
