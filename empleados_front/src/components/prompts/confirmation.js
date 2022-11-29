import React from 'react';
import { Modal, Button} from 'react-bootstrap';


export default class ConfirmationProps  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (  
            <Modal show = {this.state.show} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{this.state.text}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant = "secondary" onClick={()=> this.props.onCancel()}>Cancelar</Button>
                    <Button variant = "primary" onClick={()=> this.props.onConfirm}>Confirmar</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
 
 ;