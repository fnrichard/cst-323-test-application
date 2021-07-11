import React, { PureComponent } from 'react';

export default class User extends PureComponent {
    constructor(props) {
        super(props);
        this.getUser();

        console.log('props => ', props);

        this.state = {
            user: false,
            error: false,
        };
    }

    getUser() {
        const request = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { id } = this.props;

        fetch(`${window.location.origin}/api/users/${id}`, request)
            .then(response => response.json())
            .then(user => this.setState({ user }))
            .catch(error => this.setState({ error }));
    }

    onUpdateField(name, value) {
        const newState = {}
        newState[name] = value;
        this.setState(newState);
    }

    onClickButton() {
        const request = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        };

        const { user } = this.state;

        fetch(`${window.location.origin}/api/users/${user.id}`, request)
            .then(response => response.json())
            .then(data => window.location = '/users')
            .catch(error => this.setState({ error }));
    }

    render() {
        const { user, error } = this.state;
        const {
            username = user.username,
            password = user.password,
            firstName = user.firstName,
            lastName = user.lastName,
        } = this.state;
        return (
            <div className="User">
                {!user && !error && (
                    <span>Loading...</span>
                )}
                {error && (
                    <span className="error">Oops there was an error</span>
                )}
                {user && (
                    <>
                        <h4>Update user information</h4>
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Enter desired username"
                                    value={username}
                                    readOnly
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
                    </>
                )}
            </div>
        );
    }
}