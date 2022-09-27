import React from "react";
import Accordion from 'react-bootstrap/Accordion';

export default class FAQ extends React.Component {
    render(){
        return (
            <>
                <h1>F.A.Q.s</h1>
                <p>You may find the answer to your question right here!</p>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Is WellspaceMD Family Practice and Walk In Clinic open during the COVID-19 pandemic?</Accordion.Header>
                        <Accordion.Body>
                            Yes!  Our family and walk-in physicians are offering direct in person, virtual video and telephone visits for our patients.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What measures is WellspaceMD taking to prevent the spread of COVID-19?</Accordion.Header>
                        <Accordion.Body>
                            We have implemented several strategies to help limit the spread of COVID-19.  Some but not all of these activities include actively screening 
                            all patients by phone or email prior to arrival for COVID-19 symptoms, asking patients to wait outside our suite or in the parking lot and until 
                            an exam room is ready for them to be immediately placed into, regular cleaning & disinfecting of commonly touched surfaces in our exam rooms and 
                            common spaces, restricting in office visits to essential health care visits that are not adequately assessed by phone or video call, screening 
                            our own staff for COVID-19 symptoms on a daily basis, asking our staff to wear appropriate PPE in patient exposed areas, etc.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Are there any physicians at WellspaceMD actively accepting patients?</Accordion.Header>
                        <Accordion.Body>
                            No, unfortunately we do not have any physicians accepting patients.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What forms of payment does WellspaceMD accept for non-insured services?</Accordion.Header>
                        <Accordion.Body>
                            Cash or e-mail money transfer only.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>How does a patient obtain their medical records?</Accordion.Header>
                        <Accordion.Body>
                            A patent may request their own records at any time by direct request.  If you require your records to be transferred to a third party then we 
                            require a signed consent to release medical information. 
                        </Accordion.Body>
                    </Accordion.Item>
                    
                </Accordion>
            </>
        )
    }
    
}