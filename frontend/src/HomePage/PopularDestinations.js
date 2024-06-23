import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Information from "./information";
import PopularCity from "./PopularCity";

const PopularDestinations = () => {
  return (
    <>
      <Container
        fluid
        className="p-5 my-5"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <Row className="mb-3">
          <h1 className="mb-3" style={{ textAlign: "left", fontFamily: "Syne" }}>
            Popular destinations
          </h1>
          <hr
            style={{
              maxWidth: "7%",
              border: "3px solid #fdc40a",
              opacity: "1",
            }}
          />
        </Row>

        <Row className="mb-3">
          <Col>
            <PopularCity onClick={() => window.location = '/discover/244'} text="SKOPJE" img="https://content.r9cdn.net/rimg/dimg/98/9a/27fe7b67-city-18146-165110bb4da.jpg?width=1366&height=768&xhint=1084&yhint=1010&crop=true" />
          </Col>
          <Col>
            <PopularCity onClick={() => window.location = '/discover/254'}  text="OHRID" img="https://ak-d.tripcdn.com/images/100s1f000001gx545ED87.jpg?proc=source%2Ftrip" />
          </Col>
          <Col>
            <PopularCity onClick={() => window.location = '/discover/248'} text="MAVROVO" img="https://macedonia-timeless.com/wp-content/uploads/2018/08/mavrovo-turizam.jpg" />
          </Col>
        </Row>

        <Row>
          <Col>
            <PopularCity onClick={() => window.location = '/discover/243'} text="BITOLA" img="https://kajak.mk/static/d48170d4-529e-7abf-65a4-bd125918523f.jpg" />
          </Col>
          <Col>
            <PopularCity onClick={() => window.location = '/discover/251'} text="KRUSHEVO" img="https://kultura.gov.mk/wp-content/uploads/2023/03/Krusevo.jpg" />
          </Col>
          <Col>
            <PopularCity onClick={() => window.location = '/discover/242'} text="KRATOVO" img="https://www.mywanderlust.pl/wp-content/uploads/2021/02/kratovo-macedonia-34.jpg" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PopularDestinations;
