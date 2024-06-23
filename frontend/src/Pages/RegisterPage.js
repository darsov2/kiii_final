import React, {useState} from "react";
import {Col, Container, Image, Row, Button, Form, FormLabel, FormControl} from "react-bootstrap";
import NavbarCustom from "../Layout/Navbar";
import useFormData from "../Hooks/useFormData";
import {useAuth} from "../AuthContext";
import {authAPI} from "../Hooks/authAPI";
import {Navigate} from "react-router-dom";
import useCreate from "../Hooks/useCreate";

const RegisterPage = (props) => {
    const dummy = {
        name: '',
        email: '',
        password: '',
        username: '',
    }
    const {formData, onFormChange, setFormData} = useFormData()
    const Auth = useAuth()
    const {createEntity} = useCreate();
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const isLoggedIn = Auth.userIsAuthenticated();

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!(formData.username && formData.password && formData.name && formData.email)) {
            setIsError(true)
            setErrorMessage('Please, inform all fields!')
            return
        }

        const user = { username: formData.username,
            password: formData.password,
            name: formData.name,
            email: formData.email
        }

        try {
            // createEntity("/auth/signup", {
            //     ...user,
            // })
            const response = await authAPI.signup(user)
            window.location.href = "/confirm"
            // const { id, name, role } = response.data
            // const authdata = window.btoa(formData.username + ':' + formData.password)
            // const authenticatedUser = { id, name, role, authdata }
            //
            // Auth.userLogin(authenticatedUser)

            setFormData(dummy)
            setIsError(false)
            setErrorMessage('')
        } catch (error) {
            // handleLogError(error)
            if (error.response && error.response.data) {
                const errorData = error.response.data
                let errorMessage = 'Invalid fields'
                if (errorData.status === 409) {
                    errorMessage = errorData.message
                } else if (errorData.status === 400) {
                    errorMessage = errorData.errors[0].defaultMessage
                }
                setIsError(true)
                setErrorMessage(errorMessage)
            }
        }
    }

    if (isLoggedIn) {
        return <Navigate to='/' />
    }


    return(<>
        <NavbarCustom color="#29b34"></NavbarCustom>

        <Container className={"my-5"}>
            <Row>
                <h1>Create new Account</h1>
            </Row>
            <Row>
                <h6>Already registered? <a href={"/login"}> Login</a></h6>
            </Row>
        </Container>

        <Container className={"w-25"} style={{paddingBottom:"10%"}}>
            <Form>
                <Form.Group  className={"my-3 text-start"}>
                    <FormLabel className={"text-start"}>
                        NAME
                    </FormLabel>
                    <FormControl onChange={onFormChange} value={formData.name} name={'name'} type={"text"} size={"lg"} placeholder={"Mila Krsteva"}/>
                </Form.Group>


                <Form.Group className={"my-3 text-start"}>
                    <FormLabel className={"text-start"}>
                        EMAIL
                    </FormLabel>
                    <FormControl onChange={onFormChange} value={formData.email} name={'email'} type={"email"} size={"lg"} placeholder={"hello@trip2.mk"}/>
                </Form.Group>

                <Form.Group className={"my-3 text-start"}>
                    <FormLabel className={"text-start"}>
                        USERNAME
                    </FormLabel>
                    <FormControl onChange={onFormChange} value={formData.username} name={'username'} type={"email"} size={"lg"} placeholder={"hello@trip2.mk"}/>
                </Form.Group>

                <Form.Group className={"my-3 text-start"}>
                    <FormLabel className={"text-start"}>
                        PASSWORD
                    </FormLabel>
                    <FormControl onChange={onFormChange} value={formData.password} name={'password'} type={"password"} size={"lg"} placeholder={"********"}/>
                </Form.Group>

                {/*<Form.Group className={"my-3 text-start"}>*/}
                {/*    <FormLabel className={"text-end"}>*/}
                {/*        DATE OF BIRTH*/}
                {/*    </FormLabel>*/}

                {/*    <FormControl type={"date"} size={"lg"} placeholder={"Select Date"}>*/}

                {/*    </FormControl>*/}
                {/*</Form.Group>*/}
                {isError && <h3 style={{color: 'red'}}>{errorMessage}</h3>}

                <Button size={"lg"} type={"submit"} style={{backgroundColor:"#293b34"}} className={"px-5"} onClick={handleSubmit}>sign up</Button>

            </Form>


        </Container>





    </>)
}

export default RegisterPage;
