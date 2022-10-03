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
                            Influenza vaccination including high risk vaccination will be available for high risk patients and seniors on October 5, 2022.
                        </p>
                        <hr />
                        <p>
                            In November influenza vaccination will be available for all those who wish to have it.
                        </p>
                    </Alert>
                </div>
            )
        }
    }
}