import React from "react";
import axios from "axios";
import { browserHistory } from 'react-router'

class Signup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: "True"
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;

    axios
      .post("/api/signup", {
        email: email,
        password: password
      })
      .then((response) => {
        var error = response.data.error
        if (error === "") {
          alert("Sign Up successfully!")
          browserHistory.push("/")
        } else {
          this.setState({ error: error })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form id="signup" name="signup" onSubmit={this.handleSubmit.bind(this)}>
          <div>
            {this.state.error && <p>{this.state.error}</p>}
            <input ref="email" type="email" id="email" placeholder="Email" />
          </div>
          <div>
            <input
              ref="password"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
