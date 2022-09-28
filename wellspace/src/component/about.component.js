import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from "react";
import DrSahota from '../images/DrVickramSahota.png';

export default class About extends React.Component {
    render(){
        return (
            <div className="home">
                <Container>
                    <Row>
                        <h1>Our Vision</h1>
                        <h3>is to create an environment, or "wellspace,"that fosters wellness with a kind, respectful, expert, comprehensive health care approach 
                            that is responsive to meet our patient's medical, social and emotional needs.
                        </h3>
                    </Row>
                    <br />
                    <Row>
                        <Col xs sm="4">
                            <img src={DrSahota} float='right' width="100%" alt="Dr. Vickram Sahota"/>
                        </Col>
                        <Col>
                            
                            <br />
                            <h2>Dr. Vickram Sahota</h2>
                            <p>I am an attending physician in the Department of Family Practice at Oakville Trafalgar Memorial Hospital (OTMH) .  I wear many ‘hats’ 
                                including hospitalist physician at OTMH, emergency medicine physician at Milton District Hospital and Assistant Clinical Professor (Adjunct) 
                                of Medicine at McMaster University.  I practice outpatient family medicine at Wellspace MD located on the campus of OTMH where I care for 
                                patients and also educate learners in healthcare.  I studied at McMaster University, the University of Western Ontario and the University 
                                of British Columbia.  A native Ontarian I live and play in Oakville with my delightful family.  When not at my shop I enjoy the lighter 
                                side of life, outdoor adventure, being curious and amazed by the world and universe around us and generally trying to stay of out trouble!
                            </p>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <h1>Mission</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </Col>
                        <Col>
                            <h1>Vision</h1>
                            <p>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Col>
                        <Col>
                            <h1>Values</h1>
                            
                            <ul>
                                <li>Loren ipsum dolor sit amet</li>
                                <li>Luctus nec ullam corper</li>
                                <li>Pulvinar dapibus leo</li>
                            </ul>
                            
                        </Col>
                    </Row> */}
                </Container>
            </div>
        )
    }
}