import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from "react";
import happyDoctor from '../images/Happy-Doctor-1024x839.png';

export default class About extends React.Component {
    render(){
        return (
            <div className="home">
                <Container>
                    <Row>
                        <Col>
                            <img src={happyDoctor} width="100%" alt="Happy Doctor"/>
                        </Col>
                        <Col>
                            <h1>Our Vision</h1>
                            <p>about what you would want to see on this page if you were looking at an about page.  This is your chance to tell about how you are qualified to serve them.</p>
                            <p>Nulla hendrerit metus et tincidunt tristique. Fusce molestie commodo mauris, vitae vestibulum tortor venenatis non. Pellentesque quis urna a magna bibendum volutpat a at nisl. Suspendisse finibus, tortor id gravida feugiat, nulla leo venenatis nisi, et aliquam quam ligula eget dui. Suspendisse lectus lorem, varius vel dapibus a, vestibulum a eros. Sed sed magna in neque commodo pretium.</p>
                            <p>We look forward to your stay.</p>
                            <p><b>Dr. Wellspace</b></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Mission</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </Col>
                        <Col>
                            <h1>Vision</h1>
                            <p>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Col>
                        <Col>
                            <h1>Values</h1>
                            <p>
                                <ul>
                                    <li>Loren ipsum dolor sit amet</li>
                                    <li>Luctus nec ullam corper</li>
                                    <li>Pulvinar dapibus leo</li>
                                </ul>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}