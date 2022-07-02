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
    Row,
    Col,
    Button,
    Modal,
} from "reactstrap";
import styled from "styled-components";

// core components
import Computer from "../../assets/img/computer-craft.png";

const datapacksList = [
    {
        icon: '✅',
        title: 'ADVANCEMENTS PACK',
        content: 'Ajoute plus de 900 nouveaux succès, vous aurais des défis à relever avec des récompenses et des trophées à la clef.',
        link: 'https://www.planetminecraft.com/data-pack/blazeandcave-s-advancements-pack-1-12/',
        new: true
    },
    {
        icon: '🐼',
        title: 'ALL MOB HEADS',
        content: 'Tous les monstres du jeu peuvent maintenant laisser tomber leur tête, vous aussi.',
        link: 'https://fr-minecraft.net/datapack-minecraft-5-all-mob-heads.html',
        new: true
    },
    {
        icon: '🗽',
        title: 'ARMOR STATUES',
        content: 'Ajoute un livre unique qui vous  permet de modifier les propriétés des supports d\'armure pour le donner l\'apparence souhaité.',
        link: 'https://www.curseforge.com/minecraft/customization/armor-statues-datapack',
        new: false
    },
    {
        icon: '⌚',
        title: 'COORDINATES HUD',
        content: 'Ajoute des informations à votre barre d\'action. Les coordonnées XYZ et une horloge de 24 heures.',
        link: 'https://vanillatweaks.net/picker/datapacks/',
        new: false
    },
    {
        icon: '⛩️',
        title: 'CUSTOM NETHER PORTALS',
        content: 'Allumez des portails de l\'au-delà de la forme et de la taille de votre choix, ou utilisez de la crying obsidienne.',
        link: 'https://vanillatweaks.net/picker/datapacks/',
        new: false
    },
    {
        icon: '🪦',
        title: 'GRAVES',
        content: 'Lorsqu\'un joueur meurt, une tombe contenant tous ses objets est créée à son emplacement.',
        link: 'https://vanillatweaks.net/picker/datapacks/',
        new: false
    },
    {
        icon: '🛏️',
        title: 'MULTIPLAYER SLEEP',
        content: 'Tous les joueurs de l\'overworld ne doivent pas dormir pour passer la nuit et la pluie.',
        link: 'https://vanillatweaks.net/picker/datapacks/',
        new: false
    },
    {
        icon: '🧭',
        title: 'NETHER PORTAL COORDS',
        content: 'Ajoute un déclencheur qui calcule l\'endroit où un portail nether doit être placé dans l\'autre dimension. ',
        link: 'https://vanillatweaks.net/picker/datapacks/',
        new: false
    },
    {
        icon: '🦙',
        title: 'WANDERING TRADES',
        content: 'Ajoute des mini-blocs aux trades du commerçant errant (wandering trader).',
        link: 'https://vanillatweaks.net/picker/datapacks/',
        new: false
    },
]

const pluginsList = [
    {
        icon: '🧱',
        title: 'CLAIMCHUNK',
        content: "Permet comme son nom l'indique de claim des chunks et donc des créer des villes.",
        link: 'https://www.spigotmc.org/resources/claimchunk.44458/',
        new: true
    },
    {
        icon: '🦄',
        title: 'DISCORDLINK',
        content: 'Lien Discord/Minecraft, permet de lier son compte Discord et de recevoir/envoyer des messages.',
        link: 'https://www.spigotmc.org/resources/discordlink.93969/',
        new: true
    },
    {
        icon: '🗺️',
        title: 'DYNAMAP',
        content: "Le Google maps de Minecraft, permet d'avoir une map 2D et 3D de Turbocube",
        link: 'https://www.spigotmc.org/resources/dynmap%C2%AE.274/',
        new: true
    },
    {
        icon: '👌',
        title: 'ESSENTIALS',
        content: 'Ajoute 130 commandes et features supplémentaires sur le serveur.',
        link: 'https://www.spigotmc.org/resources/essentialsx.9089/',
        new: true
    },
    {
        icon: '👜',
        title: 'INVENTORIES',
        content: 'Permet de récupérer et sauvegarder les inventaires des joueurs de Turbocube.',
        link: 'https://github.com/Xwaffle1/inventories-core',
        new: true
    },
    {
        icon: '🔒',
        title: 'LUCKPERMS',
        content: 'Permet de gérer les droits et de définir des groupes (modos, admin, etc...).',
        link: 'https://www.spigotmc.org/resources/luckperms.28140/',
        new: true
    },
    {
        icon: '🌍',
        title: 'WORLDEDIT',
        content: 'On ne le présente plus. #woodaxe',
        link: 'https://dev.bukkit.org/projects/worldedit',
        new: false
    },
    {
        icon: '💂',
        title: 'WORLDGUARD',
        content: 'Permet de protéger certaines zones des griefers et des creepers.',
        link: 'https://dev.bukkit.org/projects/worldguard',
        new: false
    },
]

