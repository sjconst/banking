import React, { useEffect } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { USERDATA } from "../../actions";

function AllAccounts(){
    const userDataState = useSelector(state => state.userData);    
    return (
        <Container>         
            <Row className="border">
                <Col>
                    <h4>Checking Balance</h4>
                </Col>
                <Col>
                    <h4>{userDataState.Checking_Balance}</h4>
                </Col>
            </Row>
            <Row className="border"> 
                <Col>
                    <h4>Savings Balance</h4>
                </Col>
                <Col>
                    <h4>{userDataState.Saving_Balance}</h4>
                </Col>
            </Row>
        </Container>
    )
};

export default AllAccounts;