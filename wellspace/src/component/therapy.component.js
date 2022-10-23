import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from 'react';

import therapyLogo from './therapyImages/therapyLogo.jpg';

import TherapyCarousal from './therapyCarousal.component';

export default class Therapy extends React.Component {
    render(){
        return (
            <div className="home">
                <Container>
                    <Row>
                        <Col md="auto"><img src={therapyLogo} float='right' width="200" alt="Dr. Vickram Sahota"/></Col>
                        <Col><h1 className='therapyTitle'>Wellspace Therapy</h1></Col>
                        <h3>is to create an environment, or "wellspace,"that fosters wellness with a kind, respectful, expert, comprehensive health care approach 
                            that is responsive to meet our patient's medical, social and emotional needs.
                        </h3>
                    </Row>
                    <br />
                    <Row>
                        <Col md><TherapyCarousal /></Col>
                    </Row>
                    <Row>
                        <Col>
                            <br />
                            <h2>Training and Specializations</h2>
                            <p>
                                Training is an ongoing process, below are some of the trainings I have completed during my career or am currently pursing.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <img src={therapyLogo} width="100%" alt="Happy Doctor"/>
                        </Col>
                        <Col>
                            <h1>Individual Approaches</h1>
                            
                            <ul className='serviceListLeft'>
                                <li>Somatic Experiencing</li>
                                <li>Acceptance and Commitment Therapy</li>
                                <li>Emotionally Focused Individual Therapy</li>
                                <li>Cognitive Behavioural Therapy</li>
                                <li>Narrative Therapy</li>
                                <li>Supportive Parenting for Anxious Childhood Emotions</li>
                                <li>Unified Protocol for Transdiagnostic Treatment of Emotional Disorders</li>
                                <li>EMDR</li>
                                <li>Trauma informed trainings</li>
                                <li>Trauma Focused CBT</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className='titleListRight'>Couples Therapy</h1>
                            
                            <ul className='serviceListRight'>
                                <li>Emotionally Focused Couples Therapy</li>
                                <li>Gottman Couples Therapy- completed Level 1 and 2</li>
                            </ul>
                        <Row>
                        </Row>
                        </Col>
                        <Col >
                            <img src={therapyLogo} width="100%" alt="Happy Doctor"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={therapyLogo} width="100%" alt="Happy Doctor"/>
                        </Col>
                        <Col>
                            <h1>Areas of Support</h1>
                            
                            <ul className='serviceListLeft'>
                                <li>Anxiety</li>
                                <li>Depression</li>
                                <li>Couples</li>
                                <li>Grief</li>
                                <li>Parenting</li>
                            </ul>
                            <a href="contact">
                                <button className="contactButton"  href="contact">Contact</button>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}