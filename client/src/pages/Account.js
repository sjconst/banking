import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import Transfer from "../components/transfers";
import AllAccounts from "../components/allAccounts";
import Deposit from "../components/deposits";

function Account(){
    return (
        <Container id="tabsContainer">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="accounts" title="accounts">
                    <AllAccounts />
                </Tab>
                <Tab eventKey="transfers" title="transfers">
                    <Transfer />
                </Tab>
                <Tab eventKey="deposits" title="deposits">
                    <Deposit />
                </Tab>
            </Tabs>
        </Container>
    )
};

export default Account;