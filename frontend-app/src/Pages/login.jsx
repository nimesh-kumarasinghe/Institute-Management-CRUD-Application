import React, { Component } from "react";
import LoginService from "../services/LoginService";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      status: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    LoginService.validate(this.state.email, this.state.password).then((res) => {
      this.setState({ status: res.data });
      console.log(this.state.status);
    });
    console.log(this.state.status);
    if (this.state.status == "") {
    } else {
      if (this.state.status == -1) {
        console.log(alert("Invalid Username or password"));
      } else {
        console.log("Successfully Logged In");
        LoginService.redirect(this.state.status);
      }
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={this.submitHandler}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">LOGIN</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-2"
                placeholder="Enter email"
                id="email"
                name="email"
                value={email}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                id="password"
                name="password"
                value={password}
                onChange={this.changeHandler}
              />
            </div>
            <br />
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" id="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
