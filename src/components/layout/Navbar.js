import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/button'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm pb-3">
                    <div className="container">
                        <Link className="navbar-brand mt-3 housen" to="/">housen</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="mobile-nav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                
                                </li>
                            </ul>

                            <ul className="navbar-nav mr-auto mt-3 font">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark mr-5" to="/register">Buy a house</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark mr-5" to="/register">Rent a house</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/login">Mortage</Link>
                                </li>
                            </ul>
                            {/* <Button variant="signup pr-5 pl-5 pb-1 pt-1" to="/register">Sign Up</Button> */}
                            <Link className="signup btn btn-lg pr-5 pl-5 mt-2" to="/register">Sign Up</Link>
                            {/* <Link className="btn btn-lg btn-info pr-5 pl-5 mt-2 ml-3" to="/login">Login</Link> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
