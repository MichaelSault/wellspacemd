import React from "react";
import Alert from 'react-bootstrap/Alert'

export default class influenzaAlert extends React.Component {

    constructor() {
        super();
        this.state = {
          isActive: true,
        }
      }
    
      hideAlert() {
        this.setState({
          isActive: false,
        });
      }

    render(){
        if (this.state.isActive){
            return (
                <div>
                    <Alert variant="success" onClick={() => this.hideAlert()} dismissible>
                        <Alert.Heading>Influenza Vaccination Update</Alert.Heading>
                        <p>
                            We will be receiving Influenza Vaccinations by October 5th.  High risk patients will be eligible first.
                        </p>
                        <hr />
                        <p>
                            Influenza Vaccinations will become available for the general public as of November.
                        </p>
                    </Alert>
                </div>
            )
        }
    }
}