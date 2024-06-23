import React from "react";
import { Container, Image } from "react-bootstrap";

const Information = (props) => {
  return (
    <>
      <Container
        className="w-100 p-0"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <Container
          className="p-0"
          style={{ maxHeight: "30vh", minHeight: "30vh", overflow: "hidden" }}
        >
          <Image
            className="img-fluid"
            // style={{
            //   maxHeight: "100%",
            //   objectFit: "cover",
            //   overflow: "hidden",
            // }}
            src={props.img}
          />
        </Container>
        <Container className="pt-4 pb-2" style={{ backgroundColor: "white" }}>
          <h1
            style={{
              color: "red",
              textAlign: "left",
              fontSize: "1em",
              fontWeight: "bold",
            }}
          >
            PRACTICAL INFORMATION
          </h1>
          <p style={{ textAlign: "left", fontSize: "1.5em" }}>
            Your first time in Macedonia?
          </p>
        </Container>
      </Container>
    </>
  );
};

export default Information;
