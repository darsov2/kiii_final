import React, {useEffect, useState} from "react";
import {Col, Container, Image, Row, Button, Form, FormLabel, FormControl} from "react-bootstrap";
import NavbarCustom from "../Layout/Navbar";
import useFormData from "../Hooks/useFormData";
import {useAuth} from "../AuthContext";
import {authAPI} from "../Hooks/authAPI";
import {Navigate} from "react-router-dom";
import useGet from "../Hooks/useGet";
import useCreate from "../Hooks/useCreate";

const EditProfilePage = (props) => {
    const dummy = {
        name: '',
        email: '',
        password: ''
    }
    const {formData, onFormChange, setFormData} = useFormData()
    const Auth = useAuth()
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const isLoggedIn = Auth.userIsAuthenticated();
    const loggedInUser = Auth.getUser();





    const {data, isLoading, getData, setRefresh} = useGet('/auth/user/' + loggedInUser.id)
    !isLoading && console.log(data)

    useEffect(() => {
        if (!isLoading && data) {
            setFormData({
                username: data.username,
                name: data.ime,
                email: data.email
            });
        }
    }, [isLoading]);

    if (!isLoggedIn) {
        return <Navigate to='/login' />
    }


    const handleSubmit = async (e) => {

        console.log("VO SUBMIT")
        e.preventDefault()
        console.log(formData)

        if (!(formData.password && formData.name && formData.email)) {
            setIsError(true)
            setErrorMessage('Please, inform all fields!')
            return
        }

        console.log('oo')

        const user = { username: formData.username,
            password: formData.password,
            name: formData.name,
            email: formData.email
        }

        try {
            const response = await authAPI.edit(user)
            console.log(response.data)
            const { id, name, role } = response.data
            const authdata = window.btoa(formData.username + ':' + formData.password)
            const authenticatedUser = { id, name, role, authdata }

            Auth.userLogin(authenticatedUser)

            window.location = '/'

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



    //setFormData(loggedInUser)


    return(<>
        <NavbarCustom color="#29b34"></NavbarCustom>

        <Container className={"my-5"}>
            <Row>
                <h1>Edit your account</h1>
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
                        PASSWORD
                    </FormLabel>
                    <FormControl onChange={onFormChange} value={formData.password} name={'password'} type={"password"} size={"lg"} placeholder={"********"}/>
                </Form.Group>

                {isError && <h3 style={{color: 'red'}}>{errorMessage}</h3>}
                <Button size={"lg"} type={"submit"} style={{backgroundColor:"#293b34"}} className={"px-5"} onClick={handleSubmit}>save</Button>

            </Form>


        </Container>





    </>)
}

export default EditProfilePage;
