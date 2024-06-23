import React, {useEffect} from "react";
import "../HomePage/homePage.css";
import NavbarCustom from "../Layout/Navbar";
import Hero from "../HomePage/Hero";
import {Button, CarouselItem, Col, Container, FormSelect, Row} from "react-bootstrap";
import StrippedContainter from "../Layout/StrippedContainer";
import PopularDestination from "../HomePage/PopularDestination";
import Itinerary from "../HomePage/Itinerary";
import Footer from "../HomePage/Footer";
import CreateOwnPlan from "../HomePage/CreateOwnPlan";
import useGet from "../Hooks/useGet";
import axios from "../axios";
import useGetWiki from "../Hooks/useGetWiki";
import {useParams} from "react-router-dom";
import Map2 from "../Map/Map2";
import Gallery from "../HomePage/Gallery";
import RegionMap from "../HomePage/RegionMap";
import Review from "../HomePage/Review";
import {useAuth} from "../AuthContext";
import ReviewCard from "../HomePage/ReviewCard";
import Carousel from "react-bootstrap/Carousel";
import Wiki from "../HomePage/Wiki";

const DiscoverSight = () => {
    const params = useParams();

    const Auth = useAuth();
    const isLoggedIn = Auth.userIsAuthenticated();

    const {data, setData, isLoading, getData} = useGet(`/api/landmarks/${params.sightId}`);
    const {
        data: reviews,
        setData: setReviews,
        isLoading: reviewsIsLoading,
        getData: reviewsGetData,
        setRefresh
    } = useGet(`/api/reviews/find/city/${params.sightId}`);
    !isLoading && (console.log(data))

    //!isLoadingWiki && console.log(dataWiki)

    return (
        !isLoading && (<>
                <div className="parallax parallax-discover"
                     style={{background: `url(${data.sliki[0].slikaUrl}) fixed center/cover no-repeat`}}>
                    <div className="z-proba">
                        <NavbarCustom color={""}></NavbarCustom>
                        <Hero showStats="false" text={`${data.opis.toUpperCase()}`}/>
                    </div>
                    <div className="overlay"></div>
                </div>

                {!isLoading && <Wiki wikiData={data.wikiData}></Wiki>}

                {!isLoading && <Container fluid className={'px-0 m-0'}>
                    <Map2 landmark={'true'} data={[data]} center={[data.latitude, data.longtitude]}></Map2>
                </Container>
                }


                <StrippedContainter vh={"56.8vh"}>
                    <Container>
                        <Row className="py-5">
                            <h1 style={{fontSize: "3.2em"}}>Gallery</h1>
                        </Row>
                        <Row>
                            <Gallery images={data.sliki}></Gallery>
                        </Row>
                    </Container>
                </StrippedContainter>

                <Container className={"py-5"}>
                    <Carousel>
                        {!reviewsIsLoading && reviews.map((x) => {
                            return (
                                <CarouselItem className={"p-5"}>
                                    <ReviewCard mislenje={x}/>
                                </CarouselItem>
                            )
                        })
                        }
                    </Carousel>
                </Container>


                {isLoggedIn && <Review refresh={setRefresh} znamenitostId={params.sightId}>
                </Review>}
                {!isLoggedIn && <Container className={'mb=3'}>
                    <h1>In order to leave a review, please log in!</h1>
                    <Button href={'/login'}>Log In</Button>
                </Container>}


                <Footer/>


            </>
        )


    );
};

export default DiscoverSight;
