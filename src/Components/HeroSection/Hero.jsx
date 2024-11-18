import React, { useState } from "react";
import "./Hero.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import mainvideo from "../../assets/Videos/hero-video.mp4";
import logo from "../../assets/Images/logo.png";
import mainvideo1 from "../../assets/Videos/D&E.mp4";
import wedding from "../../assets/Videos/weddin logo landscape.mp4";
import Koncepts from "../../assets/Videos/Konceptz Logo landscape.mp4";

function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  const openWorkComponent = () => {
    window.open("/work", "_blank", "noopener,noreferrer");
  };

  return (
    <Container>
      <Row className="Appbar">
        <Col>
          <img
            src={logo}
            className="Hero-image-main"
            alt="PURSUE.Logo"
            srcSet=""
          />
        </Col>
        <Col>
          <ul>
            <li>
              <a href="">Work</a>
            </li>
            <li>
              <a href="#Aboutus">About Us</a>
            </li>
          </ul>
        </Col>
        <Col>
          <div>Contact Us</div>
        </Col>
      </Row>

      <Row className="main-hero-space">
        <Col>
          <h1 className="Hero-Text-main">PURSUE PRODECTION</h1>
        </Col>
      </Row>

      <Row>
        <h3 className="Hero-Text-second">
          "Capture moments, create memories, craft stories – one frame at a
          time."
        </h3>
      </Row>

      <Row className="video-row">
        <div
          className="hero-video-main"
          style={{
            width: "100%",
            // top: "5rem",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <video
            style={{ width: "100%", height: "100%", borderRadius: "50px" }}
            autoPlay
            muted={isMuted}
            playsInline
            loop
            data-aos="zoom-in"
          >
            <source src={mainvideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Button
            onClick={toggleMute}
            style={{
              position: "absolute",
              bottom: "20px",
              background: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            {isMuted ? "Unmute" : "Mute"}
          </Button>
        </div>
      </Row>

      <div className="Space-Bar"></div>

      <Row className="AboutUs" id="Aboutus">
        <div className="text-main">About Us</div>
        <Row></Row>
        <Row>
          <Col className="About-content-Container">
            <p className="text-p">
              Pursue Production brings your vision to life with stunning
              photography, video shoots, and digital videography. With 6+ years
              of expertise and 55+ satisfied clients, we craft stories that
              captivate and inspire!
            </p>
          </Col>
          <Col>
            <video
              src={mainvideo}
              loop
              autoPlay
              muted
              playsInline
              className="hero-video-main1"
            ></video>
          </Col>
        </Row>
      </Row>
      <Row className="Work" id="Work">
        <Row>
          <Col className="text-main">Our Work</Col>
        </Row>
        <Row>
          <Col className="work-content-Container">
            <video
              style={{
                border: "2px solid #986c64",
              }}
              src={wedding}
              loop
              autoPlay
              muted
              playsInline
              className="hero-video-main1"
              onClick={openWorkComponent}
            ></video>
          </Col>
          <Col>
            <video
              src={Koncepts}
              loop
              autoPlay
              muted
              playsInline
              className="hero-video-main1"
            ></video>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Hero;
