import React from "react";
import "./index.css";
import { Modal, Button, Form } from "react-bootstrap";
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
                        <Form>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter first name"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={close}>Close</Button>               
                    </Modal.Footer>
            </Modal>
          
    )
};

export default Signup;