const PluginsContainer = styled.div`
  margin: 10px 10px 20px 10px;
  justify-content: space-between;
  min-height: 200px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #51bcda;
  border-style: inset;
  @media (max-width: 767px) {
        margin: 10px 0px 20px 0px;
    }
`

const DatapacksContainer = styled.div`
  margin: 10px 10px 20px 10px;
  justify-content: space-between;
  min-height: 200px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #6bd098;
  border-style: inset;
  @media (max-width: 767px) {
        margin: 10px 0px 20px 0px;
    }
`

const CustomHeader = styled.div`
  display: flex;
  gap: 5px;
`

const ComputerImg = styled.img`
    width: 100%;
    height: auto;
    max-width: 100px;
    transform: scaleX(-1);
`

const CustomRow = styled(Row)`
    @media (max-width: 767px) {
        text-align: center;
        justify-content: center;
    }
`

const InfosContainer = styled.div`
    font-size: 14px;
    font-weight: 500;
 
  @media (max-width: 767px) {
    margin-top: 20px;
  }
`

function SectionModals({
   pluginsModal,
   setPluginsModal,
   datapacksModal,
   setDatapacksModal,
   serversModal,
   setServersModal
}) {

    return (
        <>
            <Modal isOpen={pluginsModal} toggle={() => setPluginsModal(false)}>
                <div className="modal-header">
                    <button
                        aria-label="Close"
                        className="close"
                        type="button"
                        onClick={() => setPluginsModal(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                    <h5
                        className="modal-title text-center"
                        id="exampleModalLabel"
                    >
                        Turbo-plugins
                    </h5>
                </div>
                <div className="modal-body">
                    {pluginsList.map((plugin) => (
                        <PluginsContainer>
                            <CustomHeader>
                                <h3 style={{margin: 0}}>
                                    <b>{plugin.icon}&nbsp;{plugin.title}</b>
                                    &nbsp;
                                    {plugin.new && <small>New!</small>}
                                </h3>
                            </CustomHeader>
                            <br/>
                            <p>{plugin.content}</p>
                            <br/>
                            <div>
                                <Button
                                    href={plugin.link}
                                    target="_blank"
                                    className="btn-fill"
                                    color="info"
                                    size="sm"
                                >
                                    Plus d'infos
                                </Button>
                            </div>
                        </PluginsContainer>
                    ))}
                </div>
            </Modal>
            <Modal isOpen={datapacksModal} toggle={() => setDatapacksModal(false)}>
                <div className="modal-header">
                    <button
                        aria-label="Close"
                        className="close"
                        type="button"
                        onClick={() => setDatapacksModal(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                    <h5
                        className="modal-title text-center"
                        id="exampleModalLabel"
                    >
                        Turbo-datapacks
                    </h5>
                </div>
                <div className="modal-body">
                    {datapacksList.map((datapack) => (
                        <DatapacksContainer>
                            <CustomHeader>
                                <h3 style={{margin: 0}}>
                                    <b>{datapack.icon}&nbsp;{datapack.title}</b>
                                    &nbsp;
                                    {datapack.new && <small>New!</small>}
                                </h3>
                            </CustomHeader>
                            <br/>
                            <p>{datapack.content}</p>
                            <br/>
                            <div>
                                <Button
                                    href={datapack.link}
                                    target="_blank"
                                    className="btn-fill"
                                    color="success"
                                    size="sm"
                                >
                                    Plus d'infos
                                </Button>
                            </div>
                        </DatapacksContainer>
                    ))}
                </div>
            </Modal>
            <Modal isOpen={serversModal} toggle={() => setServersModal(false)}>
                <div className="modal-header">
                    <button
                        aria-label="Close"
                        className="close"
                        type="button"
                        onClick={() => setServersModal(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                    <h5
                        className="modal-title text-center"
                        id="exampleModalLabel"
                    >
                        Turbo-server
                    </h5>
                </div>
                <div className="modal-body">
                    <CustomRow>
                        <Col md="4">
                            <ComputerImg alt='right-img' src={Computer}/>
                        </Col>
                        <InfosContainer md="8">
                            <div>➡️ VPS sous Ubuntu</div>
                            <div>➡️ Hebergé par OVH à Strasbourg</div>
                            <div>➡️ 16Go de RAM</div>
                            <div>➡️ 80Go de Stockage</div>
                        </InfosContainer>
                    </CustomRow>
                </div>
            </Modal>
        </>
    );
}

export default SectionModals;
