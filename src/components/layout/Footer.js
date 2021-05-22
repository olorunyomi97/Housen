import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <footer className="text-dark pt-5 pr-4">
                <div className="container">
                    Housen &copy; {new Date().getFullYear()}
                    <ul className="row mr-auto font float-right">
                        <li>
                            <Link className="text-dark mr-3" to="/register">About</Link>
                        </li>
                        <li>
                            <Link className="text-dark mr-3" to="/register">FAQ</Link>
                        </li>
                        <li>
                            <Link className="text-dark mr-3" to="/login">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link className="text-dark" to="/login">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
