/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Card,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption,
} from "reactstrap";
import styled from "styled-components";

// core components

const CustomDiv = styled.div`
  background: url(https://wallpaperaccess.com/full/489474.jpg) no-repeat center center fixed;
  background-size: cover;
`

const UpdateInput = styled.h6`
  color: white;
  font-weight: 300;
  margin-bottom: 60px;
`

const items = [
    {
        src: require("assets/img/chateau-nami.png").default,
        altText: "Château de __Nami__",
        caption: "Château de __Nami__",
    },
    {
        src: require("assets/img/end.png").default,
        altText: "End base de GreedyVoid",
        caption: "End base de GreedyVoid",
    },
    {
        src: require("assets/img/spawn-nether.png").default,
        altText: "Spawn nether de Halkyon & __Nami__",
        caption: "Spawn nether de Halkyon & __Nami__",
    },
    {
        src: require("assets/img/chateau-louis.png").default,
        altText: "Château de unknown_0",
        caption: "Château de unknown_0",
    },
];

function SectionCreators() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
        setAnimating(true);
    };
    const onExited = () => {
        setAnimating(false);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    return (
        <CustomDiv className="section section-dark text-center">
            <Container>
                <div className="pt-o" id="carousel" style={{padding: '0px 0px 30px'}}>
                    <Container>
                        <h2 className="title">Créations de la communauté</h2>
                        <UpdateInput>Version précédente de Turbocube (1.18)</UpdateInput>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <Card className="page-carousel">
                                    <Carousel
                                        activeIndex={activeIndex}
                                        next={next}
                                        previous={previous}
                                        autoPlay
                                    >
                                        <CarouselIndicators
                                            items={items}
                                            activeIndex={activeIndex}
                                            onClickHandler={goToIndex}
                                        />
                                        {items.map((item) => {
                                            return (
                                                <CarouselItem
                                                    onExiting={onExiting}
                                                    onExited={onExited}
                                                    key={item.src}
                                                >
                                                    <img src={item.src} alt={item.altText} style={{borderRadius: '0'}}/>
                                                    <CarouselCaption
                                                        captionText={item.caption}
                                                        captionHeader=""
                                                    />
                                                </CarouselItem>
                                            );
                                        })}
                                        <a
                                            className="left carousel-control carousel-control-prev"
                                            data-slide="prev"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                previous();
                                            }}
                                            role="button"
                                        >
                                            <span className="fa fa-angle-left"/>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a
                                            className="right carousel-control carousel-control-next"
                                            data-slide="next"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                next();
                                            }}
                                            role="button"
                                        >
                                            <span className="fa fa-angle-right"/>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </Carousel>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {" "}
            </Container>
        </CustomDiv>
    );
}

export default SectionCreators;
