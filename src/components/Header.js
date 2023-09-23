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
/*eslint-disable*/
import React from "react";

// reactstrap components
import {Container} from "reactstrap";

// core components

function Header({infos}) {
    return (
        <div
            className="page-header section-dark"
            style={{
                backgroundImage:
                    "url(" + require("assets/img/wallpaper-minecraft-1.19.jpg").default + ")",
            }}
        >
            <div className="filter"/>
            <div className="content-center">
                <Container>
                    <div className="title-brand">
                        <h1 className="presentation-title">Turbocube</h1>
                    </div>
                    <h2 className="presentation-subtitle text-center">
                        Le serveur est <b style={{fontWeight: 800}}>{infos.online ? 'Online 🟢' : 'Offline 🔴'}</b>
                    </h2>
                </Container>
            </div>
            <div
                className="moving-clouds"
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/clouds.png").default + ")",
                }}
            />
        </div>
    );
}

export default Header;
