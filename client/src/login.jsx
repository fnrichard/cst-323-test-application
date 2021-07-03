import React, { PureComponent } from 'react';

export default class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
            loginError: false,
        };
    }

    onUpdateField(name, value) {
        const newState = {}
        newState[name] = value;
        this.setState(newState);
    }

    onClickButton() {
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        };

        fetch(`http://${window.location.host}/api/login`, request)
            .then((response) => {
                if (response.status !== 404) {
                    this.setState({ loggedIn: true, loginError: false });
                } else {
                    this.setState({ loginError: true, loggedIn: false });
                }
            })
            .catch(error => this.setState({ error }));
    }

    render() {
        const {
            username,
            password,
            loggedIn,
            loginError,
        } = this.state;

        return (
            <>
                {loginError && (
                    <div className="error">
                        Username and password was not correct
                    </div>
                )}
                {loggedIn && (
                    <div>
                        Welcome!
                    </div>
                )}
                {!loggedIn && (
                    <div class="login">
                        <h4>Please login</h4>
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
                            <button type="button" className="btn btn-primary" onClick={() => this.onClickButton() }>Submit</button>
                        </form>
                    </div>
                )}
            </>
        )
    }
};