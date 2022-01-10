import React, { Component } from "react";
import avatar from "../avatar.svg";
import "./LoginPage.css";
export default class LoginPage extends Component {
  render() {
    return (
      <div className="login-page-bacground">
        <div className="container-login-page">
          <div className="login-zone">
            <h3>Your Logo</h3>
            <h1>Login</h1>
            <form>
              <label>Email</label> <br></br>
              <input placeholder="username@gmail.com"></input>
              <br></br>
              <label>Password</label> <br></br>
              <input placeholder="Password"></input>
            </form>
            <p>Forgot Password</p>
            <button>Sign In</button>
            <p>or continue with</p>
            <div>
              <button>Google</button>
              <button>Github</button>
              <button>Facebook</button>
            </div>
            <p>
              Don't have an account yet?{" "}
              <span>
                <a href="#">Register for free</a>
              </span>
            </p>
          </div>
          <div className="img-zone">
            <img className="avatar-svg" src={avatar} alt="avatar"></img>
          </div>
        </div>
      </div>
    );
  }
}
