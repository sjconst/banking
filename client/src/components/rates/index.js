import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Rate(){
    return (
        <Container id="rateContainer">
            <Row>
                <Col>
                    <p><FontAwesomeIcon icon={faDollarSign} className="rateIcon"/>Savings</p>
                    <p className="high">as high as</p>
                    <p><span className="percent">1.35%</span><span className="apy">APY</span></p>                
                </Col>
                <Col>
                    <p><FontAwesomeIcon icon={faDollarSign} className="rateIcon"/>Savings</p>
                    <p className="high">as high as</p>
                    <p><span className="percent">1.35%</span><span className="apy">APY</span></p>                
                </Col>
                <Col>
                    <p><FontAwesomeIcon icon={faDollarSign} className="rateIcon"/>Savings</p>
                    <p className="high">as high as</p>
                    <p><span className="percent">1.35%</span><span className="apy">APY</span></p>                
                </Col>
                <Col>
                    <p><FontAwesomeIcon icon={faDollarSign} className="rateIcon"/>Savings</p>
                    <p className="high">as high as</p>
                    <p><span className="percent">1.35%</span><span className="apy">APY</span></p>                
                </Col>
            </Row>
        </Container>
    )
};

export default Rate;