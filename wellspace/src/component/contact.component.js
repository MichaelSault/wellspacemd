import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactBlock from './contactBlock.component';
import FAQ from './FAQ.component';

import React from "react";
// import emailjs from '@emailjs/browser';

export default class Contact extends React.Component {

    render(){
        return (
            <div className="contact">

                <h1>Contact Us</h1>
                <div className='contactDiv'>
                    <Form>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="First Name" name="firstName">
                                <Form.Control type="firstName" placeholder="First" />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Last Name" name="lastName">
                                <Form.Control type="lastName" placeholder="Last" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Email" name="email">
                                <Form.Control type="email" placeholder="Email Address" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingTextarea" label="Comments" name="message">
                                <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col className='centered'>
                            <button className='submit'>Submit</button>
                        </Col>
                    </Row>
                    </Form>
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