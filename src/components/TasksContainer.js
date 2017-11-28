import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {bindActionCreators} from 'redux';
import {tasksLoaded} from "../actions/app";

class TasksContainer extends React.Component{

    componentWillMount(){
        let component = this;
        axios.get('http://table.topclass.kz/?type=tasks')
            .then(function (response) {
                component.props.tasksLoaded(response.data.tasks);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    render(){
        return(
            <section className={"row"}>
                <div className={"col-xs-12 col-md-2 card"}>
                    <div className="card-body">
                        <div className="row col-xs-12">
                            <button style={{marginBottom: "1em"}} className={"btn btn-primary"}>All tasks</button>
                        </div>
                        <div className="row col-xs-12">
                            <button className={"btn btn-primary"}>My tasks</button>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-8 offset-md-2 card">
                    <div className="card-body text-center text-capitalize ">
                        <h3>Tasks</h3>
                        <table className={"table table-hover table-dark"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Название</th>
                                <th scope={"col"}>Описание</th>
                                <th scope={"col"}>От кого</th>
                                <th scope={"col"}>Кому</th>
                                <th scope={"col"}>Дата</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.tasks.map((task) => {
                                return (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.description}</td>
                                        <td>{task.username}</td>
                                        <td>{task.username2}</td>
                                        <td>{task.date}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}
function mapStateProps(state){
    return {
        tasks: state.tasks
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({tasksLoaded: tasksLoaded}, dispatch);
}


export default connect(mapStateProps, matchDispatchToProps)(TasksContainer);
