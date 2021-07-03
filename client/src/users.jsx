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
            <table className="table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {!users && !error && (
                        <tr>
                            <td colSpan={5}>Loading...</td>
                        </tr>
                    )}
                    {error && (
                        <tr>
                            <td colSpan={5}>There was an error loading the users</td>
                        </tr>
                    )}
                    {users?.length === 0 && (
                        <tr>
                            <td colSpan={5}>There are no users to list</td>
                        </tr>
                    )}
                    {users?.length > 0 && users.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>
                                <a href={`http://${window.location.host}/users/${user.id}`}>Edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}