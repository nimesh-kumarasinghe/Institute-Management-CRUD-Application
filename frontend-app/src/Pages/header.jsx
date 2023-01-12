import React, { Component } from "react";
import logo from "../Backgrounds/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  logout = () => {
    if (this.props.userlogged == true) {
      document.cookie =
        "access_token" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      window.location = "/login";
    } else {
      window.location = "/login";
    }
  };

  loginPage() {
    window.location = "/login";
  }
  myAccount() {
    window.location = "/my-account";
  }
  loginManage() {
    if (this.props.userlogged == true) {
      return (
        <div>
          <button
            className="btn btn-secondary text-dark btn-light"
            onClick={this.myAccount}
            style={{ margin: "4px"}}
          >
            My Account
          </button>
          <button className="btn btn-danger" onClick={this.logout}>
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <button
          className="btn btn-outline-secondary text-dark btn-light fw-bold"
          onClick={this.loginPage}
        >
          Login
        </button>
      );
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg header_bg fixed-top ">
          <div className="container">
            <div href="#home">
              <img
                alt="logo"
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-center pl-4"
              />
              <label className="md-5 text-light fw-bold text-align-center">
                <h2>ICS CENTRE</h2>
              </label>
            </div>

            <div className="d-grid gap-4 d-md-flex justify-content-md-end ">
              {this.loginManage()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
