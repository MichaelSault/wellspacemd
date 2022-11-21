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
                        <Alert.Heading>Infant and Children's Acetaminophen and Ibuprofen Shortage Update</Alert.Heading>
                        <p>
                            Please see the <b>Health Tips</b> page for more information concerning usage of Adult Tylenol for infants and children.
                        </p>
                    </Alert>
                </div>
            )
        }
    }
}