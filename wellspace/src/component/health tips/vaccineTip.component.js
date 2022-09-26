import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";

import article0 from './vaccine/article0.jpg';
import article1 from './vaccine/article1.jpg';
import article2 from './vaccine/article2.jpg';
import article3 from './vaccine/article3.jpg';
import article4 from './vaccine/article4.jpg';
import article5 from './vaccine/article5.jpg';

const src = "https://www.youtube.com/embed/AMt75Gy5_pA"

export default class VaccineTip extends React.Component {
    render(){
        return (
            <div className="home">
                <h1>Everything You Need To Know</h1>
                <Container>
                    <Row>
                        <Col>
                            <img src={article0} width="100%" alt="covid-19"/>
                            <h3>ontario government's vaccine rollout</h3>
                            <button className="health">View</button>
                        </Col>
                        <Col>
                            <img src={article1} width="100%" alt="covid-19 vaccine"/>
                            <h3>vaccine implementation plan</h3>
                            <button className="health">View</button>
                        </Col>
                        <Col>
                            <img src={article2} width="100%" alt="weight loss"/>
                            <h3>administration of the pfizer-biontech covid-19 vaccine</h3>
                            <button className="health">View</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={article3} width="100%" alt="covid-19"/>
                            <h3>moh: covid-19 about vaccines</h3>
                            <button className="health">View</button>
                        </Col>
                        <Col>
                            <img src={article4} width="100%" alt="covid-19 vaccine"/>
                            <h3>moh: covid-19 vaccine approval process & safety</h3>
                            <button className="health">View</button>
                        </Col>
                        <Col>
                            <img src={article5} width="100%" alt="weight loss"/>
                            <h3>moh: covid-19 vaccine information sheet: pfitzer-biontech covid-19 vaccine</h3>
                            <button className="health">View</button>
                        </Col>
                    </Row>
                </Container>
                <h1>The Expert's Answers</h1>
                <iframe
                    width="1080px"
                    height='720px'
                    src={src}
                    title="Youtube Player"
                    frameborder="0"
                    allowFullScreen
                />
            </div>
        )
    }
}