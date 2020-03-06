import React, { Component } from 'react'
import { Consumer } from '../../contexts/context';
import Contact from './contact'

class Contacts extends Component {
    render() {
        return(
                <Consumer>
                    {
                        value=>{
                            return(
                                <React.Fragment>
                                    <h1 className="text-danger mb-2 display-4">contacts list</h1>
                                    {
                                        value.contacts.map(contact=>(
                                            <Contact 
                                            key={contact.id}
                                            contact={contact}>
                                            </Contact>
                                            ))
                                    }
                                </React.Fragment>
                            )
                        }
                    }
                </Consumer>
            
        )
    }
}
export default Contacts;
