import React from "react";
import "./index.css";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { CLOSE } from "../../actions";

function Signup(){
    const showState = useSelector(state => state.show);
    const dispatch = useDispatch();
    const close = () => {
        dispatch(CLOSE())
    };    
    return (
            <Modal show={showState} onHide={close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign up now!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Test.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={close}>Close</Button>               
                    </Modal.Footer>
            </Modal>
          
    )
};

export default Signup;