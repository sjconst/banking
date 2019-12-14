import React from "react";
import "./index.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { CLOSE, CHANGE } from "../../actions";

function Signup(){
    const showState = useSelector(state => state.show);
    const inputState = useSelector(state => state.change);
    const dispatch = useDispatch();
    const close = () => {
        dispatch(CLOSE())
    };    
    const handleSubmit = () => {
        console.log("submitted");
    };
    const handleChange = e => {
        e.persist();
        dispatch(CHANGE(e.target))
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
                                <Form.Control onChange={handleChange} name="firstName" type="text" placeholder="First name"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={handleChange} name="lastName" type="text" placeholder="Last name"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={handleChange} name="email" type="email" placeholder="First name"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={handleChange} name="password" type="text" placeholder="Password"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control onChange={handleChange} name="confirmPassword" type="text" placeholder="Confirm Password"/>
                            </Form.Group>
                            <Button type="submit" onClick={handleSubmit}>Submit</Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={close}>Close</Button>               
                    </Modal.Footer>
            </Modal>
          
    )
};

export default Signup;