import React, { useEffect, useState } from 'react';
import { Divider } from '@mui/material';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { Button, Card, Container } from 'react-bootstrap';
import "./LoginCard.css";
import "./LoginPage.css"
import { motion } from "framer-motion";
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "./Araby.ailogo.svg";
import Backvideo from "./Background.mp4";


function LoginPagePhone() {
    const { t, i18n } = useTranslation();
    const [rightPad, setPadRight] = useState()
    let navigate = useNavigate();
    const routeChange = (page) => {
        let path = page;
        navigate(path);
    }
    useEffect(() => {
        if (i18n.language == 'en')
            setPadRight("100px");
        else
            setPadRight("150px");
    })
    return (
        <div className="d-flex" dir='ltr' style={{ justifyContent: "center", alignItems: "center", }}>

            <Container md='8' style={{ width: "400px" }} >

                <Card.Body >
                    <center style={{ padding: "10px" }}>
                        <img src={Logo} style={{ width: "40px", height: "40px", cursor: "pointer" }} onClick={() => routeChange("/")} />

                        <h1>{t("Welcome")} <span class="wave">👋</span></h1>
                        <p>{t("Please Sign in to continue")}</p>
                        <Container>

                            <div className='row' style={{ paddingBottom: "10px", textAlign: "right" }}>
                                <Container >
                                    <center >
                                        <div style={{ display: "inline-block" }}>
                                            <PhoneInput
                                                placeHolder={t("Enter phone number")}
                                            >
                                            </PhoneInput>
                                        </div>
                                        <div style={{ display: "inline-block" }}>
                                            <Button style={{ marginBottom: "9px", height: "30px" }}><AiOutlineArrowRight style={{ marginBottom: "10px" }} /></Button>
                                        </div>
                                    </center>
                                </Container>

                            </div>


                        </Container>


                    </center>

                    <Container >
                        <Container style={{ padding: 5, }} >
                            <Divider style={{ color: "rgba(0,0,0,0.5)", fontSize: "small" }}>{t("Or continue with")} </Divider>

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

                            <motion.div
                                whileHover={{ scale: 1.1, }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <button className='buttonatt' style={{
                                    backgroundColor: "black", color: "white",
                                }}><BsApple></BsApple> Apple</button>
                            </motion.div>
                            <Link to={"/LoginPage"} style={{ color: "#02bcea", textDecoration: "none", fontSize: "14px" }} ><AiOutlineArrowRight />{t("Login using Email")}</Link>
                        </Container>
                    </Container>

                </Card.Body>

            </Container>

            <div className='background2'>
                <h1 style={{ fontFamily: "Poppins", color: "white", position: "absolute", bottom: "50%", left: "auto", right: rightPad, }}>{t("Creating Magic")}</h1>
                <video style={{}} src={Backvideo} autoPlay="true" loop="true" />
            </div>
        </div >
    )
}
export default LoginPagePhone;
