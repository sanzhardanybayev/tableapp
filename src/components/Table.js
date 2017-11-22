import React from 'react';
import {connect} from 'react-redux';

class Table extends React.Component{
    render(){
        return(
            <table className={"table table-hover table-dark"}>
                <thead>
                    <tr>
                        <th scope={"col"}>Фамилия</th>
                        <th scope={"col"}>Имя</th>
                        <th scope={"col"}>Отчество</th>
                        <th scope={"col"}>Username</th>
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

export default connect(mapStateProps)(Table);
