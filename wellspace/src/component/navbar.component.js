import React from "react";
import wellSpaceLogo from '../images/wellspaceLogo.png';

export default class Navbar extends React.Component {
    render(){
        return (
            <div className="navbar">
                <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light">
                    <a className="navbar-brand"  href="/">
                        <img src={wellSpaceLogo} height="60" alt="wellspacemd"/>
                    </a>
        
                    <div className="collapse navbar-collapse" id="">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="about">About Us</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="services">Services</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="health">Health Tips</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="news">News</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="therapy">Therapy</a>
                            </li>
                        </ul>
                        <a href="contact">
                            <button className="contactButton"  href="contact">Contact</button>
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
    
}