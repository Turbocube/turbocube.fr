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

function Header({title, subtitle}) {
    return (
        <>
            <div
                className="page-main-header section-dark"
                style={{
                    minHeight: '50vh',
                    backgroundImage:
                        "url(" + require("assets/img/wallpaper-minecraft-1.19.jpg").default + ")",
                }}
            >
                <div className="filter"/>
                <div className="content-center">
                    <Container>
                        <h1 className="presentation-title text-center"
                            style={{fontSize: '2.5rem', marginTop: '100px'}}>{title}</h1>
                        <h2 className="presentation-subtitle text-center" style={{fontSize: '1.25rem'}}>{subtitle}</h2>
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
        </>
    );
}

export default Header;
