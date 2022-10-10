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
                          Your doctors at WellspaceMD strongly recommend that all our patients over the age of six months obtain their primary series vaccination along with up to three booster doses depending on age and overall health. At WellspaceMD we are proud to offer a booster dose for those aged 5-17 and the bivalent Omicron inclusive booster vaccine for those over age 18.
                        </p>
                    </Alert>
                </div>
            )
        }
    }
}