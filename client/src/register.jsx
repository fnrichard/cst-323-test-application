import React, { PureComponent } from 'react';

export default class Register extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
    };
  }

  onUpdateField(name, value) {
      const newState = {}
      newState[name] = value;
      this.setState(newState);
  }

  onClickButton() {

  }

  render() {
    const {
        username,
        password,
        firstName,
        lastName,
    } = this.state;

    return (
        <div class="registration">
            <h4>Please enter your registration information</h4>
            <form action="#">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter desired username"
                        value={username}
                        onChange={(data) => this.onUpdateField('username', data.target.value)}
                        onBlur={(data) => this.onUpdateField('username', data.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(data) => this.onUpdateField('password', data.target.value)}
                        onBlur={(data) => this.onUpdateField('password', data.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(data) => this.onUpdateField('firstName', data.target.value)}
                        onBlur={(data) => this.onUpdateField('firstName', data.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(data) => this.onUpdateField('lastName', data.target.value)}
                        onBlur={(data) => this.onUpdateField('lastName', data.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => this.onClickButton() }>Submit</button>
            </form>
        </div>
    )
  }
};