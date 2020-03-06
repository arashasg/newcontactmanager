import React from 'react';
import ReactDOM from 'react-dom';
import Provider from '../src/contexts/context'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

//components
import Contacts from './components/contacts/contacts';
import AddContact from './components/contacts/addContact';
import Header from './components/layouts/header';
import About from './components/pages/About'
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import EditContact from './components/contacts/editContact';

const App= ()=>{
    return (
        <Provider>
            <Router>
            <div>
                <Header branding = "Contact Manager"/>
                <div className="container">
                <Switch>
                    <Route exact path="/" component={Contacts}/>
                    <Route exact path="/contact/add" component={AddContact}/>
                    <Route exact path="/contact/edit/:id" component={EditContact}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/test" component={Test}/>
                    <Route  component={NotFound}/>

                </Switch>
                </div>
            </div>
            </Router>   
        </Provider>
        );
}

ReactDOM.render(<App />, document.getElementById('root'));