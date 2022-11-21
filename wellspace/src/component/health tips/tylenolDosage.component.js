import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    Link
  } from "react-router-dom";

import React from "react";

import tylonalDosage1 from './dosageTips/dosageTips-1.png';
import tylonalDosage2 from './dosageTips/dosageTips-2.png';

export default class dosageTips extends React.Component {
    render(){
        return (
            <>
            
            <Container>
                <Row>
                    <h1><center>Infant and Child Acetaminophen & Ibuprofen Shortage Options</center></h1>
                    <Col>
                        <img src={tylonalDosage1} width="100%" alt="Wellspace Vision"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={tylonalDosage2} width="100%" alt="Wellspace Vision"/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Link to="/files/Infant_and_Children_Acetaminophen_and_Ibuprofen_shortage_options.pdf" target="_blank" download className='health'>Download</Link>
                </Row>
            </Container>

                
            </>
        )
    }
}