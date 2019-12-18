import React, { useState } from "react";
import "./index.css";
import { Container, Form, Button } from "react-bootstrap";
import API from "../../utils/API";
import { useSelector, useDispatch } from "react-redux";
import { USERDATA } from "../../actions";

function Deposit(){
    const [input, setInput] = useState({});
    const userState = useSelector(state => state.user);
    const dispatch = useDispatch();
    const userDataState = useSelector(state => state.userData);
    const handleChange = e => {
        e.persist();
        setInput({...input, [e.target.name]: e.target.value })
    };
    const handleSubmit = e => {
        e.preventDefault();
        API.deposit(input.type, userState.username, input.deposit)
        .then(res => {
            setInput({});
        })
        .catch(err => console.log(err))
    }
    return (
        <Container id="depositContainer">
            <Form>
                <Form.Group>
                    <Form.Label>Make Deposit</Form.Label>
                    <Form.Control value={input.deposit || ""} onChange={handleChange} name="deposit" type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>To Account:</Form.Label>
                    <Form.Control value={input.type || ""} name="type" as="select" onChange={handleChange}>
                    <option>select type (required)</option>
                    <option value="Checking_Balance">Checkings</option>
                    <option value="Saving_Balance">Savings</option>                   
                    </Form.Control>
                </Form.Group>
                <Button onClick={handleSubmit} type="submit">Submit</Button>
            </Form>
        </Container>
    )
};

export default Deposit;