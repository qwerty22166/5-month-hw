import React from 'react';
import {Container} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {userQ} from "../../redux/actions";

function UsersListPage() {
const dispatch = useDispatch()

    const user =()=> {
    dispatch(userQ())
    }

    return (
        <Container>
            <h1 className="my-4">users list</h1>
            {user}
        </Container>
    );
}

export default UsersListPage;