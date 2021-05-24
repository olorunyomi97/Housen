import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm pb-5">
                    <div className="container mt-0">
                        <Link className="navbar-brand housen" to="/">housen</Link>
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
                                    <Link className="nav-link text-dark" to="/login">Mortgage</Link>
                                </li>
                            </ul>
                            <Link className="signup btn btn-lg pr-5 pl-5 mt-2" to="/register">sign up</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
