import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { SIGN_IN } from "../../actions";

function Signin(){
    const login = useSelector(state => state.login);
    const dispatch = useDispatch();
    const signIn = () => {
        dispatch(SIGN_IN())
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
                        <Link to="/Accounts"><Button variant="primary" type="submit" id="myButton" onClick={signIn}>Sign in</Button></Link>
                    </Col>
                </Row>      
            </Form>          
            <Row>
                <Col>
                    <span>Forgot <Link to="/">Username</Link> or <Link to="/">Password</Link>?</span>
                </Col>
                <Col>
                    <span><Link to="/">Sign up for online banking</Link></span>
                </Col>
            </Row>
        </div>
    )
};

export default Signin;