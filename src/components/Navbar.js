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
import classnames from "classnames";

import {
    Button,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
} from "reactstrap";
import {NotificationManager} from 'react-notifications';

import 'react-notifications/lib/notifications.css';

function MainNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand
                        data-placement="bottom"
                        href="/"
                        title="Coded by Alexis Knob"
                    >
                        <i className="nc-icon nc-spaceship"></i>&nbsp;Turbocube
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse,
                        })}
                        onClick={toggleNavbarCollapse}
                    >
                        <span className="navbar-toggler-bar bar1"/>
                        <span className="navbar-toggler-bar bar2"/>
                        <span className="navbar-toggler-bar bar3"/>
                    </button>
                </div>
                <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}
                >
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/inventory">
                                <i className="nc-icon nc-briefcase-24"/>&nbsp;&nbsp;Inventaire
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://mc.turbocube.fr:8123/" target="_blank">
                                <i className="nc-icon nc-album-2"/>&nbsp;&nbsp;Map
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about-us">
                                <i className="nc-icon nc-circle-10"/>&nbsp;&nbsp;A propos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Button
                                className="btn-round"
                                color="info"
                                target="_blank"
                                onClick={() => {
                                    navigator.clipboard.writeText('mc.turbocube.fr')
                                    NotificationManager.success('Copier dans le presse-papier')
                                }}
                            >
                                mc.turbocube.fr
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;
