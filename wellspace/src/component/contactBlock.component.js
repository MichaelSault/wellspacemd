import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from "react";

export default class ContactBlock extends React.Component {
    render(){
        return (
            <>
            <Container>
                <Row>
                <Col></Col>
                <Col>
                    <h1>Contact</h1>
                    <button className="phone">✆ 905-618-9934</button>
                    <br /><br />
                    <button className="fax">🖷 289-271-1132</button>
                    <br /><br />
                    <button className="email">✉︎ info@wellspacemd.com</button>
                </Col>
                </Row>
                <Col></Col>
            </Container>
                
            </>
        )
    }
    
}