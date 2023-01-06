import React from 'react';
import {Table} from "react-bootstrap";

function Users(el) {
    return (
        <div>
            <Table striped>
            <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <th></th>
            </tr>
            </tbody>
            </Table>

        </div>
    );
}

export default Users;