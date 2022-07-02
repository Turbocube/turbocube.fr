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
import styled from 'styled-components';

// reactstrap components
import {
    Card,
    Container,
    Row,
    Col,
    CardBody,
    CardTitle,
} from "reactstrap";
import TimeAgo from 'javascript-time-ago'

// English.
import fr from 'javascript-time-ago/locale/fr'

TimeAgo.addDefaultLocale(fr)

// Create formatter (English).
const timeAgo = new TimeAgo('fr-FR')

const randomSubnames = [
    'Le bâtisseur',
    'Le pourfeudeur',
    'Le touriste',
    'Le marchand',
    'L\'immortel',
    'Le chasseur',
    'Le voyageur',
    'Le fantôme',
    'L\'impitoyable',
    'L\'indépendant',
    'L\'enfant',
    'L\'inventeur',
    'Le buildeur fou',
    'L\'ami des bêtes',
    'Le farmeur',
    'Le couche-tard',
    'Le turbulant',
    'Le mage',
    'Le lève-tôt',
    'Le sage',
    'Le try-harder',
    'Le speedrunner',
    'Le hippie',
    'Le négociateur',
    'L\'afk'
]

const CustomDiv = styled.div`
  background: url(https://wallpaperaccess.com/full/489474.jpg) no-repeat center center fixed;
  background-size: cover;
`

const UpdateInput = styled.h6`
  color: white;
  font-weight: 300;
`

function SectionCarousel({infos}) {
    let subnames = [...randomSubnames]

    const pickRandSubname = () => {
        const rand = Math.floor(Math.random() * (subnames.length))
        subnames.splice(rand, 1)
        return subnames[rand];
    }

    return (
        <CustomDiv className="section section-dark text-center">
            <Container>
                <h2 className="title">Les turbo-joueurs </h2>
                <UpdateInput>Mis à jour: {infos.fetch ? timeAgo.format(new Date(infos.fetch)) : ''}</UpdateInput>
                <Row style={{placeContent: 'center'}}>
                    {infos.players?.online === 0 ?
                        <Card className="card-profile card-plain">
                            <div className="card-avatar">
                                <img
                                    alt="minecraft-head"
                                    src={`https://mc-heads.net/head/sad/100`}
                                />
                            </div>
                            <CardBody>
                                <div className="author">
                                    <CardTitle tag="h5">Personne sur le serveur actuellement</CardTitle>
                                </div>
                            </CardBody>
                        </Card> :
                        infos.players?.sample?.map((player) => {
                            return (
                                <Col md="3">
                                    <Card className="card-profile card-plain">
                                        <div className="card-avatar">
                                            <img
                                                alt="minecraft-head"
                                                src={`https://mc-heads.net/head/${player.name}/100`}
                                            />
                                        </div>
                                        <CardBody>
                                            <div className="author">
                                                <CardTitle tag="h4">{player.name}</CardTitle>
                                                <h6 className="card-category">{pickRandSubname()}</h6>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })}
                </Row>
            </Container>
        </CustomDiv>
    );
}

export default SectionCarousel;
