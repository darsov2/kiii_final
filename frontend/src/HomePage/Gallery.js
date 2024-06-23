import React, {useState} from "react";
import {Container, Image} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


const Gallery = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container className={'py-5'}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    props.images.map(x => {
                        return (
                            <Carousel.Item>
                                <Image fluid text="First slide" src={x.slikaUrl} style={{width: '100%'}}/>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </Container>
    );
}

export default Gallery;