import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from "react";
import covidGerm from '../images/healthTips/covid-germ.png';
import covidVaccine from '../images/healthTips/covid-vaccine.png';
import weightLoss from '../images/healthTips/weight.png';
import concussion from '../images/healthTips/brain.png';
import allergies from '../images/healthTips/allergies.png';
import shortage from '../images/healthTips/infants-and-children.jpg';

export default class Services extends React.Component {
    render(){
        return (
            <div className="home">
                
                <Container>
                    <Row>
                        <h1>Health Tips</h1>
                        <Col>
                            <img src={shortage} width="100%" alt="covid-19"/>
                            <h3>Acetaminophen and Ibuprofen for Infants and Children</h3>
                            <a href="dosage">
                                <button className="health">Learn More</button>
                            </a>
                        </Col>
                        <Col>
                            <img src={covidGerm} width="100%" alt="covid-19"/>
                            <h3><br/>Covid-19</h3>
                            <a href="covid19">
                                <button className="health">Learn More</button>
                            </a>
                        </Col>
                        <Col>
                            <img src={covidVaccine} width="100%" alt="covid-19 vaccine"/>
                            <h3><br/>Covid-19 Vaccine</h3>
                            <a href="covidVaccine">
                                <button className="health">Learn More</button>
                            </a>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <img src={weightLoss} width="100%" alt="weight loss"/>
                            <h3><br/>Weight Loss & Obesity</h3>
                            <a href="weightLoss">
                                <button className="health">Learn More</button>
                            </a>
                        </Col>
                        <Col>
                            <img src={concussion} width="100%" alt="concussion assessments"/>
                            <h3><br/>Concussion Assessment</h3>
                            <a href="concussion">
                                <button className="health">Learn More</button>
                            </a>
                        </Col>
                        <Col>
                            <img src={allergies} width="100%" alt="types of allergies"/>
                            <h3><br/>Types of Allergies</h3>
                            <a href="allergies">
                                <button className="health">Learn More</button>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}