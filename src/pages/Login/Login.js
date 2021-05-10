import React from "react";
import { Link } from "react-router-dom";
import { NavIcon } from "../../components/Navbar/Navbar.elements";
import { Container } from "../../globalStyles";
import "./Login.css";
class Login extends React.Component {
  state = {
    email: "",
    pwd: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.isLogin(true);
  };
  render() {
    return (
      <Container>
        <div className="div-login">
          <div className="div-login-logo">
            <NavIcon />
            <h3>CASE</h3>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="email..."
                required
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="pwd"
                placeholder="password..."
                required
                onChange={this.handleChange}
              />
              <button onSubmit={this.handleSubmit}>
                <Link to="/home"></Link>
                Log In
              </button>
              <p className="or">OR</p>
              <Link to="/signup">
                <h2>Register</h2>
              </Link>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default Login;
