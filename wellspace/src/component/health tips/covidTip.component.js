import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";

import article0 from './covid19/article0.jpg';
import article1 from './covid19/article1.jpg';
import article2 from './covid19/article2.jpg';

export default class CovidTip extends React.Component {
    render(){
        return (
            <div className="home">
                <h1>COVID-19</h1>
                <Container>
                    <Row>
                        <Col>
                            <img src={article0} width="100%" alt="covid-19"/>
                            <h3>oma: covid-19 everything you need to know</h3>
                            <button className="health">View</button>
                        </Col>
                        <Col>
                            <img src={article1} width="100%" alt="covid-19 vaccine"/>
                            <h3>covid-19 alert tracking app</h3>
                            <button className="health">View</button>
                        </Col>
                        <Col>
                            <img src={article2} width="100%" alt="weight loss"/>
                            <h3>ontario ministry of health: status, answers and updates on covid-19</h3>
                            <button className="health">View</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}