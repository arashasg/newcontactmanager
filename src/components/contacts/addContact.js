import React, { Component } from 'react'
import { Consumer } from '../../contexts/context';
import TextInput from '../layouts/TextInput';
import Axios from 'axios';

export default class AddContact extends Component {
    state={
        name:"",
        email:"",
        phone:"",
        errors:{
        }
    }
    submitClicked=async (value,e)=>{
        e.preventDefault();
        if(this.state.name===''){
            this.setState({errors:{name:"name is required!"}})
            return;
        }
        if(this.state.email===''){
            this.setState({errors:{email:"email is required!"}})
            return;
        }
        if(this.state.phone===''){
            this.setState({errors:{phone:"phone is required!"}})
            return;
        }
        const contact={name:this.state.name,email:this.state.email,phone:this.state.phone}
        let res=await Axios.post("http://jsonplaceholder.typicode.com/users",contact)
        let action={type:"Add_Contact",payload:res.data};
        value.dispatch(action);
        this.setState({
            name:"",
            email:"",
            phone:"",
            errors:{}
        })
        this.props.history.push('/');
    }
    change=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    render() {
        return (
            <div className="card mb-3">
            <div className="card-header">add contact:</div>
            <div className="card-body">
            <Consumer>{(value)=>{return(
            <form className="form" onSubmit={this.submitClicked.bind(this,value)}>
                <TextInput
                    name="name"
                    onChange={this.change.bind(this)}
                    value={this.state.name}
                    label="Name:"
                    placeholder="your name..."
                    error={this.state.errors.name}
                />
                <TextInput
                    name="email"
                    onChange={this.change.bind(this)}
                    value={this.state.email}
                    label="Email:"
                    type="email"
                    placeholder="your email..."
                    error={this.state.errors.email}
                />
                <TextInput
                    name="phone"
                    onChange={this.change.bind(this)}
                    value={this.state.phone}
                    label="Phone:"
                    placeholder="your phone number..."
                    error={this.state.errors.phone}
                    
                /> 
                
                <input type="submit" className="btn btn-danger btn-block" value="add contact" />
            </form>
            )
            }}
            </Consumer>
            </div>
            </div>
        )
    }
}
