import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactBlock from './contactBlock.component';
import FAQ from './FAQ.component';

import React from "react";

export default class Contact extends React.Component {
    render(){
        return (
            <div className="contact">

                <h1>Contact Us</h1>
                <div className='contactDiv'>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="First Name">
                                <Form.Control type="firstName" placeholder="First" />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                                <Form.Control type="lastName" placeholder="Last" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Email">
                                <Form.Control type="firstName" placeholder="Email Address" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingTextarea" label="Comments">
                                <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col className='centered'>
                            <button className='submit'>Submit</button>
                        </Col>
                    </Row>
                    <br /><br/>
                    <Row>
                        <Col>
                            <FAQ />
                        </Col>
                        <Col>
                            <ContactBlock />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}