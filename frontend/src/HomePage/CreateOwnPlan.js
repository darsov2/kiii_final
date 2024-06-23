import React, {useState} from "react";
import {Button, Container, FormSelect, Row} from "react-bootstrap";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./homePage.css";
import useGet from "../Hooks/useGet";

const CreateOwnPlan = () => {

    const {data, isLoading, setData, getData} = useGet('/api/plans')

    const [selectedPlan, setSelectedPlan] = useState(null)

    return (
        !isLoading && <>
            <Container
                fluid
                className="px-0 py-0 pe-3"
                style={{backgroundColor: "#66a792", height: "27vh"}}
            >
                <Container style={{paddingTop: "3%"}}>
                    <Row>
                        <Container className="mx-auto">
                            <h1
                                style={{color: "white", fontSize: "5em", fontFamily: "Syne"}}
                            >
                                Create a plan for one day trip
                            </h1>
                        </Container>
                    </Row>

                    <Row className={'mb-3'}>
                        <Container className="mx-auto">
                            <FormSelect size={'lg'} className={'w-50 m-auto'} onChange={(e) => setSelectedPlan(e.target.value)}>
                                <option value={null}></option>
                                {data.filter(x => x.ekskurzija).map(x => {
                                    return (
                                        <option value={x.planId}>{x.ime}</option>
                                    )
                                })}
                            </FormSelect>
                        </Container>
                    </Row>
                    <Row>
                        <Button
                            className="py-3 m-auto"
                            style={{
                                width: "15%",
                                backgroundColor: "#66a792",
                                color: "white",
                                border: "1px solid white",
                                fontFamily: "Syne",
                                fontSize: "1.2 em",
                            }}
                            onClick={() => {
                                if(selectedPlan !== null)
                                {
                                    window.location = '/itineraries/' + selectedPlan;
                                }
                            }}
                        >
                            GO
                        </Button>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default CreateOwnPlan;
