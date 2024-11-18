import React, { useState, useRef } from "react";
import "./Work.css";
import { Col, Container, Row } from "react-bootstrap";
import wed1 from "../../assets/Videos/wed1.mp4";
import wed2 from "../../assets/Videos/wed2.mp4";
import wed3 from "../../assets/Videos/wed3.mp4";
import img1 from "../../assets/Images/wedi1.jpg";
import img2 from "../../assets/Images/wedi2.JPG";
import img3 from "../../assets/Images/wedi1.jpg";

function Work() {
  // State to track hover on each card individually
  const [hoveredCard, setHoveredCard] = useState(null);

  // Video refs to control play/pause and fullscreen
  const videoRefs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
  };

  // Handle mouse enter and leave for hover effect
  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
    // Play the video for the hovered card
    if (videoRefs[cardIndex].current) {
      videoRefs[cardIndex].current.play();
    }
  };

  const handleMouseLeave = (cardIndex) => {
    setHoveredCard(null);
    // Pause and reset the video for the card when mouse leaves
    if (videoRefs[cardIndex].current) {
      videoRefs[cardIndex].current.pause();
      videoRefs[cardIndex].current.currentTime = 0; // Reset video to start
    }
  };

  const toggleFullscreen = (videoElement) => {
    // Check for fullscreen support and request fullscreen
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      // Firefox
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
      // Chrome, Safari, Opera
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
      // IE/Edge
      videoElement.msRequestFullscreen();
    }

    // After entering fullscreen, set object-fit to 'cover' to ensure the video covers the screen
    videoElement.style.objectFit = "fit";

    // Listen for the fullscreenchange event to reset styles when exiting fullscreen
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        // Reset object-fit when exiting fullscreen
        videoElement.style.objectFit = "contain"; // Or "cover", depending on your preference
      }
    });

    // For browsers like Firefox or Chrome that use specific methods for fullscreen
    document.addEventListener("webkitfullscreenchange", () => {
      if (!document.webkitFullscreenElement) {
        videoElement.style.objectFit = "contain";
      }
    });

    document.addEventListener("mozfullscreenchange", () => {
      if (!document.mozFullScreenElement) {
        videoElement.style.objectFit = "contain";
      }
    });

    document.addEventListener("msfullscreenchange", () => {
      if (!document.msFullscreenElement) {
        videoElement.style.objectFit = "contain";
      }
    });
  };

  return (
    <Container className="main-container-wedd">
      <Row className="heading-work">
        <Col>
          <h1 className="work-main-text">WEDDIN</h1>
        </Col>
      </Row>
      <Row className="heading-work-sub">
        <Col>
          <h1 className="work-main-text-sub">
            "A wedding is not just a celebration of love, but the beginning of a
            lifetime of shared dreams, laughter, and growing together."
          </h1>
        </Col>
      </Row>

      <div className="spacer"></div>
      <Row className="card-work">
        {/* Video Card 1 */}
        <Col>
          <div
            className="card-container"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <video
              ref={videoRefs[1]}
              width="100%"
              height="auto"
              loop
              preload="auto"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                display: hoveredCard === 1 ? "block" : "none", // Hide video when not hovered
              }}
              onClick={() => toggleFullscreen(videoRefs[1].current)} // Toggle fullscreen on click
            >
              <source src={wed1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {hoveredCard !== 1 && (
              <img
                src={img1}
                alt="Wedding 1"
                width="100%"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
          </div>
        </Col>

        {/* Video Card 2 */}
        <Col>
          <div
            className="card-container"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <video
              ref={videoRefs[2]}
              width="100%"
              height="auto"
              loop
              preload="auto"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                display: hoveredCard === 2 ? "block" : "none", // Hide video when not hovered
              }}
              onClick={() => toggleFullscreen(videoRefs[2].current)} // Toggle fullscreen on click
            >
              <source src={wed2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {hoveredCard !== 2 && (
              <img
                src={img2}
                alt="Wedding 2"
                width="100%"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
          </div>
        </Col>

        {/* Video Card 3 */}
        <Col>
          <div
            className="card-container"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
            <video
              ref={videoRefs[3]}
              width="100%"
              height="auto"
              loop
              preload="auto"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                display: hoveredCard === 3 ? "block" : "none", // Hide video when not hovered
              }}
              onClick={() => toggleFullscreen(videoRefs[3].current)} // Toggle fullscreen on click
            >
              <source src={wed3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {hoveredCard !== 3 && (
              <img
                src={img3}
                alt="Wedding 3"
                width="100%"
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Work;
