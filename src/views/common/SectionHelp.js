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

// reactstrap components
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
} from "reactstrap";

import {sendEmail} from '../services/sendEmail'

// core components

function SectionCarousel() {
    const [toSend, setToSend] = useState({
        pseudo: '',
        email: '',
        message: '',
    });

    const onSubmit = () => {
        sendEmail(toSend)
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className="section landing-section">
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center">Besoin d'aide?</h2>
                        <Form className="contact-form">
                            <Row>
                                <Col md="6">
                                    <label>Pseudo</label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="nc-icon nc-single-02"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type='Pseudo'
                                            name='pseudo'
                                            placeholder='Pseudo'
                                            value={toSend.pseudo}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </Col>
                                <Col md="6">
                                    <label>Email</label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="nc-icon nc-email-85"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type='Email'
                                            name='email'
                                            placeholder='Email'
                                            value={toSend.email}
                                            onChange={handleChange}
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <label>Message</label>
                            <Input
                                placeholder="Dis nous en plus..."
                                type="textarea"
                                name='message'
                                value={toSend.message}
                                onChange={handleChange}
                                rows="4"
                            />
                            <div className="text-center">
                                <Button onClick={() => onSubmit()} className="btn-fill" color="info" size="lg">
                                    Envoyer
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SectionCarousel;
