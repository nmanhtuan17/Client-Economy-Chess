import React from "react";

import "../styles/home.css";
import "../shared/common-section.css";
import {useNavigate} from "react-router-dom";
import {Container, Row, Col} from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import experienceImg from "../assets/images/experience.png";

import foryou1 from "../assets/images/foryou1.jpeg";
import foryou2 from "../assets/images/foryou2.jpeg";
import foryou3 from "../assets/images/foryou3.jpeg";
import foryou4 from "../assets/images/foryou4.jpeg";
import foryou5 from "../assets/images/foryou5.jpeg";
import foryou6 from "../assets/images/foryou6.jpeg";

// import ServiceList from "../Services/ServiceList";
import SearchBar from "../shared/SearchBar";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
// import CountUp from "../components/CountUp/CountUp";
import CountUp from "react-countup"; 
import {useInView} from "react-intersection-observer";
import {useState} from "react";
import Chatbot from "../components/Chatbot/Chatbot";

const Home = () => {
  const navigate = useNavigate();
  const [counted, setCounted] = useState(false);
  const {ref, inView} = useInView();

  const onInViewChange = (inView) => {
    if (inView && !counted) {
      setCounted(true);
    }
  };

  return (
    <>
      {/* -----------------Hero section------------- */}
      <section className="common__section">
        <Container>
          <Row >
            <Col lg={9}>
              
              <h1>
                <strong>Shop for your ideal chess set</strong>
                <br />
                <span className="small-text"> and make great memories.</span>
              </h1>
              <button
                className="shop-button"
                onClick={() => navigate("/products")}
              >
                SHOP CHESS SETS
              </button>
							
                
            </Col>
						
						<SearchBar lg={3}/>

						
          </Row>
        </Container>
      </section>

      {/* ------------- Services ------------------- */}

      
      {/*------------------- Feature tour section start----------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <br />
              <h2 className="featured__tour-title"><strong>TOP CHESS SETS</strong></h2>
            </Col>

            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* ++++++++++++++++++++++++++++++++= Experience =============================== */}

      

      {/* =============================  Gallery section ================== */}
      <section>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="gallery__content">
                <Subtitle subtitle={"For You"} />
                <br />
              </div>
            </Col>

            <Col lg={12}>
              <Row>
                <Col lg={4} md={4} sm={6} xs={12} className="mb-4">
                  <div className="gallery__img-container mt-2">
                    <img
                      src={foryou1}
                      alt="MAKE MEMORIES"
                      className="gallery__img"
                    />
                    <div className="gallery__text">
                      <p className="subheading">MAKE MEMORIES</p>
                      <p className="h2">Home & Family</p>
                      <button class="gallery__button">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="40"
                          height="40"
                          class="icon icon-circle-button-right-clipped"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM10.47 9.53 12.94 12l-2.47 2.47 1.06 1.06 3-3 .53-.53-.53-.53-3-3-1.06 1.06Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={6} xs={12} className="mb-4">
                  <div className="gallery__img-container mt-2">
                    <img
                      src={foryou2}
                      alt="FOR ENTHUSIASTS"
                      className="gallery__img"
                    />
                    <div className="gallery__text">
                      <p className="subheading">FOR ENTHUSIASTS</p>
                      <p className="h2">Casual Players & Collectors</p>
                      <button class="gallery__button">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="40"
                          height="40"
                          class="icon icon-circle-button-right-clipped"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM10.47 9.53 12.94 12l-2.47 2.47 1.06 1.06 3-3 .53-.53-.53-.53-3-3-1.06 1.06Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={6} xs={12} className="mb-4">
                  <div className="gallery__img-container mt-2">
                    <img
                      src={foryou3}
                      alt="TEACH & MENTOR"
                      className="gallery__img"
                    />
                    <div className="gallery__text">
                      <p className="subheading">TEACH & MENTOR</p>
                      <p className="h2">Schools & Clubs</p>
                      <button class="gallery__button">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="40"
                          height="40"
                          class="icon icon-circle-button-right-clipped"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM10.47 9.53 12.94 12l-2.47 2.47 1.06 1.06 3-3 .53-.53-.53-.53-3-3-1.06 1.06Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={6} xs={12} className="mb-4">
                  <div className="gallery__img-container mt-2">
                    <img
                      src={foryou4}
                      alt="STANDOUT"
                      className="gallery__img"
                    />
                    <div className="gallery__text">
                      <p className="subheading">STANDOUT</p>
                      <p className="h2">Epic Boards</p>
                      <button class="gallery__button">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="40"
                          height="40"
                          class="icon icon-circle-button-right-clipped"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM10.47 9.53 12.94 12l-2.47 2.47 1.06 1.06 3-3 .53-.53-.53-.53-3-3-1.06 1.06Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={6} xs={12} className="mb-4">
                  <div className="gallery__img-container mt-2">
                    <img
                      src={foryou5}
                      alt="PLAY & MOVE"
                      className="gallery__img"
                    />
                    <div className="gallery__text">
                      <p className="subheading">PLAY & MOVE</p>
                      <p className="h2">Giant Chess</p>
                      <button class="gallery__button">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="40"
                          height="40"
                          class="icon icon-circle-button-right-clipped"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM10.47 9.53 12.94 12l-2.47 2.47 1.06 1.06 3-3 .53-.53-.53-.53-3-3-1.06 1.06Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={6} xs={12} className="mb-4">
                  <div className="gallery__img-container mt-2">
                    <img
                      src={foryou6}
                      alt="EPIC CHESS SET"
                      className="gallery__img"
                    />
                    <div className="gallery__text">
                      <p className="subheading">EPIC CHESS SET</p>
                      <p className="h2">Daily Giveaway</p>
                      <button class="gallery__button">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="40"
                          height="40"
                          class="icon icon-circle-button-right-clipped"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM10.47 9.53 12.94 12l-2.47 2.47 1.06 1.06 3-3 .53-.53-.53-.53-3-3-1.06 1.06Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== Phần mới ======================= */}
      <section
        className="section section-blends section-full"
        ref={ref}
        onChange={onInViewChange}
        style={{backgroundColor: "white"}}
      >
        <Container>
          <Row>
            <Col lg={12}>
              <div className="impact-text impact-text--center">
                <div className="snap-center">
                  <h2 className="impact-text__text heading break-all">
                    <span
                      className="text-gradient"
                      style={{
                        "--gradient":
                          "linear-gradient(180deg, rgba(32, 138, 193, 1), rgba(26, 26, 26, 0) 100%)",
                        display: "block",
                        position: "relative",
                        textAlign: "center",
                        overflow: "hidden",
                      }}
                    >
                      {inView && (
                        <CountUp end={21522} style={{fontSize: "12rem"}} />
                      )}
                    </span>
                  </h2>
                  <div className="impact-text__content">
                    <div className="prose">
                      <h3 className="h4 text-black text-30">
                        <strong>PEOPLE RATE CHESS HOUSE ★★★★★</strong>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================== Testimonial ======================= */}

      <section>
        <Container className="containerTest bg-gray-300">
          <Row>
            <Col lg={12}>
              <Subtitle className="sub" subtitle={"Fans Love"} />
              <h2 className="testimonial__title ml-14 mt-5">
                <strong>WHAT PEOPLE SAY</strong>
              </h2>
            </Col>
            <Col lg={12}>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================================ Newletters ======================== */}
      <Newsletter />


      {/*============================ Chat box =========================== */}
      <Chatbot />
    </>
  );
};

export default Home;
