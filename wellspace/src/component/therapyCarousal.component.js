import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

import React from "react";

import therapy1 from "./therapyImages/therapy1.jpg";
import therapy2 from "./therapyImages/therapy2.jpg";
import therapy3 from "./therapyImages/therapy3.jpg";
import therapy4 from "./therapyImages/therapy4.jpg";
import therapy5 from "./therapyImages/therapy5.jpg";
import therapy6 from "./therapyImages/therapy6.jpg";


export default class TherapyCarousal extends React.Component {
    
    render() {
        return(
            <CCarousel controls transition="crossfade" dark>
                <CCarouselItem align-content="center">
                    <CImage className="d-block w-50" src={therapy1} alt="slide 1" style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}/>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" src={therapy2} alt="slide 2" style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}/>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" src={therapy3} alt="slide 3" style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}/>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" src={therapy4} alt="slide 4" style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}/>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" src={therapy5} alt="slide 5" style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}/>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-50" src={therapy6} alt="slide 6" style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}/>
                </CCarouselItem>
            </CCarousel>
        )
    }
  }