import React, { Component } from 'react'
// import { Button } from "react-bootstrap";
import logo from '../../img/search.png';
import next from '../../img/next.png';
import filter from '../../img/filter.png';

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="landing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 text-center ideal">
                                <h1 className="display-5">Find your ideal home</h1>
                                <p className="lead pb-3">Search from more than 19 million of inspected apartments, houses, cottages, villas,manors and mansions</p>
                            </div>
                            <hr />
                            <div className="col-md-2"></div>
                        </div>
                            <div className="row pb-4 pt-3">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div class="card mb-3 calabasas">
                                        <div class="card-body pt-3 pb-3 search"><img className="mr-4" src={logo} width="20px" height="20px" alt="logo" />
                                            search for address
                                            <span class="buttonIn float-right"><button id="clear">Search</button></span>
                                        </div>
                                        <div>
                                    </div>
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
                                <div class="card-body pt-4 pb-4 CA">
                                    Calabasas, CA 
                                    <span className="float-right apartment">
                                    <img className="mr-2" src={filter} width="20px" height="20px" alt="logo" />
                                        <span className="pt-5"> $1.5k+/ 2 Beds/ 1 Appt... 3 more   </span>
                                    <img src={next} width="10px" height="10px" alt="logo" /></span>
                                </div>
                            </div>
                            <div class="card mb-3 calabasas">
                                <div class="card-body pt-4 pb-4 CA">
                                    Long Beach, CA
                                    <span className="float-right apartment"> 
                                    <img className="mr-2" src={filter} width="20px" height="20px" alt="logo" />
                                    <span className="pt-5"> $2.0k+/ 1 Bed/ 1 Appt... 3 more     </span>
                                    <img src={next} width="10px" height="10px" alt="logo" /></span>
                                </div>
                            </div>
                            <div class="card mb-3 calabasas">
                                <div class="card-body pt-4 pb-4 CA">
                                    Fullerton, CA
                                    <span className="float-right apartment"> 
                                    <img className="mr-2" src={filter} width="20px" height="20px" alt="logo" />
                                    <span className="pt-5"> $2.5k+/ 3 Beds/ 1 Appt... 3 more    </span>
                                    <img src={next} width="10px" height="10px" alt="logo" /></span>
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
