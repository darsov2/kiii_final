import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./Circle.css"
const Circle = (props) =>{
    const classs = (props.small === 'true'? " circle-small" : "")
    const classes = (props.hovered ? "circle circle-hovered" + classs : "circle" + classs)
    return (
        <>
        <div onClick={props.onClick} onMouseEnter={props.onHover} onMouseLeave={props.onLeave} className={classes} style={{margin: "0 0.2%"}}>
        </div>
        </>
    )
}
export default Circle