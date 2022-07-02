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
import React, {useState, useEffect} from "react";

// services components
import {getServerInfos} from './services/getServerInfos'

// core components
import Navbar from "components/Navbar.js";
import Header from "components/Header.js";
import Footer from "components/Footer.js";

// section components
import SectionInfo from "./common/SectionInfo";
import SectionUsers from './common/SectionUsers'
import SectionForm from "./common/SectionForm";
import SectionCreators from './common/SectionCreators'
import SectionHelp from './common/SectionHelp'

function Home() {
    const [infos, setInfos] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            getServerInfos().then(res => setInfos(res))
        }, 120000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        getServerInfos().then(res => setInfos(res))
    }, []);

    return (
        <>
            <Navbar/>
            <Header infos={infos}/>
            <div className="main">
                <SectionInfo/>
                <SectionUsers infos={infos}/>
                <SectionForm/>
                <SectionCreators/>
                <SectionHelp/>
            </div>
            <Footer/>
        </>
    );
}

export default Home;
