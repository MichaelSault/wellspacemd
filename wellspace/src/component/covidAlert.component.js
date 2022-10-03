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
                        <Alert.Heading>COVID-19 Vaccination Update</Alert.Heading>
                        <p>
                        Your doctors at WellspaceMD strongly recommend that all patients greater than six months please obtain their primary COVID19 vaccine series and we have vaccine available for all age groups.  Booster doses for those over five including the bivalent Omicron-inclusive vaccine for those over 18 are also available for administration at WellspaceMD.
                        </p>
                    </Alert>
                </div>
            )
        }
    }
}