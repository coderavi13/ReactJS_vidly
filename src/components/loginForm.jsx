import React, { Component } from "react";
import Input from "../common/input";

class LoginForm extends Component {
  state = {
    account: {
      password: "",
      username: ""
    },
    errors: {}
  };

  validate = () => {
    // return { username: "Username is required" };
    const errors = {};
    if (this.state.account.username.trim() === "")
      errors.username = "Username is required";
    if (this.state.account.password.trim() === "")
      errors.password = "Password is required";
    return Object.keys(errors).length == 0 ? null : errors;
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("Submitted");
  };
  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            lable="Username"
            onChange={this.handleChange}
            value={account.username}
            errors={errors.username}
          />
          <Input
            name="password"
            lable="Password"
            onChange={this.handleChange}
            value={account.password}
            errors={errors.username}
          />

          <button className="btn btn-primary">Login </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
