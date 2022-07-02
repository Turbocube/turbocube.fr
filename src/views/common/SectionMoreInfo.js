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
} from "reactstrap";

// core components
import SectionModals from "./SectionModals";

function SectionCarousel() {
    const [pluginsModal, setPluginsModal] = React.useState(false);
    const [datapacksModal, setDatapacksModal] = React.useState(false);
    const [serversModal, setServersModal] = React.useState(false);

    return (
        <>
            <SectionModals
                pluginsModal={pluginsModal}
                setPluginsModal={setPluginsModal}
                datapacksModal={datapacksModal}
                setDatapacksModal={setDatapacksModal}
                serversModal={serversModal}
                setServersModal={setServersModal}
            />
            <div className="section" style={{padding: '0 0 70px 0'}}>
                <h3 className="more-info">Plus d'informations ?</h3>
                <br/>
                <Row className="coloured-cards">
                    <Col md="4" sm="6">
                        <div className="card-big-shadow">
                            <Card
                                className="card-just-text"
                                data-background="color"
                                data-color="blue"
                                data-radius="none"
                                style={{cursor: 'pointer'}}
                                onClick={() => setPluginsModal(true)}
                            >
                                <CardBody>
                                    <h6 className="card-category">New</h6>
                                    <CardTitle tag="h4">Plugins</CardTitle>
                                    <p className="card-description">
                                        En savoir plus sur les différents plugins utilisés sur Turbocube.
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col md="4" sm="6">
                        <div className="card-big-shadow">
                            <Card
                                className="card-just-text"
                                data-background="color"
                                data-color="green"
                                data-radius="none"
                                style={{cursor: 'pointer'}}
                                onClick={() => setDatapacksModal(true)}
                            >
                                <CardBody>
                                    <h6 className="card-category">New</h6>
                                    <CardTitle tag="h4">Datapacks</CardTitle>
                                    <p className="card-description">
                                        En savoir plus sur les différents datapacks utilisés sur Turbocube.
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col md="4" sm="6">
                        <div className="card-big-shadow">
                            <Card
                                className="card-just-text"
                                data-background="color"
                                data-color="yellow"
                                data-radius="none"
                                style={{cursor: 'pointer'}}
                                onClick={() => setServersModal(true)}
                            >
                                <CardBody>
                                    <CardTitle tag="h4">Serveur</CardTitle>
                                    <p className="card-description">
                                        En savoir plus sur le type d'hébergement et la capacité des serveurs de
                                        Turbocube.
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default SectionCarousel;
