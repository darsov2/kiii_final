import React from "react";
import NavbarCustom from "../Layout/Navbar";
import {
    Button,
    CloseButton,
    Container,
    Form,
    FormControl,
    FormLabel,
    Modal, ModalBody,
    ModalHeader,
    ModalTitle,
    Row
} from "react-bootstrap";
import useFormData from "../Hooks/useFormData";

const ForgotPasswordPage = () => {

    const {formData, setFormData, onFormChange} = useFormData(
        {
            username: '',
            password: '',
            confirmPassword: ''
        }
    )
return (<>
    <NavbarCustom color="#29b34"></NavbarCustom>

    <Container className={""} style={{marginTop: "10%"}}>
        <Row>
            <h1>Forgot your password?</h1>
        </Row>
        <Row>
            <h6>Reset it now!</h6>
        </Row>
    </Container>

    <Container className={"w-25"} style={{paddingBottom: "10%"}}>
        <Form>
            <Form.Group className={"my-3 text-start"}>
                <FormLabel className={"text-start"}>
                    USERNAME
                </FormLabel>

                <FormControl onChange={onFormChange} value={formData.username} name={'username'} type={"text"} size={"lg"}
                             placeholder={"hello@trip2.mk"}>

                </FormControl>
            </Form.Group>

            <Form.Group className={"my-3 text-start"}>
                <FormLabel className={"text-start"}>
                    NEW PASSWORD
                </FormLabel>

                <FormControl onChange={onFormChange} value={formData.password} name={'password'} type={"password"} size={"lg"}
                             placeholder={"********"}>

                </FormControl>

                <h6><a href={"/"}>Forgot password?</a></h6>
            </Form.Group>

            <Form.Group className={"my-3 text-start"}>
                <FormLabel className={"text-start"}>
                    NEW PASSWORD
                </FormLabel>

                <FormControl onChange={onFormChange} value={formData.confirmPassword} name={'password'} type={"password"} size={"lg"}
                             placeholder={"********"}>

                </FormControl>

                <h6><a href={"/"}>Forgot password?</a></h6>
            </Form.Group>


            <Button size={"lg"} type={"submit"} style={{backgroundColor: "#293b34"}}
                    className={"px-5"} onClick={handleSubmit}>login</Button>


        </Form>

    </Container>

    <Modal show={isError} onHide={() => setIsError(false)}>
        <ModalHeader>
            <ModalTitle>Error</ModalTitle>
            <CloseButton></CloseButton>
        </ModalHeader>
        <ModalBody>
            <h5>Invalid username/password</h5>
        </ModalBody>
    </Modal>


</>)

}

export default ForgotPasswordPage;