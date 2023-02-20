import React from 'react';
import { Divider, TextField } from '@mui/material';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import realSignImg from "./realSignImg.svg";
import { Card, Col, Container, ModalHeader, Row } from 'react-bootstrap';
import "./LoginCard.css";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
function Login() {
    const { t } = useTranslation();
    let navigate = useNavigate();
    const routeChange = (page) => {
        let path = page;
        navigate(path);
    }
    return (
        <div style={{ justifyContent: "center", alignItems: "center" }}>
            <div >
                <Container id='containeratt' style={{ position: "absolute", bottom: 0, top: 100, right: 0, left: 0, border: "none" }}>
                    <Card className='divatt2' style={{ borderRadius: "50px" }}>

                        <Row className='g-0 d-flex align-items-center'>

                            <Col md='6'>
                                <p style={{ textAlign: "center", color: "#1171d8", fontSize: "22px" }}>{t("Join Now And Receive A Special Gift From Us")}</p>
                                <img src={realSignImg} alt='phone' className='rounded-t-10 rounded-tr-lg-0' fluid style={{ width: "80%" }} />
                            </Col>

                            <Col md='6' >

                                <Card.Body >
                                    <center style={{ padding: "10px" }}>
                                        <div>
                                            <h3 style={{ textAlign: "center", fontFamily: "normal" }}>{t("Create Account")}</h3>
                                            <p style={{ textAlign: "center" }}>{t("Get access to Social Media, Email, articles, Advertisments, Images and much more.")}</p>
                                        </div>
                                        <Container>
                                            <div className='row' style={{ paddingBottom: "10px" }}>
                                                <TextField placeholder={t('Enter your email')} style={{ borderRadius: ".375rem" }}></TextField>
                                            </div>
                                            <div className='row'>
                                                <motion.a
                                                    initial={{ scale: 1, borderRadius: "6px", background: "linear-gradient(to right,#d851ef, #9240CA, #1877f2, #1877f2)" }}
                                                    whileHover={{ scale: 1.1, background: "linear-gradient(to left,#d851ef,#9240CA, #1877f2)", }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <button style={{
                                                        borderRadius: "6px",
                                                        border: "0", color: "white", width: "100%", background: "none"
                                                    }} > {t("Continue")}</button></motion.a>
                                            </div>
                                        </Container>

                                    </center>
                                    <button style={{ color: "rgb(17, 113, 216)", backgroundColor: "transparent", border: "none" }} onClick={() => routeChange("/SignUpUsingPhone")}>{t("Register using mobile number?")}</button>

                                    <Divider style={{ color: "rgba(0,0,0,0.5)", fontSize: "small" }}>{t("Or continue with")} </Divider>
                                    <Container >

                                        <Container style={{ padding: 5, width: "100%" }} >
                                            <div style={{ paddingBottom: "5px" }}>

                                                <motion.div
                                                    whileHover={{ scale: 1.1, }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <button className='buttonatt' style={{
                                                        backgroundColor: "white",
                                                    }}> <FcGoogle></FcGoogle> Google</button>
                                                </motion.div>
                                            </div>
                                            <div style={{ paddingBottom: "5px" }}>

                                                <motion.div
                                                    whileHover={{ scale: 1.1, }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <button className='buttonatt'
                                                        style={{ backgroundColor: "white", }}
                                                    ><BsFacebook color="blue"></BsFacebook> Facebook</button>
                                                </motion.div>
                                            </div>
                                        </Container>

                                        <motion.div
                                            whileHover={{ scale: 1.1, }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <button className='buttonatt' style={{
                                                backgroundColor: "black", color: "white"
                                            }}><BsApple></BsApple> Apple</button>
                                        </motion.div>

                                    </Container>
                                </Card.Body>

                            </Col>

                        </Row>

                    </Card>
                </Container>
            </div >
        </div >
    )
}
export default Login;