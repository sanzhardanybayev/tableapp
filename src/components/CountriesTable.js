import React from 'react';
import axios from 'axios';

class CountriesTable extends React.Component{
    constructor(){
        super();
        this.state = {
            countries: []
        };
    }
    componentWillMount(){

        let self = this;
        axios.get('http://demo9946234.mockable.io/countries')
            .then(function (response) {
                self.setState({countries: response.data.countries});
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
                    <th scope={"col"}>Название</th>
                    <th scope={"col"}>ID</th>
                </tr>
                </thead>
                <tbody>
                {this.state.countries.map((country,i) => {
                   return <tr key={i}>
                       <td>{country.name}</td>
                       <td>{country.id}</td>
                   </tr>
                })}
                </tbody>
            </table>
        )
    }
}

export default CountriesTable;
