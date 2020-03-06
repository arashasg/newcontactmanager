import React, { Component } from 'react'

export default class AddContactRef extends Component {
    constructor(props){
        super(props);

        this.NameInput=React.createRef();
        this.MailInput=React.createRef();
        this.PhoneInput=React.createRef();
    }
    submitClicked=(e)=>{
        e.preventDefault();

        const contact={
            name:this.NameInput.current.value,
            mail:this.MailInput.current.value,
            phone:this.PhoneInput.current.value,
        }

        console.log(contact);
    }
    static defaultProps={
        name:"farbod",
        mail:"farbod@gmail.com",
        phone:"44254309"
    }
    render() {
        const {name,mail,phone}=this.props;
        return (
            <div className="card mb-3">
            <div className="card-header">add contact:</div>
            <div className="card-body">
            <form className="form" onSubmit={this.submitClicked}>
                <div className="form-group">
                    <label htmlFor="name">name:</label>
                    <input type="text" defaultValue={name}  name="name" ref={this.NameInput} className="form-control form-control-md" placeholder="your name..." />
                </div>
                <div className="form-group">
                    <label htmlFor="mail">email:</label>
                    <input type="email" name="mail"  defaultValue={mail} ref={this.MailInput} className="form-control form-control-md" placeholder="your mail..." />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">number:</label>
                    <input type="number" name="phone" defaultValue={phone} ref={this.PhoneInput}  className="form-control form-control-md" placeholder="your phone..." />
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="add contact" />
            </form>
            </div>
            </div>
        )
    }
}
