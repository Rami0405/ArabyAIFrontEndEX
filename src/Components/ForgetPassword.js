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
import MovingLetters from './MovingLetters'
function ForgetPassword() {
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

            <Container md='8' style={{ width: "400px", }}>

                <Card.Body >
                    <center style={{ padding: "10px" }}>
                        <img src={Logo} style={{ width: "80px", height: "80px", cursor: "pointer" }} onClick={() => routeChange("/")} />
                        <p style={{ color: "grey" }}>{t("Enter your email address associated with your account and we'll send you a link to reset your password")}</p>
                        <Container>
                            <div className='row' style={{ paddingBottom: "10px", textAlign: "right" }}>
                                <TextField placeholder={t('Enter your email')} style={{ borderRadius: ".375rem", paddingBottom: "10px" }}></TextField>
                            </div>
                            <div >
                                <motion.div
                                    initial={{ scale: 1, borderRadius: "6px", background: "linear-gradient(to right,#d851ef, #9240CA, #1877f2, #1877f2)" }}
                                    whileHover={{ scale: 1.1, background: "linear-gradient(to left,#d851ef,#9240CA, #1877f2)", }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <button style={{
                                        borderRadius: "6px",
                                        padding: "6px",
                                        border: "0", color: "white", width: "100%", background: "none"
                                    }} > {t("Send OTP")}</button></motion.div>

                            </div>
                        </Container>

                    </center>




                </Card.Body>
                <Link to={"/LoginPage"} style={{ color: "#02bcea", textDecoration: "none", }} ><AiOutlineArrowRight />{t("Back to sign in")}</Link>

            </Container>
            <div className='background2'>
                <h1 style={{ fontFamily: "Poppins", color: "white", left: "auto", right: rightPad, position: "absolute", bottom: "50%" }}>{t("Creating Magic")}</h1>
                <video style={{ height: "100%" }} src={Backvideo} autoplay="true" loop="true" />
            </div>

        </div >

    )
}
export default ForgetPassword;
