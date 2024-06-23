import React from "react";
import {Container, Image} from "react-bootstrap";

const PopularDestinationWide = (props) => {
    return (
        <>
            <Container
                onClick={() => window.location = '/discover/' + props.planId}
                className="w-100 p-0 "
                style={{
                    border: "1px solid black",
                    borderBottomLeftRadius: "10%",
                    WebkitBorderBottomRightRadius: "10%",
                    backgroundColor: "white"
                }}
            >
                <Container
                    className="h-75 p-0"
                    style={{minHeight: "35vh", maxHeight: "35vh", overflow: "hidden"}}
                >
                    <Image
                        className="img-fluid"
                        style={{
                            width: "50.1vh",
                            height: "33vh",
                            objectFit: "cover",
                            overflow: "hidden",
                        }}
                        src={props.img}
                    ></Image>
                </Container>
                <Container>
                    <h1 style={{fontSize: "2.2em"}}>{props.title}</h1>
                </Container>
            </Container>
        </>
    );
};

export default PopularDestinationWide;
