import React, {useState} from "react";
import {Row, Container, Col, Button} from "react-bootstrap";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../HomePage/homePage.css";

// import "leaflet/dist/leaflet.css";
import Nav from "react-bootstrap/Nav";
import {CgProfile} from "react-icons/cg";

import NavDropdown from "react-bootstrap/NavDropdown";
import Counter from "../HomePage/Counter";
import PopularDestination from "../HomePage/PopularDestination";
import Information from "../HomePage/information";
import InformationOfInterest from "../HomePage/InformationOfInterest";
import Footer from "../HomePage/Footer";
import Itinerary from "../HomePage/Itinerary";
import CreateOwnPlan from "../HomePage/CreateOwnPlan";
import Navbar from "../Layout/Navbar";
import NavbarCustom from "../Layout/Navbar";
import Hero from "../HomePage/Hero";
import StrippedContainter from "../Layout/StrippedContainer";
import WelcomeMessage from "../HomePage/WelcomeMessage";
import Attraction from "../HomePage/Attraction";
import DurationToDestination from "../HomePage/DurationToDestination";
import NotToBeMissed from "../HomePage/NotToBeMissed";
import Review from "../HomePage/Review";
import Map from "../Map/Map";
import RegionMap from "../HomePage/RegionMap";
import FeedbackForm from "../AboutUs/Feedback/FeedbackForm";

export default function HomePage() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <>
            <div className="parallax">
                <div className="z-proba">
                    <NavbarCustom color={""}></NavbarCustom>
                    <Hero showStats="true" text={"VISIT<br/>MACEDONIA"}/>
                </div>
                <div className="overlay"></div>
            </div>

            <WelcomeMessage></WelcomeMessage>

            <div style={{borderTop: "2px solid #91865c", borderBottom: "2px solid #91865c",}}>
                <Container className="my-4">
                    <Row className="mb-3">
                        <h1
                            style={{
                                color: "#91865c",
                                fontSize: "3.5em",
                                fontFamily: "Syne",
                            }}
                        >
                            Popular Destinations
                        </h1>
                    </Row>
                    <Row className="gx-5 mb-5">
                        <Col>
                            <PopularDestination
                                img="https://mytravelleader.com/wp-content/uploads/2023/10/Discovering-Lake-Ohrid-a-budget-friendly-gem-in-North-Macedonia.jpg"
                                title="Bay of Bones"
                                znamenitostId={2330}
                            />
                        </Col>
                        <Col>
                            <PopularDestination
                                img="https://static.wixstatic.com/media/513e48_10f043f7012e4880a4fbc5f7f97509c3~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_1600,h_1066,al_c,q_90/file.jpg"
                                title="Stone Bridge"
                                znamenitostId={2329}
                            />
                        </Col>
                        <Col>
                            <PopularDestination
                                img="https://i0.wp.com/2.bp.blogspot.com/-r4voLH4fqsw/WjTIWj1_1DI/AAAAAAAABlE/cj1c2vZ4bwEvl-jO1CqyhuMd8eRxolaSwCKgBGAs/s1600/heraklea-bitola-8162.jpg?ssl=1"
                                title="Heraclea Lyncestis"
                                znamenitostId={2416}
                            />
                        </Col>
                    </Row>

                    <Container className={'my-5 py-5'} fluid>
                        <RegionMap></RegionMap>
                    </Container>
                </Container>
            </div>

            <NotToBeMissed/>

            {/* <Container>
        <Itinerary
          title="Ohrid in 2 Days - Top Attractions"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          img="https://ak-d.tripcdn.com/images/100s1f000001gx545ED87_D_1180_558.jpg"
        />
      </Container>

      <CreateOwnPlan />

      <Attraction
        img="https://bigorski.org.mk/wp-content/uploads/2020/10/bigorski-slider-panorama.jpg"
        title="Proben Naslof"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      ></Attraction>

      

      <DurationToDestination text="7min walking">
      </DurationToDestination>

      <Attraction
        img="https://bigorski.org.mk/wp-content/uploads/2020/10/bigorski-slider-panorama.jpg"
        title="Proben Naslof"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      ></Attraction> */}

            <Container fluid className={'px-0 m-0'}>
                <Map></Map>
            </Container>

            <Container fluid className="px-5 m-0">
                <InformationOfInterest></InformationOfInterest>
            </Container>

            <Container fluid className={'px-5 m-0'}>
                <FeedbackForm/>
            </Container>

            {/*<Review></Review>*/}

            <Footer></Footer>
        </>
    );
}
