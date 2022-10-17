import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactBlock from './contactBlock.component';
import FAQ from './FAQ.component';

import React from "react";

import axios from "axios";

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.forceUpdate();
        this.setState({firstName: e.target.first.value});
        this.setState({lastName: e.target.last.value});
        this.setState({email: e.target.email.value});
        this.setState({phone: e.target.phone.value});
        this.setState({message: e.target.message.value});
        //console.log(this.state);

        axios({
            method: 'post',
            url: 'localhost',
            data: {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                phone: this.phone.value,
                comments: this.message.value
            }
        }).then((response) => {
            console.log('this is the response')
            console.log(response)
        }).catch(err => console.log(err))
    }

    //adding this as a temporary solution incase the user hits enter instead of the submit button
    //without this the message may not be submitted if the user did not click out of the field
    //this way, upon hitting enter, all but the last char will be submitted
    handleTextChange = (e) => {
        this.setState({message: e.target.value});
        console.log(this.state);
    }

    render(){
        return (
            <div className="contact">

                <h1>Contact Us</h1>
                <div className='contactDiv'>
                    <Form onSubmit={this.handleSubmit}>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="First Name" name="firstName">
                                <Form.Control name="first" type="firstName" placeholder="First" disabled/>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Last Name" name="lastName">
                                <Form.Control name="last" type="lastName" placeholder="Last" disabled/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Email" name="email">
                                <Form.Control name="email" type="email" placeholder="Email Address" disabled/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Phone" name="phone">
                                <Form.Control name="phone" type="phone" placeholder="9051234567" disabled/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId="floatingTextarea" label="Comments" name="message">
                                <Form.Control as="textarea" name="message" placeholder="Leave a comment here" style={{ height: '100px' }} onChange={this.handleTextChange} disabled/>
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