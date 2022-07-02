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
    Container,
    Row,
    Col,
    Button,
} from "reactstrap";

// core components

function SectionCarousel() {

    return (
        <div className="section text-center">
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="title">Turbocube késako?</h2>
                        <h5 className="description">
                            Le serveur Turbocube reviens dans la nouvelle version de <b>Minecraft 1.19</b>!<br/>
                            Il s'agira toujours d'un serveur <b>vanilla</b> en survie <b>Semi-RolePlay</b> ayant
                            un objectif communautaire. Rejoins le Discord pour en savoir plus:
                        </h5>
                        <br/>
                        <Button
                            className="btn-round btn"
                            color="info"
                            href="https://discord.gg/X4wqWhtK47"
                            target="_blank"
                        >
                            Lien Discord
                        </Button>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col md="3">
                        <div className="info">
                            <div className="icon icon-info">
                                <i className="nc-icon nc-map-big"/>
                            </div>
                            <div className="description">
                                <h4 className="info-title" style={{margin: '0 0 20px 0'}}>Live map</h4>
                                <p className="description">
                                    Une map mise à jour <b>en direct</b> de chaques <b>dimensions</b>&nbsp;
                                    et différentes <b>villes</b> de Turbocube
                                </p>
                                {/*<Button
                                    className="btn-link btn"
                                    color="info"
                                    href="https://discord.gg/X4wqWhtK47"
                                    target="_blank"
                                >
                                    Voir plus
                                </Button>*/}
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="info">
                            <div className="icon icon-info">
                                <i className="nc-icon nc-app"/>
                            </div>
                            <div className="description">
                                <h4 className="info-title" style={{margin: '0 0 20px 0'}}>Semi-RP</h4>
                                <p>
                                    Un serveur <b>vanilla</b>, aucune modifications majeurs,&nbsp;
                                    seulement des événements <b>non obligatoires</b>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="info">
                            <div className="icon icon-info">
                                <i className="nc-icon nc-sun-fog-29"/>
                            </div>
                            <div className="description">
                                <h4 className="info-title" style={{margin: '0 0 20px 0'}}>Communautaire</h4>
                                <p>
                                    Un serveur Discord actif et <b>connecté à Minecraft</b>,&nbsp;
                                    les messages y sont fusionné entres les deux
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="info">
                            <div className="icon icon-info">
                                <i className="nc-icon nc-laptop"/>
                            </div>
                            <div className="description">
                                <h4 className="info-title" style={{margin: '0 0 20px 0'}}>Serveur</h4>
                                <p>
                                    VPS sous Ubuntu <b>16Go de RAM</b> host chez <b>OVH</b> et hébergé à <b>Strasbourg</b>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SectionCarousel;
