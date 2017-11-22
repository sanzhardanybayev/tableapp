import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {choiceMade} from "../actions/app";
import {userAdded} from "../actions/app";
import Table from './Table';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
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

        let user = {
            id: 22,
            name: name,
            surname: surname,
            patronymic: patronymic,
            username: login
        };
        this.setState({open: false});
        this.props.userAdded(user);
    };

    render(){
        let component = null;
        if(this.props.choice.value === "employee"){
            component = <Table/>;
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
                            (component) ?  (
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
    return bindActionCreators({choiceMade: choiceMade, userAdded: userAdded}, dispatch);
}

export default connect(mapStateProps, matchDispatchToProps)(App);
