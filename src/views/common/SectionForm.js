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
import React, {useState} from "react";
import styled from 'styled-components';

// reactstrap components
import {
    Card,
    Modal,
    Container,
    Row,
    Col,
    CardBody,
    CardFooter,
    Button,
} from "reactstrap";

// core components
import LeftImg from '../../assets/img/form-left.png';
import RightImg from '../../assets/img/form-right.png';

const ExtraCol = styled(Col)`
  align-self: self-end;

  @media (max-width: 767px) {
    display: none;
  }
`

function SectionCreators() {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <Modal isOpen={modal} toggle={toggleModal} style={{maxWidth: '650px'}}>
                <div className="modal-header">
                    <button
                        aria-label="Close"
                        className="close"
                        type="button"
                        onClick={toggleModal}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                    <h5
                        className="modal-title text-center"
                        id="exampleModalLabel"
                    >
                        Turbo-formulaire
                    </h5>
                </div>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSficp48SLb8hKfspg9F5N1gDEFR_fkiBDU3-NTXoRPhshk1CQ/viewform?embedded=true"
                    width="640" height="918" frameBorder="0" marginHeight="0" marginWidth="0">Chargement…
                </iframe>
                <div className="modal-footer">
                    <div className="left-side">
                        <Button
                            className="btn-link"
                            color="default"
                            type="button"
                            onClick={toggleModal}
                        >
                            Terminé
                        </Button>
                    </div>
                    <div className="divider"/>
                    <div className="right-side">
                        <Button
                            className="btn-link"
                            color="danger"
                            type="button"
                            onClick={toggleModal}
                        >
                            Retour
                        </Button>
                    </div>
                </div>
            </Modal>
            <div className="section text-center">
                <Container>
                    <Row>
                        <ExtraCol md="4">
                            <img
                                style={{width: '40%', height: 'auto'}}
                                alt='left-img'
                                src={LeftImg}
                            />
                        </ExtraCol>
                        <Col md="4">
                            <Card
                                data-background="image"
                                style={{
                                    backgroundImage:
                                        "url(https://www.demainlaville.com/content/uploads/2020/11/minecraft-1618142pixabay-redimensionne.jpg)",
                                }}
                            >
                                <CardBody style={{cursor: 'pointer'}} onClick={() => toggleModal()}>
                                    <h6 className="card-category">Formulaire de création de ville</h6>
                                    <div className="card-icon">
                                        <i className="nc-icon nc-shop"/>
                                    </div>
                                    <p className="card-description">
                                        Juste quelques questions et vous pourrez développer votre ville et claim des
                                        chunks!
                                    </p>
                                    <CardFooter>
                                        <Button
                                            className="btn-neutral"
                                            color="link"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fa fa-book mr-1"/>
                                            Voir la suite
                                        </Button>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </Col>
                        <ExtraCol md="4">
                            <img
                                style={{width: '100%', height: 'auto'}}
                                alt='right-img'
                                src={RightImg}
                            />
                        </ExtraCol>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SectionCreators;
