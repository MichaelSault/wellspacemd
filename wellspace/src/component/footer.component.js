import React from "react";
import wellSpaceLogo from '../images/wellspaceLogo.png';
import facebookIcon from '../images/socials/facebook_icon.png';
import twitterIcon from '../images/socials/twitter_icon.png';
import instagramIcon from '../images/socials/instagram_icon.png';

export default class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src={wellSpaceLogo} height="50px" alt="Wellspace logo"/>
                    </a>
                    <span className="text-muted">© 2021 Wellspace MD</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a href="https://twitter.com/WellspaceMD" target="_blank" rel="noreferrer"><img src={twitterIcon} width="30px" alt="twitter"/> </a></li>
                        <li className="ms-3"><a href="https://www.instagram.com/wellspacemd" target="_blank" rel="noreferrer"><img src={instagramIcon} width="30px" alt="instagram"/></a></li>
                        <li className="ms-3"><a href="https://www.facebook.com/wellspacemd/" target="_blank" rel="noreferrer"><img src={facebookIcon} width="30px" alt="facebook"/></a></li>
                    </ul>
                </footer>
            </div>
        )
    }
}