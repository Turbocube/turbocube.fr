import React from "react";

// reactstrap components
import {Container} from "reactstrap";

// core components
import Navbar from "components/Navbar.js";
import Header from "components/MainHeader";
import Footer from "components/Footer.js";

import SectionAdmin from './common/SectionAdmin'
import SectionMoreInfo from './common/SectionMoreInfo'

function AboutUs() {

    return (
        <>
            <Navbar/>
            <Header title='A propos' subtitle='Quelques infos sur Turbocube et ses créateurs '/>
            <Container className="main" style={{width: '80%', textAlign: '-webkit-center'}}>
                <div className="section" style={{textAlign: 'initial'}}>
                    <h3 className="title-uppercase">Construire un serveur pour tous</h3>
                    <br/>
                    <p>
                        Nous avons eut l'idée de ce serveur pour garder une trace de nos aventures sur Minecraft.<br/>
                        <br/>
                        Vous en avez marre de recréer un nouveau monde à chaque fois que vous recommencez une survie ou de perdre vos anciens mondes?<br/>
                        Alors Turbocube est fait pour vous!
                    </p>
                    <br/>
                    <p>
                        
                    </p>
                    <h3 className="title-uppercase">
                        On<i className="fa fa-heart heart mr-3 ml-1"/>ce qu'on fait
                    </h3>
                    <br/>
                    <p>
                        Avant d'être des admins, nous sommes aussi des joueurs!<br/>
                        C'est de notre passion pour ce jeu que nous est venu l'envie de
                        créer un serveur pour nous et vous réunir tous.
                    </p>
                </div>
                <SectionAdmin/>
                <SectionMoreInfo/>
            </Container>
            <Footer/>
        </>
    );
}

export default AboutUs;
