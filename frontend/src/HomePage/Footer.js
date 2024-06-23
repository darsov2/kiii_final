import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./homePage.css";

const Footer = () => {
  return (
    <>
      <Container
        className="py-5 mb-3 "
        fluid
        style={{ backgroundColor: "#293b34", minHeight: "50vh" }}
      >
        <Row className="gx-0">
          <Col className="">
            <hr
              className="ms-5"
              style={{
                maxWidth: "100%",
                marginTop: "15%",
                border: "1px solid #ffffff",
                opacity: "1",
              }}
            />
          </Col>
          <Col>
            <Image
              style={{ maxHeight: "15vh" }}
              src="https://i.ibb.co/k300MJd/Screenshot-1.png"
            />
          </Col>
          <Col>
            <hr
              className="me-5"
              style={{
                maxWidth: "100%",
                marginTop: "15%",
                border: "1px solid #ffffff",
                opacity: "1",
              }}
            />
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <h1
              className="blabla"
              style={{
                color: "white",
                fontWeight: 400,
                fontFamily: "Archivo Black !important",
                fontSize: "3.5rem",
                lineHeight: "3rem",
                textDecoration: "bold",
              }}
            >
              TRIP<br></br>2MK.
            </h1>
          </Col>
          <Col className="col-auto">
            <Row className="mx-auto">
              <Col className="col-auto">
                <FaFacebook color="white" size="3.5em" onClick={() => window.location="https://www.facebook.com/"}/>
              </Col>
              <Col className="col-auto">
                <FaInstagram color="white" size="3.5em" />
              </Col>
              <Col className="col-auto">
                <AiFillTwitterCircle color="white" size="3.5em" />
              </Col>
            </Row>
          </Col>
          <Col>
            <Container className="mx-auto w-50" style={{ color: "white" }}>
              <h5 className="text-start">ABOUT US</h5>
              <h5 className="text-start"><a href={"/about"} style={{ color: "white" }}>About</a></h5>
              <h5 className="text-start"><a href={"/"} style={{ color: "white" }}>Contacts</a></h5>
              <h5 className="text-start"><a href={"/"} style={{ color: "white" }}>Cookie policy</a></h5>
            </Container>
          </Col>
        </Row>

        <Row>
          <Container>
            <h5 style={{ color: "white" }}> &copy; ALL RIGHTS RESERVED</h5>
            <h5 style={{ color: "white" }}>VISDM</h5>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
