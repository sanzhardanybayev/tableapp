import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';

import {choiceMade, userAdded, usersLoaded} from "../actions/app";

import Table from './Table';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import CountriesTable from './CountriesTable';
import CitiesTable from './CitiesTable';
import TasksContainer from './TasksContainer';


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            value: 1,
            open: false
        };

        this.styles ={
            width: "20%",
            margin: "0em 1em"
        };

        this.handleChange = this.handleChange.bind(this);
        this.saveUser= this.saveUser.bind(this);
    }

    handleChange(event, index, value) {
        this.props.choiceMade({value:value});
    }

    handleClose = () => {
        this.setState({open: false});
    };

    handleClick = () => {
        this.setState({open: true});
    };

    saveUser = () => {
        let surname = document.querySelector("#surname").value;
        let name = document.querySelector("#name").value;
        let patronymic = document.querySelector("#patronymic").value;
        let login = document.querySelector("#login").value;
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        let id_number = document.querySelector("#id_number").value;

        let user = {
            name: name,
            surname: surname,
            patronymic: patronymic,
            email: email,
            password: password,
            username: login,
            id_number: id_number
        };


        let params = new URLSearchParams();
        params.append('name', user.name);
        params.append('surname', user.surname);
        params.append('patronymic', user.patronymic);
        params.append('email', user.email);
        params.append('password', user.password);
        params.append('username', user.username);
        params.append('id_number', user.id_number);
        params.append('type', 'saveUser');

        let component = this;
        axios.post('https://localhost:443', params).then(function(response){
            component.props.userAdded({...user, id: response.data.user_id});
            component.setState({open: false});
        })
        .catch(function (error) {
            console.log(error);
            console.log('error');
        });


    };

    render(){
        let component = null;

        switch(this.props.choice.value){
            case "DashBoard1":
                component = <TasksContainer/>;
                break;
            case "employee":
                component = <Table/>;
                break;
            case "countries":
                component = <CountriesTable/>;
                break;
            case "cities":
                component = <CitiesTable/>;
                break;
        }
        return(
            <section className={"container "}>
                <h1 className={"text-center"}>Cистема управления</h1>
                <div className="row">
                    <div className="col-md-10 offset-md-2">
                        <MuiThemeProvider>
                            <SelectField
                                floatingLabelText="Dashboard"
                                value={"DashBoard1"}
                                style={this.styles}
                                onChange={this.handleChange}
                            >
                                <MenuItem value={"DashBoard1"} primaryText="Dashboard 1"/>
                                <MenuItem value={"Dashboard2"} primaryText="Dashboard 2" />
                            </SelectField>
                        </MuiThemeProvider>

                        <MuiThemeProvider>
                            <SelectField
                                floatingLabelText="Справочник"
                                value={"employee"}
                                style={this.styles}
                                onChange={this.handleChange} >
                                <MenuItem value={"employee"} primaryText="Сотрудники"/>
                                <MenuItem value={"countries"} primaryText="Страны" />
                                <MenuItem value={"cities"} primaryText="Города" />
                            </SelectField>
                        </MuiThemeProvider>

                        <MuiThemeProvider>
                            <SelectField
                                floatingLabelText="Документы"
                                value={"Docs"}
                                style={this.styles}>
                                <MenuItem value={"Docs"} primaryText="Мои документы"/>
                                <MenuItem/>
                            </SelectField>
                        </MuiThemeProvider>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-9">
                        {component}
                    </div>
                    <div className="col-md-3">
                        {   // Отображаем кнопку только тогда, когда выбрана таблица
                            (this.props.choice.value === "employee") ?  (
                                <div>
                                    <MuiThemeProvider>
                                        <RaisedButton label="Добавить сотрудника" primary={true} onClick={this.handleClick}/>
                                    </MuiThemeProvider>
                                    <MuiThemeProvider>
                                            <Dialog
                                                title="Добавление пользователя"
                                                modal={false}
                                                style={{textAlign: "center"}}
                                                open={this.state.open}
                                                onRequestClose={this.handleClose}
                                            >
                                                <div className="row">
                                                    <div className="col-md-5 offset-md-3">

                                                            <div className="col-xs-12">
                                                                <MuiThemeProvider>
                                                                    <TextField id="surname" className={"col"} hintText="Фамилия"/>
                                                                </MuiThemeProvider>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <MuiThemeProvider>
                                                                    <TextField id="name" className={"col"} hintText="Имя"/>
                                                                </MuiThemeProvider>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <MuiThemeProvider>
                                                                    <TextField id="patronymic" className={"col"} hintText="Отчество"/>
                                                                </MuiThemeProvider>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <MuiThemeProvider>
                                                                    <TextField id="login" className={"col"} hintText="login"/>
                                                                </MuiThemeProvider>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <MuiThemeProvider>
                                                                    <TextField id="email" className={"col"} hintText="email"/>
                                                                </MuiThemeProvider>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <MuiThemeProvider>
                                                                    <TextField id="password" className={"col"} hintText="password"/>
                                                                </MuiThemeProvider>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <MuiThemeProvider>
                                                                    <TextField id="id_number" className={"col"} hintText="ИИН"/>
                                                                </MuiThemeProvider>
                                                            </div>




                                                            <div className="col-md-5 offset-3">
                                                                <MuiThemeProvider>
                                                                    <RaisedButton style={{marginTop: "2em"}} onClick={this.saveUser} label="Добавить"/>
                                                                </MuiThemeProvider>
                                                            </div>
                                                    </div>

                                                </div>
                                            </Dialog>
                                        </MuiThemeProvider>
                                </div>

                            ) : null}

                    </div>
                </div>
            </section>

        );
    }
}

function mapStateProps(state){
    return {
        choice: state.choiceMade
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({choiceMade: choiceMade, usersLoaded: usersLoaded, userAdded: userAdded}, dispatch);
}

export default connect(mapStateProps, matchDispatchToProps)(App);
