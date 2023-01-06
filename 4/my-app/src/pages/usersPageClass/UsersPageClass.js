import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchUsersAction} from "../../redux/actions/actions";
import User from "../../components/user/User";


class UsersPageClass extends Component {
    render() {
        return (
            <div>
                <h1>class component</h1>
                <button onClick={() => this.props.fetchUsersAction()}>get users</button>
                {this.props.users.map(user => <User userInfo={user}/>)}
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchUsersAction
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users
    }
}



export default connect(mapStateToProps, mapDispatchToProps) (UsersPageClass);