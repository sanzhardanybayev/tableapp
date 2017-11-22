import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {choiceMade} from "../actions/app";
import Table from './Table';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
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

    render(){
        let component = null;
        if(this.props.choice.value == "employee"){
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
                            <MuiThemeProvider>
                                <RaisedButton label="Добавить сотрудника" primary={true} onClick={this.handleClick}/>
                                <Dialog
                                    title="Dialog With Actions"
                                    modal={false}
                                    open={this.state.open}
                                    onRequestClose={this.handleClose}
                                >
                                    The actions in this window were passed in as an array of React objects.
                                </Dialog>
                            </MuiThemeProvider>
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
    return bindActionCreators({choiceMade: choiceMade}, dispatch);
}

export default connect(mapStateProps, matchDispatchToProps)(App);
