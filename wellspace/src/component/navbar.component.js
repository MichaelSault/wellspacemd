import React from "react";
import wellSpaceLogo from '../images/wellspaceLogo.png';

export default class Navbar extends React.Component {
    render(){
        return (
            <div className="navbar">
                <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand"  href="#home">
                    <img src={wellSpaceLogo} height="60" alt="wellspacemd"/>
                    </a>
        
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
        
                    <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#about">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#health">Health Tips</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#news">News</a>
                        </li>
                    </ul>
                    <button className="contact">CONTACT</button>
                    </div>
                </nav>
            </div>
        )
    }
    
}