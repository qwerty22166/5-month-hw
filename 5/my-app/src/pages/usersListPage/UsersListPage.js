import React from 'react';
import {Container} from "react-bootstrap";
import Users from "../../components/users/Users";

function UsersListPage() {

    const fetch = () => {

        return async function fetch () {
            const res = fetch('https://jsonplaceholder.typicode.com/users');
            const data = res.json()

        }
    }

    return (
        <Container>
            <h1 className="my-4">users list</h1>
            <button onClick={fetch}>get users</button>
            {/*<Users el={fetch.res}/>*/}
        </Container>
    );
}

export default UsersListPage;