import { FaWalking } from "react-icons/fa";
import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";


const DurationToDestination = (props) => {
    return(
        <>
            <Container className="py-3" style={{textAlign: "left"}}>
                <FaWalking size="2.5em" style={{marginLeft: "-2em"}}/>  
                <p className="ps-3" style={{fontSize:"1em", display: "inline"}}>{props.text}</p>
            </Container>
        </>
    )
    

};

export default DurationToDestination