import React, {useState} from "react";
import "../HomePage/homePage.css";
import Hero from "../HomePage/Hero";
import NavbarCustom from "../Layout/Navbar";
import {Button, Col, Container, FormSelect, Row} from "react-bootstrap";
import PopularDestinations from "../HomePage/PopularDestinations";
import Footer from "../HomePage/Footer";
import useGet from "../Hooks/useGet";

const PlanYourTrip = () => {

    const {data, isLoading, setData, getData} = useGet('/api/gradovi');
    const [selectedCity, setSelectedCity] = useState(null);

    return (
        <>
            <div className="parallax parallax-plantrip">
                <div className="z-proba">
                    <NavbarCustom color=""></NavbarCustom>
                    <Hero showStats="false" text={"PLAN<br/>YOUR TRIP"}/>
                </div>
                <div className="overlay"></div>
            </div>

            <Container fluid className="py-5">
                <Container className="w-50 py-5">
                    <Row>
                        <Col className="col-9">
                            <FormSelect autoComplete={true} size="lg" type="text" name="city" placeholder="City"
                                        style={{fontSize: "1.2em", fontFamily: "Syne"}}
                            onClick={(e) => setSelectedCity(e.target.value)}>
                                {!isLoading && data.map(x => {
                                    return (
                                        <option value={x.gradId}>
                                            {x.ime}
                                        </option>
                                    )
                                })}
                            </FormSelect>
                        </Col>
                        <Col className="col-3">
                            <Button href="/discover/123" size="lg" style={{
                                backgroundColor: "gray",
                                fontSize: "1.2em",
                                fontFamily: "Syne",
                                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                            }}
                            onClick={(e) => {
                                e.preventDefault()
                                if(selectedCity != null) {
                                    window.location = '/discover/' + selectedCity
                                }

                            }}>Search</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container id={"destinations"} fluid className="px-5">
                <PopularDestinations/>
            </Container>

            <Footer/>
        </>
    );
};

export default PlanYourTrip;
