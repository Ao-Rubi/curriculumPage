import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pfp from "../img/SadCat.png";
import htmlImg from "../img/html.webp";
import cssImg from "../img/css.webp";
import jsImg from "../img/JavaScript.png";
import reactImg from "../img/React.png";
import bootstrapImg from "../img/Bootstrap.png";
import githubImg from "../img/GitHub.png";
import vscImg from "../img/vsc.png";
import slackImg from "../img/Slack.png";
import trelloImg from "../img/trello.png";
import discordImg from "../img/discord.png";
import "../components/body.css"

const Body = () => {
    return (
        <div className='mt-4'>
            <section className='container'>
                <Container>
                    <Row>
                        <Col xs lg="3">
                            <img className='w-100 border-circular' src={pfp} alt="Foto de perfil" />
                        </Col>
                        <Col border="secondary">
                            <div className='text-center mt-4'>
                                <h1>García Mauro Nicolás</h1>
                            </div>
                            <div className='text-center mt-3'>
                                <h2>M.E.R.N Jr Web Developer Fullstack</h2>
                            </div>
                            <div>
                                <p className='ps-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis earum blanditiis quaerat mollitia non voluptate eveniet, sed nihil sapiente!</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        <hr />
            <section className='container mt-5 mb-4'>
                <Container>
                    <Row>
                        <Col className='border-dark'>
                            <div className='text-center'>
                                <h3>Informacion Academica</h3>
                            </div>
                            <hr />
                            <div>

                            </div>
                        </Col>

                        <Col className='border-dark ms-5'>
                            <div className='text-center'>
                                <h3>Experiencia Laboral</h3>
                            </div>
                            <hr />
                            <div>
                                
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs lg="3"></Col>
                        <Col className='border-dark mt-5' xs lg="6">
                            <div className='text-center'>
                                <h3>Idiomas</h3>
                            </div>
                            <hr />
                            <div className='text-center'>
                                <p>Español: Nativo   ---  Ingles: Bilingue</p>
                            </div>
                        </Col>
                        <Col xs lg="3"></Col>
                    </Row>
                </Container>
            </section>
        <hr />
            <section className='container mt-4'>
                <div className='text-center mb-4'>
                    <h3>Lenguages de programacion</h3>
                </div>
                <Container>
                    <Row>
                        <Col> <img src={htmlImg} alt="html logo" className='w-100' /> </Col>
                        <Col> <img src={cssImg} alt="css3 logo" className='w-100' /> </Col>
                        <Col> <img src={jsImg} alt="javaScript logo" className='w-100' /> </Col>
                        <Col> <img src={reactImg} alt="React logo" className='w-100' /> </Col>
                        <Col> <img src={bootstrapImg} alt="Bootstrap logo" className='w-100' /> </Col>
                    </Row>

                    <div className='text-center mt-5 mb-3'>
                        <h3>Programas</h3>
                    </div>

                    <Row>
                        <Col> <img src={githubImg} alt="GitHub logo" className='w-100' /> </Col>
                        <Col> <img src={vscImg} alt="visual studio code logo" className='w-100' /> </Col>
                        <Col> <img src={slackImg} alt="Slack logo" className='w-100' /> </Col>
                        <Col> <img src={trelloImg} alt="Trello logo" className='w-100' /> </Col>
                        <Col> <img src={discordImg} alt="Discord logo" className='w-100' /> </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Body;