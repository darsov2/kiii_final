import React from "react";
import Hero from "../HomePage/Hero";
import NavbarCustom from "../Layout/Navbar";
import WelcomeAbout from "../AboutUs/WelcomeAbout";
import { Col, Container, Row, Image } from "react-bootstrap";
import StrippedContainter from "../Layout/StrippedContainer";
import Footer from "../HomePage/Footer";
import Info1 from "../AboutUs/Info1";
import Info2 from "../AboutUs/Info2";
import Info3 from "../AboutUs/Info3";

const AboutUs = () => {
  return (
    <>
      <div className="parallax-about">
        <div className="z-proba">
          <NavbarCustom color=""></NavbarCustom>
          <Hero showStats="false" text={"ABOUT<br/>US"} />
        </div>
        <div className="overlay"></div>
      </div>

      <WelcomeAbout></WelcomeAbout>

      <Info1/>

      <Info2/>

      <Info3/>

      <Footer/>
    </>
  );
};

export default AboutUs;
