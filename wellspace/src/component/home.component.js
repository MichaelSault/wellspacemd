import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from "react";
import wellSpaceVision from '../images/wellspaceVision_home.png';
import happyDoctor from '../images/Happy-Doctor-1024x839.png';
import happyFamily from '../images/Happy-Family-1024x838.png';
import wellSpaceLocation from '../images/New-Location.png';
import ContactBlock from './contactBlock.component';
import CovidAlert from './covidAlert.component';
import InfluenzaAlert from './influenzaAlert.component';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            displayVideo: false
        };
    }

    render(){ 
        return (
            <div className="home">
                <InfluenzaAlert />
                <CovidAlert />
                <img src={wellSpaceVision} width="100%" alt="Wellspace Vision"/>
                <br/><br/>
                
                <br/>


                <Container>
                    <Row>
                        <h1><b>A Team That Always Goes Above & Beyond</b></h1>
                        <Col>
                            <h1>Our Vision</h1>
                            <h3>is to create an environment, or "wellspace,"that fosters wellness with a kind, respectful, expert, comprehensive health care approach that is responsive to meet our patient's medical, social and emotional needs.</h3>
                        </Col>
                        <Col>
                            <img src={happyDoctor} width="100%" alt="Happy Doctor"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={happyFamily} width="100%" alt="Happy Family"/>
                            </Col>
                        <Col>
                            <h1>This "Wellspace,"</h1>
                            <h3>we hope, will extend beyond our physical doors to encompass the mind, body & spirit of our patients and their families.</h3>
                        </Col>
                    </Row>
                </Container>

                <img src={wellSpaceLocation} width="100%" alt="Wellspace Location"/>
                
                <br /><br />

                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                        
                        <button className="video" onClick={() => this.setState({displayVideo: !this.state.displayVideo})}>Watch Video ▷</button>

                        {this.state.displayVideo ? <iframe
                            width="1080px"
                            height='720px'
                            src={"https://youtube.com/embed/GXd1gLwTEPY"}
                            title="Youtube Player"
                            frameborder="0"
                            allowFullScreen
                        /> : null}

                        </Col>
                        <Col></Col>
                        <br /><br /><br />
                    </Row>
                    <Row>
                        <Col>
                        <h1>Hours</h1>
                        <Row>
                            <Col><h3>Sunday</h3></Col>
                            <Col><h3>Closed</h3></Col>
                        </Row>
                        <Row>
                            <Col><h3>Monday</h3></Col>
                            <Col><h3>9:30am-5:00pm</h3></Col>
                        </Row>
                        <Row>
                            <Col><h3>Tuesday</h3></Col>
                            <Col><h3>9:30am-5:00pm</h3></Col>
                        </Row>
                        <Row>
                            <Col><h3>Wednesday</h3></Col>
                            <Col><h3>9:30am-5:00pm</h3></Col>
                        </Row>
                        <Row>
                            <Col><h3>Thursday</h3></Col>
                            <Col><h3>9:30am-5:00pm</h3></Col>
                        </Row>
                        <Row>
                            <Col><h3>Friday</h3></Col>
                            <Col><h3>9:30am-5:00pm</h3></Col>
                        </Row>
                        <Row>
                            <Col><h3>Saturday</h3></Col>
                            <Col><h3>9:30am-12:00pm</h3></Col>
                        </Row>
                            
                        </Col>
                        <Col>
                            <ContactBlock />
                        </Col>
                    </Row>
                </Container>

            </div>
            
        )
    }
    
}