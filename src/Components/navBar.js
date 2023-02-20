import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './Araby.ailogo.svg';
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import "./navBar.css";
import login from "./Login.svg";
import { Modal } from '@mui/material';
import Login from './LoginCard';
import { useState } from 'react';
import "@fontsource/tajawal";
import "@fontsource/poppins";


function NavBar() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let navigate = useNavigate();
    const routeChange = (page) => {
        let path = page;
        navigate(path);
    }
    const [language, setlanguage] = useState();
    const { t, i18n } = useTranslation();
    const [font, setFont] = useState();

    useEffect(() => {
        if (i18n.language == "en") {
            setlanguage("ع")
            setFont("")
        }
        else {
            setlanguage("EN")
            setFont("fontBold")
        }
    }, [i18n.language])
    const handleLanguagePress = () => {
        i18n.changeLanguage(i18n.language == "en" ? "ar" : "en")

    };
    const functions = () => {
        window.location.reload()
        handleLanguagePress();

    }
    return (

        <div style={{
            display: "flex", flexDirection: "row", justifyContent: "space-between", position: "fixed", alignItems: "center",
            left: 0, top: 0, right: 0, direction: "ltr", background: "black", height: "88px", zIndex: "999", padding: "10px 20px"
        }}>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home" >
                        <img

                            src={logo}
                            width="60"
                            height="68"
                            alt="logo"
                            style={{ alignItems: "center", display: "flex", gap: "60px" }}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>

                        <Nav style={{ alignItems: "center", position: "fixed", right: "0", left: "auto", top: "0", gap: "20px", padding: "10px 20px" }}>


                            <div style={{
                                display: "flex",
                                justifyContent: "space-between", gap: "30px", right: "0px", top: "0px", left: "auto", paddingTop: "10px"
                            }}>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >   <div id={font} dir="auto" style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", }}>
                                        <span id='fontResize'>
                                            <Nav.Link style={{ borderColor: "white", color: "white", textAlign: "center", }} onClick={() => routeChange("/LoginPage")}>{t("Login")}</Nav.Link>
                                        </span>
                                        <img className="remove" src={login} style={{ display: "auto", height: "35px", width: "35px", cursor: "pointer", verticalAlign: "middle" }} onClick={() => routeChange("/LoginPage")} />
                                    </div>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        style={{ overflowY: "auto" }}
                                    >
                                        <motion.div
                                            animate={{ y: 20 }}
                                            transition={{ type: "spring", stiffness: 100 }}
                                        >

                                            <Login></Login>
                                        </motion.div>

                                    </Modal>


                                </motion.a>
                                <motion.a
                                    className="remove"
                                    initial={{
                                        scale: 1, border: "1px solid white", textDecoration: "none",

                                        borderRadius: " 100px", background: "linear-gradient(90deg, #3a95f6 20%, #7a14ff)"
                                    }}
                                    whileHover={{ scale: 1.1, background: "black" }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="remove">
                                        <Nav.Link id={font} style={{
                                            display: "flex",
                                            color: "white", padding: "7px 22px",
                                            fontSize: "20px", justifyContent: "center", alignItems: "center",
                                        }} onClick={handleOpen}>{t("Signup")}</Nav.Link>
                                    </span>
                                </motion.a>
                            </div>
                            <Nav.Link
                                style={{
                                    color: "white", right: 0, left: "auto",
                                    fontSize: "large", fontWeight: "bolder", alignItems: "center", justifyContent: "center", display: "flex"
                                }} onClick={functions}>
                                {language}
                            </Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
            <div>


            </div>
        </div >
    );
}

export default NavBar;