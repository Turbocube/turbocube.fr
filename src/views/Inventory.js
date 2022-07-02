import React, { useState } from 'react'
import styled from 'styled-components';

import Navbar from "components/Navbar.js";
import Header from "components/MainHeader";
import Footer from "components/Footer.js";

const Container = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 50px;
`;

const HideHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  background: white;
  top: 0px;
  left: 2px;
`;

const CustomIframe = styled.iframe`
  width: 100%;
  height: 140vh;
`

const Inventory = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
      <>
        <Navbar />
        <Header title='Inventaire' subtitle='Inventaire en live des joueurs de Turbocube'/>
        <Container>
            {!isLoading && <><HideHeader/></>}
            <CustomIframe
                onLoad={() => setIsLoading(false)}
                src={process.env.REACT_APP_MC_INVENTORY_URL}
                title="turbocube-inv"
            />
        </Container>
        <Footer />
      </>
    );
}

export default Inventory;
