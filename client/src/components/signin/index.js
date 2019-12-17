import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { SIGN_IN, SHOW } from "../../actions";
import API from "../../utils/API";

function Signin(){
    const login = useSelector(state => state.login);
    const dispatch = useDispatch();
    const signIn = e => {
        e.preventDefault();
        API.checkUser(e.target.username, e.target.email)
        .then(res => {
            
        })
        .catch(err => console.log(err))
        dispatch(SIGN_IN())
    };    
    const show = () => {
        dispatch(SHOW())
    };
    return (
        <div id="signInContainer">           
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col  className="align-self-center">
                        <Button variant="primary" type="submit" id="myButton" onClick={signIn}>Sign in</Button>
                    </Col>
                </Row>      
            </Form>          
            <Row id="forgot">
                <Col >
                    Forgot <Button className="noOutline">Username</Button> or <Button className="noOutline"> Password</Button>?
                </Col>
                <Col className="text-right">
                    <Button className="noOutline" onClick={show}>Sign up for online banking</Button>
                </Col>
            </Row>
        </div>
    )
};

export default Signin;