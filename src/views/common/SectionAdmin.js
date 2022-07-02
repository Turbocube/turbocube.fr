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
    Row,
    Col,
    CardBody,
    CardTitle,
    CardFooter,
    Button,
} from "reactstrap";
import styled from "styled-components";

// core components

const CustomButton = styled(Button)`
  &:hover {
    border: 2px solid;
    padding-top: 9px;
  }

  border: 1px solid;
  padding-top: 10px;
`

const CustomDiv = styled.div`
  &:hover {
    transform: scale(0.95, 0.95);
  }
`

function SectionCarousel() {

    return (
        <div className="section" style={{padding: '0 0 70px 0'}}>
            <h2 className="text-center creators">Turbo-créateurs</h2>
            <Row>
                <Col md="4">
                    <Card className="card-profile card-plain">
                        <CardBody>
                            <CustomDiv className="card-avatar">
                                <img
                                    alt="minecraft-head"
                                    src="https://mc-heads.net/head/alexisbonk"
                                />
                            </CustomDiv>
                            <br/>
                            <div className="author">
                                <CardTitle tag="h4">Alexisbonk</CardTitle>
                                <h6 className="card-category">Dev / Admin</h6>
                            </div>
                            {/* <p className="card-description text-center">
                                            « ... »
                                        </p> */}
                        </CardBody>
                        <CardFooter>
                            <CustomButton
                                className="btn-just-icon mr-2 btn-neutral"
                                color="linkedin"
                                style={{backgroundColor: "#ffffff"}}
                                href="https://www.linkedin.com/in/%F0%9F%92%BB-alexis-knob-654931199/"
                                target="_blank"
                            >
                                <i className="fa fa-linkedin"/>
                            </CustomButton>
                            <CustomButton
                                className="btn-just-icon mr-2 btn-neutral"
                                color="github"
                                style={{backgroundColor: "#ffffff"}}
                                href="https://github.com/alexisbonk"
                                target="_blank"
                            >
                                <i className="fa fa-github"/>
                            </CustomButton>
                            <CustomButton
                                className="btn-just-icon btn-neutral"
                                color="instagram"
                                style={{backgroundColor: "#ffffff"}}
                                href="https://www.instagram.com/alexisbonk/"
                                target="_blank"
                            >
                                <i className="fa fa-instagram"/>
                            </CustomButton>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="4">
                    <Card className="card-profile card-plain">
                        <CardBody>
                            <CustomDiv className="card-avatar">
                                <img
                                    alt="minecraft-head"
                                    src="https://mc-heads.net/head/unknown_0"
                                />
                            </CustomDiv>
                            <br/>
                            <div className="author">
                                <CardTitle tag="h4">unknown_0</CardTitle>
                                <h6 className="card-category">Dev / Admin</h6>
                            </div>
                        </CardBody>
                        <CardFooter className="text-center">
                            <CustomButton
                                className="btn-just-icon mr-2 btn-neutral"
                                color="linkedin"
                                style={{backgroundColor: "#ffffff"}}
                                href="https://www.linkedin.com/in/louis-kleiver"
                                target="_blank"
                            >
                                <i className="fa fa-linkedin"/>
                            </CustomButton>
                            <CustomButton
                                className="btn-just-icon mr-2 btn-neutral"
                                color="github"
                                style={{backgroundColor: "#ffffff"}}
                                href="https://github.com/mrCaelum"
                                target="_blank"
                            >
                                <i className="fa fa-github"/>
                            </CustomButton>
                            <CustomButton
                                className="btn-just-icon btn-neutral"
                                color="twitter"
                                style={{backgroundColor: "#ffffff"}}
                                href="https://twitter.com/mrCaelum"
                                target="_blank"
                            >
                                <i className="fa fa-twitter"/>
                            </CustomButton>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="4">
                    <Card className="card-profile card-plain">
                        <CardBody>
                            <CustomDiv className="card-avatar">
                                <img
                                    alt="minecraft-head"
                                    src="https://mc-heads.net/head/Heavencouncil"
                                />
                            </CustomDiv>
                            <br/>
                            <div className="author">
                                <CardTitle tag="h4">Heavencouncil</CardTitle>
                                <h6 className="card-category">Admin</h6>
                            </div>
                        </CardBody>
                        <CardFooter className="text-center">
                            <CustomButton
                                className="btn-just-icon mr-2 btn-neutral"
                                color="instagram"
                                style={{backgroundColor: "#ffffff"}}
                                href="https://www.instagram.com/justinkleiver/"
                                target="_blank"
                            >
                                <i className="fa fa-instagram"/>
                            </CustomButton>
                            <CustomButton
                                className="btn-just-icon mr-2 btn-neutral"
                                color="twitch"
                                style={{backgroundColor: "#ffffff"}}
                                href="https://www.twitch.tv/heavencouncil"
                                target="_blank"
                            >
                                <i className="fa fa-twitch"/>
                            </CustomButton>
                            <CustomButton
                                className="btn-just-icon btn-neutral"
                                color="instagram"
                                style={{backgroundColor: "#ffffff"}}
                                href="https://www.instagram.com/Heavencouncilyt/"
                                target="_blank"
                            >
                                <i className="fa fa-instagram"/>
                            </CustomButton>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            <br/>
        </div>
    );
}

export default SectionCarousel;
