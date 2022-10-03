import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from "react";
import newsArticle0 from './newsImages/newsArticle0.jpg';
import newsArticle1 from './newsImages/newsArticle1.jpg';
import newsArticle2 from './newsImages/newsArticle2.jpg';

export default class Services extends React.Component {
    render(){
        return (
            <div className="home">
                <Container>
                    <Row>
                        <h1>News</h1>
                        <Col>
                            <img src={newsArticle2} width="100%" alt="weight loss"/>
                            <h3>What are ultra-processed foods? What should I eat instead?</h3>
                            <a href="https://www.washingtonpost.com/wellness/2022/09/27/ultraprocessed-foods/" target="_blank" rel="noreferrer">
                                <button className="health">Read More</button>
                            </a>
                        </Col>
                        <Col>
                            <img src={newsArticle1} width="100%" alt="covid-19"/>
                            <h3>Residents 18+ can now book appointments for bivalent COVID-19 booster doses</h3>
                            <a href="https://www.halton.ca/The-Region/News/2022/Residents-18-can-now-book-appointments-for-bivale?fbclid=IwAR0EX_obxWXCWy4JYelzzbkW-Tzh_BGaAP50SMltw4WA6LaME1J7khsSqv0" target="_blank" rel="noreferrer">
                                <button className="health">Read More</button>
                            </a>
                        </Col>
                        <Col>
                            <img src={newsArticle0} width="100%" alt="covid-19 vaccine"/>
                            <h3>Influenza (the Flu)</h3>
                            <a href="https://www.halton.ca/For-Residents/Immunizations-Preventable-Disease/Diseases-Infections/Influenza-(the-Flu)?fbclid=IwAR13itY1Ry-DRGL1gbluTveVgTCIC0SIYYbWj088ebPn-G8d5ZucbRwcMwA#04" target="_blank" rel="noreferrer">
                                <button className="health">Read More</button>
                            </a>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}