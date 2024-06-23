import StrippedContainter from "../Layout/StrippedContainer";
import {Container, Row} from "react-bootstrap";
import React from "react";
import useGetWiki from "../Hooks/useGetWiki";

const Wiki = (props) => {

    const  {data: dataWiki, setData: setDataWiki, isLoading: isLoadingWiki, getData: getDataWiki} = useGetWiki(true, true, 5000, props.wikiData)

    console.log(props.wikiData)

    return (
        <>
            <StrippedContainter vh={"56.8vh"}>
                <Container>
                    <Row className="py-5">
                        <h1 style={{fontSize: "3.2em"}}>About</h1>
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
                            {(props.wikiData.length < 100 && !isLoadingWiki) && Object.values(dataWiki.query["pages"])[0].extract}
                            {props.wikiData.length > 100 && props.wikiData}
                        </p>
                    </Row>
                </Container>
            </StrippedContainter>
        </>
    )
}
export default Wiki;