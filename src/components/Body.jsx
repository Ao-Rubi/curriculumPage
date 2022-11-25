import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pfp from "../img/SadCat.png";
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
                                <h1>M.E.R.N Jr Web Developer Fullstack</h1>
                            </div>
                            <div>
                                <p className='ps-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis earum blanditiis quaerat mollitia non voluptate eveniet, sed nihil sapiente!</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        <hr />
            <section className='container mt-5'>
                <Container>
                    <Row>
                        <Col className='border-dark'>
                            <div className='text-center'>
                                <h3>Informacion Academica</h3>
                            </div>

                            <div>

                            </div>
                        </Col>

                        <Col className='border-dark ms-5'>
                            <div className='text-center'>
                                <h3>Experiencia Laboral</h3>
                            </div>
                            <div>
                                
                            </div>
                        </Col>

                        <Col className='border-dark mt-5' xs lg="12">
                            <div className='text-center'>
                                <h3>Idiomas</h3>
                            </div>
                            <div className='text-center'>
                                <p>Español: Nativo   ---  Ingles: Bilingue</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Body;