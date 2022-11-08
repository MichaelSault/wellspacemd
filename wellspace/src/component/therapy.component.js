import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from 'react';

import therapyLogo from './therapyImages/therapyLogo.png';
import mandyHeadshot from './therapyImages/mandyHeadshot.jpg';

import TherapyCarousal from './therapyCarousal.component';
import TherapyContactBlock from './therapyContactBlock.component';

export default class Therapy extends React.Component {
    render(){
        return (
            <div className="home">
                <br></br>
                <Container>
                    <Row>
                        <Col md="auto"><img src={therapyLogo} float='right' width="125" alt="Wellspace Therapy Logo"/></Col>
                        <Col><h1 className='therapyTitle'>Wellspace Therapy</h1></Col>
                    </Row>
                    <br></br>
                    <Row>
                        <hr></hr>
                        <h3>At Wellspace Therapy, I believe in working from a client centred and collaborative approach, which means you will drive the therapeutic
                             process and I am here as a guide. I offer a trauma-informed, anti-oppressive, non-judgmental and curious space for clients to feel seen and 
                             heard so you can begin your self-discovery/healing journey.
                        </h3>
                    </Row>
                    <hr></hr>
                    <br />
                    <Row>
                        <Col md><TherapyCarousal /></Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col>
                            <br />
                            <h2>Mandy Sahota's Training and Specializations</h2>
                            <p>
                                I worked in Accounting and Finance for about a decade before deciding to change my career path. After having children I was fascinated with 
                                brain development so I completed a second undergraduate degree in Psychology, Neuroscience and Behaviour from McMaster in 2016.  After some 
                                personal experiences I decided that completing a Master in Social Work would provide me with the foundation to do the work I felt passionate 
                                about. I completed a Master in Social Work (MSW) in 2020 from the University of Toronto. I have immersed myself in a wide array of trainings 
                                during and after completing my MSW so that I can offer my clients the best experience possible.  It would be my privilege to join you in your 
                                journey of healing and self-discovery.
                            </p>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col>
                            <img src={mandyHeadshot} width="100%" alt="Mandy Sahota Headshot"/>
                        </Col>
                        <Col>
                            <h3>Individual Approaches</h3>
                            
                            <ul>
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
                        <Col>
                            <h3>Areas of Support</h3>
                            
                            <ul>
                                <li>Anxiety</li>
                                <li>Depression</li>
                                <li>Couples</li>
                                <li>Grief</li>
                                <li>Parenting</li>
                            </ul>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col>
                        <h1>Office Hours</h1>
                        <Row>
                            <Col><h3>Wednesday</h3></Col>
                            <Col><h3>10:00am-5:30pm</h3></Col>
                        </Row>
                        <Row>
                            <Col><h3>Thursday</h3></Col>
                            <Col><h3>10:00am-5:30pm</h3></Col>
                        </Row>                     
                        </Col>
                        <Col>
                            <TherapyContactBlock />
                        </Col>
                    </Row>
                    <hr></hr>
                </Container>
            </div>
        )
    }
}