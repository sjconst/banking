import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import Signin from "../components/signin";
import Signup from "../components/signup";

function Home(){
    return (
        <div id="homeContainer">
            <Container className="text-left">
                <div className="heading">
                    <h2>Join and find the bank that does it all.</h2>
                    <h4>It's our mission to be your one-stop-shop.</h4>
                </div>                
                <Signin />
                <Signup />
            </Container>           
        </div>
    )
};

export default Home;