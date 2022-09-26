import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";

import main from './allergies/Allergies.jpg';
import airborn from './allergies/Airborn.png';
import skin from './allergies/Skin.jpg';
import food from './allergies/Food.jpg';
import insect from './allergies/Insect.png';
import drug from './allergies/Drug.jpg';

export default class AllergyTip extends React.Component {
    render(){
        return (
            <div className="home">
                
                <Container>
                    <h1><b>Types Of Allergies</b></h1>
                    <Row>
                        <Col>
                            <p className='allergyDesc'>Allergy is a chronic disease.  It is estimated that 20 to 25% of canadians suffer from allergies. 
                                Many adults and children with one type of allergy will develop other allergies, or even asthma, later in life.
                            </p>
                        </Col>
                        <Col xs lg="4">
                            <img src={main} width="100%" alt="covid-19"/>
                        </Col>
                    </Row>
                    <Row>
                        <h2>Types Of Allergies</h2>
                        <p className='allergyDesc'>Five types of allergies exist: airborne, skin-related, food, insect stings/bites, and drug allergy.</p>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Airborn Allergy</h2>
                            <p className='allergyDesc'>The respiratory system is usually affected if a person is allergic to tree pollen, grass pollen, animals (such as pets and farm animals), 
                                birds moulds, and house dust mites. allergic symptoms include sneezing, itching, watery eyes and nose, and wheezing. hay fever (rhinitis) 
                                and/ or asthma are the most common results of respiratory allergies.
                            </p>
                        </Col>
                        <Col xs lg="4">
                            <img src={airborn} width="100%" alt="covid-19"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs lg="4">
                            <img src={skin} width="100%" alt="covid-19"/>
                        </Col>
                        <Col>
                            <h2>Skin-Related Allergy</h2>
                            <p className='allergyDesc'>The respiratory system is usually affected if a person is allergic to tree pollen, grass pollen, animals (such as pets and farm animals), 
                                birds moulds, and house dust mites. allergic symptoms include sneezing, itching, watery eyes and nose, and wheezing. hay fever (rhinitis) 
                                and/ or asthma are the most common results of respiratory allergies.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Food Allergy</h2>
                            <p className='allergyDesc'>The most common food-related allergies are cow's milk, egg proteins, soy, peanuts, fish and shellfish. eczema, diarrhea, and nausea
                             are common symptoms of food related allergies, however severe symptoms include exhaustion, dizziness, swelling of the throat, unconsciousness or 
                             cardiac arrest.
                            </p>
                        </Col>
                        <Col xs lg="4">
                            <img src={food} width="100%" alt="covid-19"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs lg="4">
                            <img src={insect} width="100%" alt="covid-19"/>
                        </Col>
                        <Col>
                            <h2>Insect Stings/Bites</h2>
                            <p className='allergyDesc'>Hornets, wasps, yellow jackets, and honey bees are the cause for most insect allergy. 
                            The risk of a systemic (body) reaction in patients who experience a local reaction is 5-10%. The most 
                            serious allergic reaction to an insect sting is allergic chock (anaphylaxis).
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Drug Allergy</h2>
                            <p className='allergyDesc'>Prescription and over-the-counter medications can cause drug allergies. Hives, rash or fever are the most common signs of a drug allergy.
                            </p>
                        </Col>
                        <Col xs lg="4">
                            <img src={drug} width="100%" alt="covid-19"/>
                        </Col>
                    </Row>
                    <br />
                    <h1><b>Please Ask Your Allergy Specialist How To Further Prevent Allergies.</b></h1>
                </Container>
                
            </div>
        )
    }
}