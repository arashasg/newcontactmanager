import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../contexts/context';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
    state={
        showContactInfo:false
    }
    onShowClicked(address,e){
        this.setState({showContactInfo:!this.state.showContactInfo})
    }
    deleteHandler=(action,dispatch)=>{
        Axios.delete(`http://jsonplaceholder.typicode.com/users/${action.payload}`).then(res=>
        dispatch(action)
        )
    };
    render() {
        const iconShape=this.state.showContactInfo ?"fa fa-angle-down":"fa fa-angle-right";
        const {showContactInfo}=this.state;
        const {contact}=this.props;
        return (
            
            <div className="card card-body mb-3">
            <h4>
                {contact.name} 
                <i style={{cursor:"pointer"}} onClick={this.onShowClicked.bind(this,contact.mail)} className={iconShape} />
                <Consumer>{value=>{return(<React.Fragment>
                <i  onClick={ this.deleteHandler.bind(this,{type:"Delete_Contact",payload:contact.id},value.dispatch)} className="fa fa-trash"style={{float:"right", color:"red",cursor:"pointer"}}></i>
                <Link to={`contact/edit/${contact.id}`}><i className="fa fa-pencil" style={{float:"right",marginRight:"2rem",color:"orange"}}></i></Link>

                </React.Fragment>)
            }}
                </Consumer>
            </h4>
            {showContactInfo?(
                <ul className="list-group">
                <li className="list-group-item">phone:{contact.phone}</li>
                <li className="list-group-item">mail:{contact.email}</li>
                </ul>
            ):null}
            </div>
        )
    }
}
Contact.protoType={
    contact:PropTypes.object.isRequired,
    deleteFromStates:PropTypes.func.isRequired
}
Contact.defaultProps={
    contact:{
        name:"john Doe",
        phone:"44254309",
        mail:"arashasgari1378@gamil.com"
    },key:0
}
export default Contact;
