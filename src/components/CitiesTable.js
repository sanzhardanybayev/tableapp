import React from 'react';
import axios from 'axios';

class CitiesTable extends React.Component{
    constructor(){
        super();
        this.state = {
            cities: []
        };
    }
    componentWillMount(){

        let self = this;
        axios.get('http://demo9946234.mockable.io/cities')
            .then(function (response) {
                self.setState({cities: response.data.cities});
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
                    <th scope={"col"}>Город</th>
                    <th scope={"col"}>Страна</th>
                </tr>
                </thead>
                <tbody>
                {this.state.cities.map((city,i) => {
                    return <tr key={i}>
                        <td>{city.name}</td>
                        <td>{city.country}</td>
                    </tr>
                })}
                </tbody>
            </table>
        )
    }
}

export default CitiesTable;
