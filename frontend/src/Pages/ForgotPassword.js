import React from "react";
import {Col, Container, Image, Row, Button, Form, FormLabel, FormControl} from "react-bootstrap";
import NavbarCustom from "../Layout/Navbar";

const ForgotPassword = () => {
    return (<>
        <NavbarCustom color="#29b34"></NavbarCustom>

        <Container className={""} style={{marginTop:"10%"}}>
            <Row>
                <h1>Forgot Password</h1>
            </Row>

        </Container>


        <Container className={"w-25"} style={{paddingBottom:"10%"}}>
            <Form>
                <Form.Group className={"my-3 text-start"}>
                    <FormLabel className={"text-start"}>
                        EMAIL
                    </FormLabel>

                    <FormControl type={"email"} size={"lg"} placeholder={"hello@trip2.mk"}>

                    </FormControl>
                </Form.Group>

                <Button size={"lg"} type={"submit"} style={{backgroundColor:"#293b34"}} className={"px-5"}>send</Button>


            </Form>
        </Container>

    </>)

}

export default ForgotPassword;