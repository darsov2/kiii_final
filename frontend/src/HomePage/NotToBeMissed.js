import React from "react";
import PopularDestination from "./PopularDestination";
import { Col, Container, Row } from "react-bootstrap";
import StrippedContainter from "../Layout/StrippedContainer";
import PopularDestinationWide from "./PopularDestinationWide";

const NotToBeMissed = () => {
  return (
    <>
      <StrippedContainter vh="116.7vh">
        <Container
          fluid
          className="p-5 my-5"
          style={{width: "90%"}}
        //   style={{ backgroundColor: "#f7f7f7" }}
        >
          <Row className="mb-3">
            <h1 className="mb-3" style={{ textAlign: "left", color: "#91865c", fontFamily: "Syne", fontSize: "3.2em" }}>
              Not to be missed
            </h1>
            <hr
              style={{
                maxWidth: "10%",
                border: "3px solid #91865c",
                opacity: "1",
              }}
            />
            <h6
              style={{
                fontSize: "1em",
                textAlign: "left",
                color: "#91865c",
                fontFamily: "Syne",
              }}
            >
              CHOOSE THE TRAVEL PLAN YOU LIKE THE MOST TO MAKE YOUR STAY IN
              MACEODNIA UNFORGETTABLE
            </h6>
          </Row>
          <Row className="mb-5">
            <Col>
              <PopularDestinationWide
                img="https://image.arrivalguides.com/x/00/0f341feffb8633467548b4423dfef318.jpg"
                title="Historical Skopje"
                planId={244}
              />
            </Col>
            <Col>
              <PopularDestinationWide
                img="https://ak-d.tripcdn.com/images/100s1f000001gx545ED87_D_1180_558.jpg"
                title="Ohrid itineraies"
                planId={254}
              />
            </Col>
            <Col>
              <PopularDestinationWide
                img="https://i0.wp.com/2.bp.blogspot.com/-r4voLH4fqsw/WjTIWj1_1DI/AAAAAAAABlE/cj1c2vZ4bwEvl-jO1CqyhuMd8eRxolaSwCKgBGAs/s1600/heraklea-bitola-8162.jpg?ssl=1"
                title="Bitola archeological"
                planId={243}
              />
            </Col>
          </Row>
        </Container>
      </StrippedContainter>
    </>
  );
};

export default NotToBeMissed;
