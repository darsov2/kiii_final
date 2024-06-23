import React, {useState} from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

const Attraction =(props) => {
    const [showFullDesc, setShowFullDesc] = useState(false);
    return (
        <>
            
           <Container className="ps-4 py-5 my-3" style={{ borderLeft: "4px dashed black"}} >
                <Row >
                    <Col className="col-4">
                        <Image src={props.img} className="img-fluid w-100" style={{objectFit: "fill"}}></Image>
                    </Col>
                    <Col className="col-8">
                        <Row>
                        <h1
                            style={{ color: "#48573e", fontSize: "3em", textAlign: "left",  fontFamily: "Syne" }}
                        >
                            {props.title}
                        </h1>
                        </Row>
                        <Row>
                            <p style ={{fontSize: "1em", fontFamily: "Syne", textAlign: "justify"}}>
                                {!showFullDesc && (props.desc.substring(0, 350) + "...")}
                                {showFullDesc && props.desc}{" "}
                            </p>
                        </Row>
                        {props.desc.length > 120 && (
                            <Row>
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowFullDesc((prev) => !prev);
                                    }}
                                    href="#"
                                    style={{ textDecoration: "none", textAlign: "left" }}
                                >
                                    Read More
                                </a>
                            </Row>
                        )}
                    </Col>
                </Row>
           </Container>
        </>
    )
};

export default Attraction;