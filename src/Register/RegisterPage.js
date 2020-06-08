import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class RegisterPage extends React.Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
    submitted: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstName && user.lastName && user.username && user.password) {
      this.props.register(user);
    }
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className="form-group has-error">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={this.handleChange}
            />

            <div className="help-block">First Name is required</div>
          </div>
          <div className="form-group has-error">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" name="lastName" />
            <div className="help-block">Last Name is required</div>
          </div>
          <div className="form-group has-error">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" />

            <div className="help-block">Username is required</div>
          </div>
          <div className="form-group has-error">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" />

            <div className="help-block">Password is required</div>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>

            <Link to="/login" className="btn btn-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default RegisterPage;
