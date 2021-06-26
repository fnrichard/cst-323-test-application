import React, { PureComponent } from 'react';

export default class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
        } = this.state;

        return (
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
        )
    }
};