import React, {useState} from "react";
import {
    Button,
    CloseButton,
    Container,
    Form,
    FormControl,
    FormLabel,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    Row
} from "react-bootstrap";
import NavbarCustom from "../Layout/Navbar";
import {useAuth} from "../AuthContext";
import useFormData from "../Hooks/useFormData";
import {Navigate} from "react-router-dom";
import {authAPI} from "../Hooks/authAPI";

const LogInPage = () => {

    const Auth = useAuth();
    const isLoggedIn = Auth.userIsAuthenticated();

    const dummy = {
        username: '',
        password: ''
    }

    const {
        formData,
        onFormChange,
        setFormData
    } = useFormData(dummy);

    const [isError, setIsError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("VO SUBMIT")

        if (!(formData.username && formData.password)) {
            setIsError(true)
            return
        }

        try {
            const response = await authAPI.authenticate(formData.username, formData.password)
            console.log(response)
            if(response.status === 401)
            {
                setIsError(true);
                return;
            }
            const {id, name, role} = response.data

            const authdata = window.btoa(formData.username + ':' + formData.password)
            const authenticatedUser = {id, name, role, authdata}

            Auth.userLogin(authenticatedUser)

            setFormData(dummy)
            setIsError(false)
        } catch (error) {
            console.log(error)
            setIsError(true)
        }
    }


    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    return (<>
        <NavbarCustom color="#29b34"></NavbarCustom>

        <Container className={""} style={{marginTop: "10%"}}>
            <Row>
                <h1>Login</h1>
            </Row>
            <Row>
                <h6>Not registered yet ? <a href={"/register"}> Register here !</a></h6>
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
                        PASSWORD
                    </FormLabel>

                    <FormControl onChange={onFormChange} value={formData.password} name={'password'} type={"password"} size={"lg"}
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

export default LogInPage;