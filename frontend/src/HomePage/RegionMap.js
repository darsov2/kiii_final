import React, {useState} from "react";
import {Col, Row, Table} from "react-bootstrap";
import {IoMdPin} from "react-icons/io";
import useGet from "../Hooks/useGet";


const RegionMap = (props) => {
    const [selectedRegion, setSelectedRegion] = useState('Skopje Region');
    const [clickedRegion, setClickedRegion] = useState('Skopje Region');
    const [clicked, setClicked] = useState(false)

    const {data, setData, getData, isLoading} = useGet('/api/landmarks')

    return (
        !isLoading &&
        <>
            <Row>
                <Col>
                    <img src={'https://i.ibb.co/n8Npz8c/mapmk.png'} useMap={"#image-map"}/>

                    <map name="image-map">
                        <area onMouseLeave={() => setSelectedRegion(null)}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setClicked(true);
                                  setClickedRegion('Polog Region')
                                  setSelectedRegion('Polog Region')
                              }}
                              onMouseOver={() => setSelectedRegion('Polog Region')} target="" alt="Polog" title="Polog"
                              href=""
                              coords="28,127,23,131,21,139,24,149,18,154,14,162,13,168,16,175,15,182,14,190,17,196,21,205,24,211,31,214,36,218,42,217,42,223,49,226,65,233,65,227,66,221,72,217,70,208,76,204,74,197,66,194,68,188,72,189,76,184,84,182,91,184,97,187,101,187,104,192,112,189,119,187,119,176,114,167,119,151,129,149,140,134,150,133,154,138,156,130,144,116,147,102,139,95,145,86,142,82,148,79,145,73,141,75,139,68,145,66,154,65,153,57,148,52,142,50,139,41,130,41,120,47,112,52,100,55,93,58,86,66,82,72,71,73,71,80,64,80,65,86,60,92,59,99,59,105,61,110,62,116,59,121,55,126,51,130,44,129,38,131,32,131"
                              shape="poly"/>
                        <area onMouseLeave={() => setSelectedRegion(null)}
                              onMouseOver={() => setSelectedRegion('Skopje Region')}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setClicked(true);
                                  setClickedRegion('Skopje Region')
                                  setSelectedRegion('Skopje Region')
                              }}
                              target="" alt="Skopje"
                              title="Skopje" href=""
                              coords="140,68,154,66,155,71,163,75,169,73,175,73,171,67,171,61,175,56,175,48,185,36,188,30,195,33,197,36,200,31,209,36,211,46,206,52,208,58,226,80,229,75,235,75,237,81,242,85,248,89,246,95,256,104,258,105,263,101,267,102,271,109,268,119,258,123,256,125,256,144,250,144,246,139,234,141,235,147,235,154,227,161,199,161,197,167,191,172,185,174,185,166,176,168,170,160,162,150,157,142,154,137,157,130,143,116,148,101,139,94,146,86,141,81,149,79,145,73,139,74"
                              shape="poly"/>
                        <area onMouseLeave={() => setSelectedRegion(null)}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setClicked(true);
                                  setClickedRegion('Northeastern Region')
                                  setSelectedRegion('Northeastern Region')
                              }}
                              onMouseOver={() => setSelectedRegion('Northeastern Region')} target="" alt="Northeastern"
                              title="Northeastern" href=""
                              coords="194,21,200,21,205,19,212,27,222,25,239,23,247,25,256,28,257,21,265,20,274,14,283,12,290,16,296,12,296,3,303,7,309,9,313,15,320,14,329,16,340,12,345,16,349,15,352,21,350,8,360,5,362,0,367,5,372,9,378,14,385,14,388,20,392,26,397,31,400,37,403,40,408,43,410,50,405,54,393,67,386,63,378,66,381,72,379,85,374,80,366,81,361,79,360,89,354,87,352,82,348,88,343,84,336,85,329,89,323,91,322,94,315,93,307,91,303,96,295,99,292,92,276,99,278,104,270,108,264,100,257,105,246,96,249,90,243,85,237,81,234,74,230,75,227,80,208,59,206,51,213,45,210,36,201,32,199,27,196,22"
                              shape="poly"/>
                        <area onMouseLeave={() => setSelectedRegion(null)}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setClicked(true);
                                  setClickedRegion('Southwestern Region')
                              }}
                              onMouseOver={() => setSelectedRegion('Southwestern Region')} target="" alt="Southwestern"
                              title="Southwestern" href=""
                              coords="21,207,3,214,2,220,2,226,2,229,8,231,10,239,10,243,16,246,22,255,15,269,8,271,8,280,11,291,12,302,17,312,27,327,24,333,28,338,34,338,36,331,37,325,38,318,45,317,54,319,60,325,65,332,71,333,70,340,68,346,70,352,70,360,68,368,65,375,65,382,60,384,55,387,63,390,69,390,76,382,73,371,82,362,84,355,81,349,87,345,88,330,98,315,104,316,114,303,111,295,107,289,106,286,100,282,98,272,113,272,121,264,128,265,133,256,138,246,151,245,158,239,159,232,171,227,183,202,184,193,186,186,185,176,184,165,177,165,171,159,164,148,155,140,150,134,140,134,131,146,120,151,115,166,120,175,120,186,105,191,100,187,89,183,75,184,73,190,68,189,66,194,74,196,77,203,72,207,72,215,67,221,66,231,43,222,41,216,34,216,27,210"
                              shape="poly"/>
                        <area onMouseLeave={() => setSelectedRegion(null)}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setClicked(true);
                                  setClickedRegion('Pelagonia Region')
                                  setSelectedRegion('Pelagonia Region')
                              }}
                              onMouseOver={() => setSelectedRegion('Pelagonia Region')} target="" alt="Pelagonia"
                              title="Pelagonia" href=""
                              coords="79,381,86,385,95,386,104,391,98,383,91,380,87,375,92,368,97,362,105,360,112,364,116,363,118,368,123,374,125,382,128,389,130,397,133,402,139,401,147,398,155,397,160,401,180,399,192,387,201,389,214,389,225,400,230,395,236,393,244,390,245,384,250,380,262,384,268,382,271,377,269,371,279,365,286,357,292,350,291,344,294,337,293,329,285,321,285,310,281,297,284,291,281,286,272,286,269,277,274,268,270,258,272,247,265,248,262,242,254,232,244,235,240,246,232,240,225,237,219,236,216,230,204,229,201,220,192,206,184,203,173,225,159,232,158,239,151,246,138,246,133,252,130,265,122,264,113,273,98,273,101,282,108,285,110,291,115,303,108,310,103,315,97,315,89,325,88,344,81,349,85,356,82,362,74,369,74,376"
                              shape="poly"/>
                        <area onMouseLeave={() => setSelectedRegion(null)}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setClicked(true);
                                  setClickedRegion('Vardar Region')
                                  setSelectedRegion('Vardar Region')
                              }}
                              onMouseOver={() => setSelectedRegion('Vardar Region')} target="" alt="Vardar"
                              title="Vardar" href=""
                              coords="185,174,197,168,199,160,226,161,236,155,236,142,247,139,254,147,255,125,269,119,271,124,273,130,279,137,274,146,276,154,274,161,280,167,287,169,288,180,291,187,298,186,308,186,319,187,321,195,328,190,331,198,334,203,342,202,348,204,347,211,353,214,359,219,363,217,369,228,377,234,374,251,378,261,379,269,367,276,365,286,368,293,359,298,362,304,357,308,352,312,351,319,345,321,341,327,336,330,331,327,325,327,324,322,316,328,306,328,294,337,294,329,285,321,286,310,282,302,281,292,280,285,272,286,269,277,275,268,272,261,270,255,272,246,265,248,262,241,256,232,250,233,244,236,240,244,232,240,225,235,219,236,216,230,204,229,202,218,196,212,192,206,184,203,184,193,187,183"
                              shape="poly"/>
                        <area onMouseLeave={() => setSelectedRegion(null)}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setClickedRegion('Eastern Region')
                                  setSelectedRegion('Eastern Region')
                              }}
                              onMouseOver={() => setSelectedRegion('Eastern Region')} target="" alt="Eastern"
                              title="Eastern" href=""
                              coords="267,120,271,108,279,105,276,98,291,90,295,98,302,97,306,90,323,94,328,88,336,86,343,82,348,89,351,83,356,87,361,88,361,78,365,82,373,79,379,85,382,72,379,65,387,63,393,68,410,50,412,57,420,62,427,67,434,70,443,79,449,77,454,81,463,85,466,83,471,88,478,87,480,95,484,101,482,109,486,117,487,124,495,136,495,144,499,150,501,155,509,157,514,166,512,175,507,183,506,188,500,191,499,198,499,205,503,212,502,217,500,222,492,221,483,220,472,220,460,213,455,205,447,206,449,198,443,190,436,194,436,185,440,179,435,171,435,163,429,162,421,155,416,154,416,160,409,160,403,153,398,156,396,162,394,168,391,173,387,177,384,182,376,179,370,181,370,189,374,191,372,198,375,202,366,214,359,218,353,214,347,210,349,203,344,201,333,204,329,190,322,194,317,187,303,185,295,187,287,183,287,174,288,168,280,167,274,161,278,153,275,146,280,136,274,130,269,125,267,120"
                              shape="poly"/>
                        <area onMouseLeave={() => setSelectedRegion(null)}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setClickedRegion('Southeastern Region')
                                  setSelectedRegion('Southeastern Region')
                              }}
                              onMouseOver={() => setSelectedRegion('Southeastern Region')} target="" alt="Southeastern"
                              title="Southeastern" href=""
                              coords="365,219,370,229,378,234,375,244,374,251,377,259,379,269,369,274,367,282,369,290,367,297,360,297,363,304,358,309,353,311,352,319,357,321,362,319,367,323,373,322,376,330,389,327,397,332,407,331,415,328,427,332,438,323,438,316,445,314,451,324,456,324,460,317,452,311,452,305,455,299,461,296,462,289,462,279,472,270,477,271,498,272,503,267,503,259,501,253,505,244,502,236,501,230,501,223,489,223,481,218,474,221,464,216,461,209,454,205,447,204,449,198,443,190,436,193,434,186,438,179,435,173,434,166,428,162,422,154,416,154,417,160,409,160,403,154,397,155,397,162,394,167,390,173,385,182,377,178,371,180,369,188,374,191,371,198,375,201,369,208,363,213"
                              shape="poly"/>
                    </map>
                </Col>
                <Col style={{overflowY: 'auto', maxHeight: '35vh'}}>
                    <Row>
                        <Col>
                            <IoMdPin/>
                        </Col>
                        <Col>
                            {!clicked && selectedRegion}
                            {clicked && clickedRegion  }
                        </Col>
                    </Row>
                    <Table onMouseLeave={() => setClicked(false)}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Lat</th>
                            <th>Lon</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!clicked && data.filter(x => x.region.opis === selectedRegion).map(x => {
                            return (<tr>
                                <td>{x.opis}</td>
                                <td>{x.latitude}</td>
                                <td>{x.longtitude}</td>
                            </tr>)
                        })}
                        {clicked && data.filter(x => x.region.opis === clickedRegion).map(x => {
                            return (<tr>
                                <td>{x.opis}</td>
                                <td>{x.latitude}</td>
                                <td>{x.longtitude}</td>
                            </tr>)
                        })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    );
}

export default RegionMap;