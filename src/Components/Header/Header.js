import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { CityLogo } from '../ui/icons'

class Header extends Component {
    render() {
        return (
            <div className="bg-secondary fixed-top">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <CityLogo link={true} linkTo="/" width="70px" height="70px"/>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/the_team" className="nav-link">The Team</Link>
                                </li>
                                <li className="nav-item" >
                                    <Link to="/the_matches" className="nav-link">Matches</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Header;