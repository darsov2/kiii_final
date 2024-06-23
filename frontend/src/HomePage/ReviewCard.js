import React, {useState} from "react";
import {Card, CardBody, CardText, CardTitle, Col, Container, Image, Row} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Review from "./Review";
import Circle from "./Circle";

const ReviewCard = (props) => {
    console.log(props)

    return (
        <>
            <Card >
                <CardBody>
                    <CardTitle style={{fontSize: "3em"}}>
                        {props.mislenje.korisnik.username}
                    </CardTitle>
                    <CardText style={{fontSize: "1.5em", paddingBottom: "2%"}}>
                        {props.mislenje.opis}
                    </CardText>

                    <Row className="mb-3 ps-4 d-flex flex-row justify-content-left">

                        {Array.of(0, 1, 2, 3, 4).map((x) => (
                            <Circle
                                key={x}
                                small = {"true"}
                                hovered={x < props.mislenje.ocenka ? true : false}
                            />
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}

export default ReviewCard