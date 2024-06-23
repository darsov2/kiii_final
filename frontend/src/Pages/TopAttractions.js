import {Container} from "react-bootstrap";
import NavbarCustom from "../Layout/Navbar";
import Attraction from "../HomePage/Attraction";
import DurationToDestination from "../HomePage/DurationToDestination";
import Footer from "../HomePage/Footer";
import useGet from "../Hooks/useGet";
import {useParams} from "react-router-dom";

const TopAttractions = () => {

    const params = useParams();
    const {data, setData, isLoading, getData} = useGet('/api/plans/find/' + params.planId)
    return (!isLoading &&
        <>
            <NavbarCustom color="#29b34"></NavbarCustom>
            <Container>
                <h1 className="py-5 my-3">{data.ime}</h1>
            </Container>

            {Array.from(new Set(data.znamenitosti.map(x => x.den))).sort((x1, x2) => x1 - x2).map(x => {
                const sizePerDay = data.znamenitosti.filter(z => z.den === x).length
                return (<>
                        <Container style={{backgroundColor: "#66a792"}}>
                            <h1 className={"text-start"} style={{color: "white"}}>Day {x}</h1>
                        </Container>
                        {data.znamenitosti.filter(y => y.den === x).sort((x1, x2) => {
                            return x1.redenBroj - x2.redenBroj
                        }).map((y, i) => {
                            return (
                                <>
                                    <Attraction img={y.znamenitost.sliki[0].slikaUrl}
                                                title={y.znamenitost.opis}
                                                desc={"The walk starts from the church dedicated to Christ as God's wisdom, known as St. Sophia of Ohrid. It is located in the old part of the city, i.e. in the heart of the city and is a monument of medieval Byzantine art. It is the largest painted gallery of bishops and deacons ever discovered in Eastern Orthodox and Byzantine art. Throughout history, St. Sofia, a centuries-old cathedral church of the Ohrid archdiocese, functioned as a mosque during the Turkish period, and in 1912 it regained its purpose. Today, numerous cultural events and concerts of \"Ohrid Summer\" are held in the luxurious vestibule and acoustic setting."}></Attraction>
                                    {(i < sizePerDay - 1) && <DurationToDestination text={"7min walking"}></DurationToDestination>}
                                </>)
                        })}
                    </>

                )

            })}

            {/*<Container style={{backgroundColor: "#66a792"}}>*/}
            {/*    <h1 className={"text-start"} style={{color: "white"}}>Day 1</h1>*/}
            {/*</Container>*/}
            {/*<Attraction img={"https://live.staticflickr.com/65535/48122814791_c4c66ae523_b.jpg"}*/}
            {/*            title={"St. Sofia Church"}*/}
            {/*            desc={"The walk starts from the church dedicated to Christ as God's wisdom, known as St. Sophia of Ohrid. It is located in the old part of the city, i.e. in the heart of the city and is a monument of medieval Byzantine art. It is the largest painted gallery of bishops and deacons ever discovered in Eastern Orthodox and Byzantine art. Throughout history, St. Sofia, a centuries-old cathedral church of the Ohrid archdiocese, functioned as a mosque during the Turkish period, and in 1912 it regained its purpose. Today, numerous cultural events and concerts of \"Ohrid Summer\" are held in the luxurious vestibule and acoustic setting."}></Attraction>*/}
            {/*<DurationToDestination ></DurationToDestination>*/}
            {/*<Attraction*/}
            {/*    img={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/43/91/17/received-10156460186043739.jpg?w=1200&h=-1&s=1"}*/}
            {/*    title={"St. Jovan Kaneo"}*/}
            {/*    desc={"On the southwestern part of the hill, on a natural platform that according to some is the most beautiful city location, right above Lake Ohrid, a church dedicated to the evangelist St. John the Theologian stands in a miraculous way. According to others, it is precisely this location of the church \"St. John the Theologian Kaneo\" that counts it among the most attractive churches in the city. Who once entered the church or, again, stopped and sat on the platform, in the most beautiful city location of Kaneo, and from there looked at the lake, the horizon or the setting sun, with the same need and love for that inner feeling of peace and humility that can hardly be described , comes back to Kaneo again and again."}></Attraction>*/}
            {/*<DurationToDestination text={"10min walking"}></DurationToDestination>*/}
            {/*<Attraction img={"https://macedonia-timeless.com/wp-content/uploads/2018/09/plaosnik-vozobnovuvanje.jpg"}*/}
            {/*            title={"Plaoshnik"}*/}
            {/*            desc={"The archaeological complex Plaoshnik is located on the higher Ohrid Hill between the Samoilova Tvrdina and the picturesque area of the Kaneo church. In a historical, cultural and spiritual sense, Plaoshnik is the most significant area for Macedonia and for the entire Slavic race. The most significant is precisely in this area the existence of the first Slavic university in Europe, which provides Ohrid with a prestigious name - Slavic Jerusalem."}></Attraction>*/}
            {/*<DurationToDestination text={"15min walking"}></DurationToDestination>*/}
            {/*<Attraction*/}
            {/*    img={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Samoilova_tvrdina_juli_2016_%2834%29.JPG/1280px-Samoilova_tvrdina_juli_2016_%2834%29.JPG"}*/}
            {/*    title={"Samoil's fortress"}*/}
            {/*    desc={"Samoil's fortress – one of the oldest preserved fortifications. Known as Samoil's fortress, the current form of the fortress originates from the period when Ohrid was the capital of Samoil's state. During that period, Ohrid grew into a medieval metropolis, protected by high walls and towers.\n" +*/}
            {/*        "In addition to Samuel's fortress, archaeological research is still being carried out today and valuable artifacts have been found. Among the recent discoveries of the 21st century, the discovery of the tomb with a golden mask and other grave goods, which confirms Ohrid's place in the world's archaeological treasure, is the most significant."}></Attraction>*/}


            {/*<Container style={{backgroundColor: "#66a792"}}>*/}
            {/*    <h1 className={"text-start"} style={{color: "white"}}>Day 2</h1>*/}
            {/*</Container>*/}


            {/*<Attraction img={"https://visitmacedonia.eu/wp-content/uploads/2019/01/ohrid-tadej-mulej-2.jpg"}*/}
            {/*            title={"Bay of bones"}*/}
            {/*            desc={"Ohrid is enriched with another cultural and historical landmark, as well as with a tourist attraction - the Water Museum - an exceptional archaeological complex, which is one of its kind in the region. On the southern coast of the Gradište peninsula in the Bay of Bones, a settlement was built, which in the past was 8500 m2 wide, and there were maybe 60 dwellings on it. Many remains of tools, objects made of ceramics, wood, stone and parts of animals such as deer antlers were discovered at the site.\n" +*/}
            {/*                "     The Bay of Bones is an authentic reconstruction that has been made in order to give tourists and visitors an extraordinary opportunity to experience time travel, from prehistoric times to ancient times, and vice versa."}></Attraction>*/}
            {/*<DurationToDestination text={"15min by car"}></DurationToDestination>*/}
            {/*<Attraction img={"https://cdn.vmacedonia.com/wp-content/uploads/2018/05/stnaummonastery.jpg"}*/}
            {/*            title={"St. Naum"}*/}
            {/*            desc={"30 km from Ohrid is the monastery of St. Naum Ohridski. St. Naum built the church of the Holy Archangels where he was buried as an elder of the monastery. It is characteristic of this holy place that besides Christians there were also Muslims among the pilgrims. They called this shrine \"Sari Saltik-Baba\" which means yellow-bearded father. St. Naum was known as a miracle healer and was highly respected throughout the Balkans. Some of his miracles are also painted on the frescoes in the monastery. At the foot of the monastery of St. Naum is the entrance to the National Park \"Galichitsa\" and the sources of the Black Dream River. They are also the largest and most attractive inflow of water in Lake Ohrid. "}></Attraction>*/}


            <Footer></Footer>

        </>
    )
}

export default TopAttractions;