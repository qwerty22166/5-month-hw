import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/actions/actions";
import User from "../../components/user/User";

function UsersPage() {
    const dispatch = useDispatch()

    const {users} = useSelector(state => state.usersReducer)

    const {user} = useSelector(state => state.usersReducer)

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    return (
        <div>
            <ul>
                <li>name: {user.name}</li>
                <li>username: {user.username}</li>
                <li>address:{user.address.city}</li>
                <li>email: {user.email}</li>
                <li>phone: {user.phone}</li>
            </ul>
            <button onClick={getUsers}>get users</button>
            {users.map(user => <User userInfo={user}/>)}
        </div>
    );
}
export default UsersPage;


