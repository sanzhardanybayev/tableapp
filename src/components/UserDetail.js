import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){
        return(
          <div>
              <img src={this.props.user.thumbnail} alt=""/>
              <h2>{this.props.user.first} {this.props.user.last}</h2>
          </div>
        );
    }
}


function mapStateToProps(state){
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);