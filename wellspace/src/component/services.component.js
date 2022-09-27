import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from "react";
import cryotheropy from '../images/lady-having-cryotherapy.jpg';
import intromuscular from '../images/intramuscular-injection.jpg';
import streptococcal from '../images/streptococcal-screen_thumb.jpg';
import pediactrics from '../images/pediactric-care.jpg';

export default class Services extends React.Component {
    render(){
        return (
            <div className="home">
                <Container>
                    <Row>
                        <Col>
                            <img src={cryotheropy} width="100%" alt="Happy Doctor"/>
                        </Col>
                        <Col>
                            <h1>Category Title 1</h1>
                            
                            <ul>
                                <li>Abscess incision and drainage</li>
                                <li>Simple wound dressings</li>
                                <li>Cryotherapy</li>
                            </ul>
                            
                            <a href="contact">
                                <button className="contactButton"  href="contact">Contact</button>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Category Title 2</h1>
                            
                            <ul>
                                <li>Local excision of moles, kin growth, skin cancers, etc.</li>
                                <li>Electrocautery of skin lesions</li>
                                <li>Skin biopsy</li>
                                <li>Tuberculosis skin testing</li>
                                <li>Most intramuscular and subcutaneous injections</li>
                            </ul>
                            
                            <a href="contact">
                                <button className="contactButton"  href="contact">Contact</button>
                            </a>
                        </Col>
                        <Col>
                            <img src={intromuscular} width="100%" alt="Happy Doctor"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={streptococcal} width="100%" alt="Happy Doctor"/>
                        </Col>
                        <Col>
                            <h1>Category Title 3</h1>
                            
                            <ul>
                                <li>Spirometry</li>
                                <li>Rapid strep testing</li>
                                <li>Ear syringing</li>
                                <li>Toenail removal</li>
                                <li>IUD insertion</li>
                            </ul>
                            
                            <a href="contact">
                                <button className="contactButton"  href="contact">Contact</button>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Category Title 4</h1>
                            
                            <ul>
                                <li>Allergy immunotherapy injections</li>
                                <li>Prenatal and postnatal care</li>
                                <li>Newborn and pediatric care, including immunizations</li>
                                <li>Driver’s license physical examinations</li>
                            </ul>
                            
                            <a href="contact">
                                <button className="contactButton"  href="contact">Contact</button>
                            </a>
                        </Col>
                        <Col>
                            <img src={pediactrics} width="100%" alt="Happy Doctor"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}