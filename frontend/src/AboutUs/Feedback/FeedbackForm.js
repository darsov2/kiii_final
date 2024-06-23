import React, {useState} from "react";
import {Button, Col, Container, FloatingLabel, FormControl, Row} from "react-bootstrap";
import {TbMoodAngry, TbMoodConfuzed, TbMoodEmpty, TbMoodSmile, TbMoodTongueWink } from "react-icons/tb";
import useCreate from "../../Hooks/useCreate";
import useFormData from "../../Hooks/useFormData";


const FeedbackForm = () => {

    const [numStars, setNumStars] = useState(0);
    const {createEntity} = useCreate();
    const defaultData = {
        numStars: numStars,
        message: ''
    }

    const {formData, onFormChange, setFormData} = useFormData(defaultData)

    return (
        <Container className={""} style={{paddingTop: "5%", paddingBottom: "5%"}}>
            <Row className="mb-3">
                <Col>
                    <h1 style={{fontSize: "3em", fontFamily: "Syne", fontWeight: "normal"}}>Share your experience</h1>
                </Col>
            </Row>
            <Row className={'my-3 py-3 justify-content-center'}
                 style={{borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                <Row className={'mb-3'}>
                    <h1 style={{fontSize: "1em", fontFamily: "Syne", fontWeight: "normal"}}>What is
                        your opinion on this page?</h1>
                </Row>
                <Row className={'w-50'}>
                    <Col>
                        <TbMoodAngry onClick={() => setNumStars(1)} style={numStars === 1 ? {color: 'green'} : {}} size={'4em'}/>
                    </Col>
                    <Col>
                        <TbMoodConfuzed onClick={() => setNumStars(2)} style={numStars === 2 ? {color: 'green'} : {}} size={'4em'}/>
                    </Col>
                    <Col>
                        <TbMoodEmpty onClick={() => setNumStars(3)} style={numStars === 3 ? {color: 'green'} : {}} size={'4em'}/>
                    </Col>
                    <Col>
                        <TbMoodSmile onClick={() => setNumStars(4)} style={numStars === 4 ? {color: 'green'} : {}} size={'4em'}/>
                    </Col>
                    <Col>
                        <TbMoodTongueWink  onClick={() => setNumStars(5)} style={numStars === 5 ? {color: 'green'} : {}} size={'4em'}/>
                    </Col></Row>
            </Row>
            <Row className={'justify-content-center mb-3'}>
                <Row className={'mb-3'}>
                    <h1 style={{fontSize: "1em", fontFamily: "Syne", fontWeight: "normal"}}>Please leave your feedback bellow</h1>
                </Row>
                <Row className={'w-75'}>
                    <FormControl
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{height: '200px'}}
                        onChange={onFormChange}
                        value={formData.message}
                        name={'message'}
                    />
                </Row>
            </Row>
            <Row className={'justify-content-center'}>
                <Col md={"auto"} className="d-flex my-3">
                    <Button
                        onClick={() => {
                            // setFormData(prevState => {
                            //     return {
                            //         ...prevState,
                            //         ocenka: hoverArr.filter(Boolean).length
                            //     }
                            // })
                            // alert(formData)
                            console.log(formData)
                            createEntity("/api/feedback/add", {
                                ...formData,
                            })
                            setNumStars(0)
                            setFormData(defaultData)
                        }}
                        style={{backgroundColor: "green", fontSize: "1em", fontFamily: "Syne"}}>Submit</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default FeedbackForm;