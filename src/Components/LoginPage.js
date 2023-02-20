import React, { useEffect, useState } from 'react';
import { Divider, TextField } from '@mui/material';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { Card, Container } from 'react-bootstrap';
import "./LoginCard.css";
import "./LoginPage.css"
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "./Araby.ailogo.svg";
import Backvideo from "./Background.mp4";
import "@fontsource/poppins";

function LoginPage() {
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

            <Container md='8' style={{ width: "400px" }}>

                <Card.Body >
                    <center style={{ padding: "10px" }}>
                        <img src={Logo} style={{ width: "40px", height: "40px", cursor: "pointer" }} onClick={() => routeChange("/")} />
                        <h1>{t("Welcome")} <span class="wave">👋</span></h1>
                        <p>{t("Please Sign in to continue")}</p>
                        <Container>
                            <div className='row' style={{ paddingBottom: "10px", textAlign: "right" }}>
                                <TextField placeholder={t('Enter your email')} style={{ borderRadius: ".375rem", paddingBottom: "10px" }}></TextField>
                                <TextField placeholder={t('Password')} style={{ borderRadius: ".375rem", paddingBottom: "10px" }}></TextField>
                                <Link to={"/ForgetPassword"} style={{ color: "black", textDecoration: "none", fontSize: "10px", fontWeight: "bold" }} >{t("Forgot password?")}</Link>
                            </div>
                            <div >
                                <motion.div
                                    initial={{ scale: 1, borderRadius: "6px", background: "linear-gradient(to right,#d851ef, #9240CA, #1877f2, #1877f2)" }}
                                    whileHover={{ scale: 1.1, background: "linear-gradient(to left,#d851ef,#9240CA, #1877f2)", }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <button style={{
                                        borderRadius: "6px",
                                        border: "0", color: "white", width: "100%", height: "30px", background: "none"
                                    }} > {t("Login")}</button></motion.div>
                                <div style={{ paddingTop: "5px" }}>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <button
                                            onClick={() => routeChange("/SignUpPage")} style={{
                                                borderRadius: "6px",
                                                border: "1px solid rgba(60, 200, 235, 1)", color: "black", width: "100%", background: "white", height: "30px",

                                            }} > {t("Create account")}</button></motion.div>
                                </div>
                            </div>
                        </Container>

                    </center>

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
                        <Link to={"/LoginPagePhone"} style={{ color: "#02bcea", textDecoration: "none", fontSize: "14px" }} ><AiOutlineArrowRight />{t("Login using Mobile")}</Link>
                    </Container>
                </Card.Body>

            </Container>
            <div className='background2'>
                <h1 style={{ fontFamily: "Poppins", color: "white", left: "auto", right: rightPad, position: "absolute", bottom: "50%" }}>{t("Creating Magic")}</h1>
                <video style={{ height: "100%" }} src={Backvideo} autoplay="true" loop="true" />
            </div>

        </div >
    )
}
export default LoginPage;
