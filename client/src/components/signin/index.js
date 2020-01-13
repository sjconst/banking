import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_IN, SHOW, USER, USERDATA } from "../../actions";
import API from "../../utils/API";
import { useHistory } from 'react-router-dom';

function Signin(){    
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);
    const [ error, setError ] = useState({});   
    const history = useHistory();
    const signIn = e => {
        e.preventDefault();
        if(!userState.username || !userState.password){
            setError({...error, login: "invalid login" })
        } else {
            let password = {
                password: userState.password
            };
            API.checkUser(userState.username, password)
            .then(res => {       
                if(res.data.Username === userState.username){                    
                    dispatch(USERDATA(res.data));            
                    dispatch(SIGN_IN());                    
                    history.push("/Account");
                } else {
                    setError({...error, login: "invalid login" })
                }
            })
            .catch(err => console.log(err))
        }    
    };    
    const show = () => {
        dispatch(SHOW());
    };
    const handleChange = e => {
        e.persist();
        dispatch(USER(e.target));
    };
    return (
        <div id="signInContainer">           
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={handleChange} name="username" type="text" placeholder="Enter username" />
                        {error.login && (<p className="text-danger">{error.login}</p>)}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handleChange} name="password" type="password" />
                        </Form.Group>
                    </Col>
                    <Col className="align-self-center">
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