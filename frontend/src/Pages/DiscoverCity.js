import React, {useState} from "react";
import "../HomePage/homePage.css";
import NavbarCustom from "../Layout/Navbar";
import Hero from "../HomePage/Hero";
import {Button, Col, Container, FormControl, FormGroup, FormLabel, FormSelect, Row} from "react-bootstrap";
import StrippedContainter from "../Layout/StrippedContainer";
import PopularDestination from "../HomePage/PopularDestination";
import Itinerary from "../HomePage/Itinerary";
import Footer from "../HomePage/Footer";
import CreateOwnPlan from "../HomePage/CreateOwnPlan";
import useGet from "../Hooks/useGet";
import useGetWiki from "../Hooks/useGetWiki";
import Gallery from "../HomePage/Gallery";
import Map2 from "../Map/Map2";
import {useParams} from "react-router-dom";

const DiscoverCity = () => {

    const params = useParams();

    const {data, setData, isLoading, getData} = useGet(`/api/gradovi/${params.cityId}`);
    const {
        data: dataWiki,
        setData: setDataWiki,
        isLoading: isLoadingWiki,
        getData: getDataWiki
    } = useGetWiki(true, true, 5000, 'Skopje')

    const [attractionsFilter, setAttractionsFilter] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('')
    const partitionBy3 = (arr) =>
        Array.from({length: Math.ceil(arr.length / 3)}, (v, i) =>
            arr.slice(i * 3, i * 3 + 3)
        );
    const [selectedPlan, setSelectedPlan] = useState(null);

    //!isLoadingWiki && console.log(dataWiki)

    return (
        !isLoading && (<>
                <div className="parallax parallax-discover"
                     style={{background: `url(${data.sliki[0].slikaUrl}) fixed center/cover no-repeat`}}>
                    <div className="z-proba">
                        <NavbarCustom color={""}></NavbarCustom>
                        <Hero showStats="false" text={`DISCOVER<br/>${data.ime.toUpperCase()}`}/>
                    </div>
                    <div className="overlay"></div>
                </div>

                <Container fluid className="py-5">
                    <Container className="w-50 py-5">
                        <Row className="mb-3">
                            <h1>Create Your {data.ime} Guide</h1>
                        </Row>
                        <Row>
                            <Col className="col-10">
                                <FormSelect
                                    size="lg"
                                    name="city"
                                    placeholder="City"
                                    style={{fontSize: "1.2em", fontFamily: "Syne"}}
                                    onChange={(e) => setSelectedPlan(e.target.value)}
                                >
                                    <option>Choose your plan..</option>
                                    {!isLoading && data.planovi.map(plan => {
                                        return (<option value={plan.planId}>{plan.ime}</option>)
                                    })}
                                </FormSelect>
                            </Col>
                            <Col className="col-2">
                                <Button
                                    size="lg"
                                    className="px-5"
                                    style={{
                                        backgroundColor: "gray",
                                        fontSize: "1.2em",
                                        fontFamily: "Syne",
                                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                    }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        console.log(selectedPlan)
                                        if (selectedPlan != null) {
                                            window.location = `/itineraries/${selectedPlan}`
                                        }
                                    }}
                                >
                                    GO
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <StrippedContainter vh={"56.8vh"}>
                    <Container>
                        <Row className="py-5">
                            <h1 style={{fontSize: "3.2em"}}>About The City</h1>
                        </Row>
                        <Row>
                            <p id="city-info" style={{fontSize: "1.6em", fontFamily: "Syne"}}>
                                {/*Ohrid is the main culturally historical city of the Republic of*/}
                                {/*Macedonia, a city with many contents and beauties, which if you*/}
                                {/*try to look for them at least a little, you will see that they are*/}
                                {/*endless. Tourists and visitors from different cities from*/}
                                {/*Macedonia, but also from different countries of the world come*/}
                                {/*here in larger or smaller numbers and everyone falls in love with*/}
                                {/*it at first sight. No one would remain indifferent, walking on the*/}
                                {/*cobblestones on which several millennia of history are written, or*/}
                                {/*enjoying the caress of the bright glare of the sun from the waters*/}
                                {/*of Lake Ohrid. In Ohrid you can find too many cultural and*/}
                                {/*historical monuments, but apart from them, there are 365*/}
                                {/*churches-monasteries in the city, known to the people as "one*/}
                                {/*church or monastery for every day of the year". Because of this,*/}
                                {/*the city is known as the Balkan and European Jerusalem. Ohrid is*/}
                                {/*also known as the "city of light" which is a literal translation*/}
                                {/*of its old name, Lychnid.*/}
                                {!isLoadingWiki && dataWiki.query["pages"][29618].extract}
                            </p>
                        </Row>
                    </Container>
                </StrippedContainter>

                <div
                    style={{
                        borderTop: "2px solid #91865c",
                        borderBottom: "2px solid #91865c",
                    }}
                >
                    <Container className="my-4">
                        <Row className="mb-3">
                            <h1
                                style={{
                                    // color: "#91865c",
                                    fontSize: "3.5em",
                                    fontFamily: "Syne",
                                }}
                            >
                                Top Attractions
                            </h1>
                        </Row>
                        <Row className={'mb-3 d-flex flex-row justify-content-center'}>
                            <Col>
                                <FormGroup>
                                    <FormLabel>
                                        Filter Attractions
                                    </FormLabel>
                                    <FormControl onChange={(e) => {
                                        //console.log(e.target.value)
                                        setAttractionsFilter(e.target.value)
                                        console.log(attractionsFilter)
                                    }} className={'w-50 m-auto justify-self-center'}
                                                 type={'text'}></FormControl>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <FormLabel>
                                        Filter Attractions
                                    </FormLabel>
                                    <FormSelect onChange={(e) => {
                                        //console.log(e.target.value)
                                        setCategoryFilter(e.target.value)
                                        console.log(attractionsFilter)
                                    }} className={'w-50 m-auto justify-self-center'}
                                                type={'text'}>
                                        {Array.from(new Set(data.znamenitosti.map(x => x.tipZnamenitost.tip))).map(x => {
                                            return (
                                                <option value={x}>{x}</option>
                                            )
                                        })}
                                    </FormSelect>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            {!isLoading && partitionBy3(
                                data.znamenitosti.filter(x => x.sliki.length > 0 &&
                                    x.opis.toLowerCase().includes(attractionsFilter.toLowerCase()) &&
                                    x.tipZnamenitost.tip.includes(categoryFilter))
                            ).map((x, index) => (
                                <Row key={index} className="gx-5 mb-5">
                                    {x.map(znamenitost => (
                                        <Col key={znamenitost.id}>
                                            <PopularDestination
                                                img={znamenitost.sliki[0].slikaUrl}
                                                title={znamenitost.opis}
                                                znamenitostId={znamenitost.znamenitostId}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            ))}
                        </Row>
                    </Container>
                </div>

                <Container fluid className="p-5"
                           style={{backgroundColor: "#f7f7f7"}}>
                    <Container>
                        <Row className="mt-3">
                            <h1
                                style={{
                                    // color: "#91865c",
                                    fontSize: "3.5em",
                                    fontFamily: "Syne",
                                }}
                            >
                                Popular itineraries
                            </h1>
                        </Row>
                        {
                            !isLoading && data.planovi.map((x, i) => {
                                console.log(x);
                                return (
                                    <Row className="my-5">
                                        <Itinerary
                                            title={x.ime}
                                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                                            img={x.znamenitosti[0].znamenitost.sliki[0].slikaUrl}
                                            planId={x.planId}
                                        />
                                    </Row>
                                )
                            })
                        }
                    </Container>
                </Container>

                <Container fluid className="py-5">
                    <Container>
                        <CreateOwnPlan/>
                    </Container>
                    <Container className="my-5">
                        <Button className="p-3 w-25" style={{
                            backgroundColor: "white",
                            border: "2px solid gray",
                            color: "gray",
                            fontSize: "1.2em",
                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px"
                        }}>VIEW OTHER DESTINATIONS</Button>
                    </Container>
                </Container>

                {!isLoading && <Container fluid className={'px-0 m-0'}>
                    <Map2 data={data.znamenitosti} center={[data.latitude, data.longitude]}></Map2>
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

                <Footer/>
            </>
        )
    );
};

export default DiscoverCity;
