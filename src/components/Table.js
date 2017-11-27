import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {bindActionCreators} from 'redux';
import {usersLoaded} from "../actions/app";

class Table extends React.Component{

    componentWillMount(){
        let component = this;
        axios.get('https://localhost/?type=users')
            .then(function (response) {
                component.props.usersLoaded(response.data.users);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    render(){
        return(
            <table className={"table table-hover table-dark"}>
                <thead>
                    <tr>
                        <th scope={"col"}>Фамилия</th>
                        <th scope={"col"}>Имя</th>
                        <th scope={"col"}>Отчество</th>
                        <th scope={"col"}>Username</th>
                        <th scope={"col"}>Email</th>
                        <th scope={"col"}>ИИН</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.patronymic}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.id_number}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>            
        )
    }
}
function mapStateProps(state){
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({usersLoaded: usersLoaded}, dispatch);
}


export default connect(mapStateProps, matchDispatchToProps)(Table);
