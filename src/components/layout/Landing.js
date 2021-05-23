import React, { Component } from 'react'
import { Button } from "react-bootstrap";
import logo from '../../img/glass.png'

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="landing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 text-center ideal">
                                <h1 className="display-5 mt-5">Find Your Ideal Home</h1>
                                <p className="lead pb-5">Search from more than 19 million of inspected apartments, houses, cottages, villas,manors and mansions</p>
                            </div>
                            <hr />
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row pb-5">
                            <div className="col-md-2"></div>
                            <div class="col-md-8 text-center input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><img src={logo} width="30px" height="30px" alt="logo" /></span>
                                </div>
                                <div>
                                    <div class="buttonIn">
                                        <input type="text" id="enter" placeholder="Search for Address"/>
                                        <button id="clear">Search</button>
                                    </div>
                                    {/* <input type="text" class="form-control p-3 buttonIn" placeholder="Search for Address" aria-describedby="basic-addon1"/>
                                    <button id="clear">clear</button> */}
                                    {/* <div class="input-group-append">
                                        <Button variant="outline-success pr-3 pl-3">Search</Button>                        
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
                <div className="card-section">
                <div className="container pb-5">
                    <div className="row pb-5">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div class="card mb-3 calabasas">
                                <div class="card-body">
                                    Calabasa, CA 
                                    <span className="float-right"> $1.5k+/ 2 Beds/ 1 Apartment </span>
                                </div>
                            </div>
                            <div class="card mb-3 calabasas">
                                <div class="card-body">
                                    Long Beach, CA
                                    <span className="float-right"> $2.0k+/ 1 Bed/ 1 Apartment </span>
                                </div>
                            </div>
                            <div class="card mb-3 calabasas">
                                <div class="card-body">
                                    Fullerton, CA
                                    <span className="float-right"> $2.5k+/ 3 Beds/ 1 Apartment </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
            </div>
            
            
        )
    }
}

export default Landing;
