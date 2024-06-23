import React from "react";
import {Col, Container, Image, Row, Button, Form, FormLabel, FormControl} from "react-bootstrap";
import NavbarCustom from "../Layout/Navbar";

const ConfirmAccount = () => {
    return (<>
        <NavbarCustom color="#29b34"></NavbarCustom>
        <Container className={'py-5 mt-5'}><h1>Check your email for activation link</h1></Container>

    </>)

}

export default ConfirmAccount;