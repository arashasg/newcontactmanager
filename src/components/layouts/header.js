import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Header = (props)=>{
    const {branding}=props;
    return(
        <nav className="navbar navbar-expand-sm navabar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand btn-danger">{branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link  to="/" className="nav-link btn-danger fa fa-home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link  to="/contact/add" className="nav-link btn-danger fa fa-plus">add contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link  to="/about" className="nav-link btn-danger fa fa-question">about us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
Header.propTypes={
    branding:PropTypes.string.isRequired
}
export default Header;