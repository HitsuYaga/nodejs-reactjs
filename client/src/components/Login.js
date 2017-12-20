import React from "react";
import axios from "axios";
import { browserHistory } from 'react-router'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      validEmail: "",
      validPassword: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;

    axios
      .post("/api/login", {
        email: email,
        password: password
      })
      .then((response) => {
        var validEmail = response.data.validEmail
        var validPassword = response.data.validPassword
        if (validEmail === "True" && validPassword === "True") {
          alert("Login successfully!")
          browserHistory.push("/dashboard")
        } else {
          this.setState({ validEmail: validEmail, validPassword: validPassword })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form id="login" name="login" onSubmit={this.handleSubmit.bind(this)}>
          <div>
            {this.state.validEmail && <p>{this.state.validEmail}</p>}
            <input ref="email" type="email" id="email" placeholder="Email" />
          </div>
          <div>
            {this.state.validPassword && <p>{this.state.validPassword}</p>}
            <input
              ref="password"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
