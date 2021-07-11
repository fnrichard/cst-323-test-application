import React, { PureComponent } from 'react';

export default class Users extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            users: false,
            error: false,
        };

        this.getUsers();
    }

    getUsers() {
        const request = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(`http://${window.location.host}/api/users`, request)
            .then(response => response.json())
            .then(users => this.setState({ users }))
            .catch(error => this.setState({ error }));
    }

    render() {
        const {
            users,
            error,
        } = this.state;

        return (
            <table className="table-secondary" width="50%">
                <thead>
                    <tr>
                        <th className="center table-dark">ID</th>
                        <th className="center table-dark">Username</th>
                        <th className="center table-dark">First Name</th>
                        <th className="center table-dark">Last Name</th>
                        <th className="center table-dark">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {!users && !error && (
                        <tr>
                            <td className="center" colSpan={5}>Loading...</td>
                        </tr>
                    )}
                    {error && (
                        <tr>
                            <td className="center" colSpan={5}>There was an error loading the users</td>
                        </tr>
                    )}
                    {users?.length === 0 && (
                        <tr>
                            <td className="center" colSpan={5}>There are no users to list</td>
                        </tr>
                    )}
                    {users?.length > 0 && users.map((user, idx) => (
                        <tr>
                            <td className={`center ${idx % 2 === 0 ? 'table-light' : ''}`}>{user.id}</td>
                            <td className={`center ${idx % 2 === 0 ? 'table-light' : ''}`}>{user.username}</td>
                            <td className={`center ${idx % 2 === 0 ? 'table-light' : ''}`}>{user.firstName}</td>
                            <td className={`center ${idx % 2 === 0 ? 'table-light' : ''}`}>{user.lastName}</td>
                            <td className={`center ${idx % 2 === 0 ? 'table-light' : ''}`}>
                                <a href={`http://${window.location.host}/user/${user.id}`}>Edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}