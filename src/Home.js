import './App.css';
import './Home.css';
import React from 'react';
import NavBar from './Components/navBar';
import { useTranslation } from 'react-i18next';
import logo from './Components/ropot.gif'
import person from './Components/thinking.svg'
import { Card, Container, Row } from 'react-bootstrap';
import { Modal, TextField } from '@mui/material';
import { motion } from "framer-motion"
import ImageGenerator from './Components/ImageGenerator';
import TypingGenerator from './Components/TypingGenerator';
import OurWork from './Components/OurWork';
import Typewriter from 'typewriter-effect';
import GoogleFontLoader from 'react-google-font-loader';
import FooterPage from './Components/FooterPage';
import MovingText from 'react-moving-text';
import { useEffect, useState } from 'react';
import Login from "./Components/LoginCard";
import bgWhite from './Components/bgWhite.svg'
import WallPaperGenerator from './Components/WallPaperGenerator';
import arrow from './Components/arrow.png';
<GoogleFontLoader
    fonts={[
        {
            font: 'Tajawal',
        },
    ]}
/>
function Home() {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [fontWeight, setFontWeight] = useState();
    const [font, setFont] = useState();
    const [x, setX] = useState();
    const [directionPhoto, setDirectionPhoto] = useState();
    const [buttonBold, setButtonBold] = useState();

    document.body.dir = i18n.dir();

    useEffect(() => {
        if (i18n.language == "en" || i18n.language == null) {
            setFont("fontEN")
            setFontWeight("fontBEN")
            setX(20)
            setDirectionPhoto("imageArrowEN")

        }
        else {
            setFont("fontAR")
            setFontWeight("fontBAR")
            setX(-20)
            setDirectionPhoto("imageArrowAR")
            setButtonBold("buttonBold")


        }
    }, [i18n.language])

    return (
        <div className={font}>
            <NavBar />
            <div >
                <div >
                    <div className='divPhone' style={{ position: 'relative', maxWidth: "100%", padding: "60px", }}>
                        <WallPaperGenerator />
                        <div className="" style={{ paddingTop: "88px", color: "white", }} >
                            <div className='row' style={{
                                paddingLeft: "5%", alignItems: "center",
                                justifyContent: "space-around", padding: "10px 5% 10px 10px",
                            }}>
                                <div className='col-lg-6 col-md-6 col-sm-8 col-10'>
                                    <p className={fontWeight} style={{ lineHeight: 1.6, fontSize: "14px" }}>{t('Learn more about Araby AI')}</p>
                                    <MovingText
                                        type="fadeInFromBottom"
                                        duration="1100ms"
                                        delay="0s"
                                        direction="normal"
                                        timing="ease"
                                        iteration="1"
                                        fillMode="none">
                                        <h1 className="h1FontWeight" style={{ fontSize: "45px" }}>{t('An AI based content ')}  <br></br>{t("generator")}     </h1>     </MovingText>

                                    <p>{t('In a few minutes you can create')}<Typewriter
                                        options={{
                                            strings: [t("social media content"), t("email"), t("websites"), t("New Article"), t("and much more...")],
                                            autoStart: true,
                                            loop: true,
                                            delay: 100
                                        }}
                                    /></p>

                                    <motion.div
                                        whileHover={{ scale: 1.1, x: x }}
                                        whileTap={{ scale: 0.9, }}>
                                        <button id={buttonBold} className="buttonPhone" onClick={handleOpen} style={{
                                            border: "0", backgroundImage: "linear-gradient(45deg,#1171d8,#3cc8eb)",
                                            color: "white", borderRadius: "2rem",
                                        }}>{t("Start now")}</button>
                                    </motion.div>

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
                                </div>


                                <div className="col-lg-6 col-md-6 col-sm-8 col-10"
                                    style={{ display: "flex", justifyContent: "center", }}>
                                    <div style={{ position: "relative", justifyContent: "center", alignItems: "center", paddingTop: "30px" }}>
                                        <img className="robotPhoto" src={logo} alt="loading..." style={{
                                            zIndex: "201", height: "400px",
                                            width: "400px", right: "0px", left: "auto", top: "80px",
                                            position: "absolute", verticalAlign: "middle"
                                        }} />
                                        <img className="robotPhotoBG" src={bgWhite} style={{ verticalAlign: "middle", height: "350px", paddingTop: "60px", width: "350px", opacity: "0.4" }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", padding: "50px", paddingTop: "200px" }}>

                    <div className='thinkingCol' style={{ display: "flex", flex: 1, maxWidth: "100%", }} >

                        <article style={{ display: "flex", flexDirection: "column", position: "relative", flexGrow: 1, flexShrink: 1 }}>
                            <h1 style={{ fontSize: "45px", fontWeight: "bold" }}>{t("Confused to write an email?")}
                            </h1>
                            <section style={{ alignSelf: "flex-start", display: "flex" }}>
                                <p style={{ fontSize: "22px", width: "70%", fontWeight: 300 }}>
                                    {t("With us, writing an email has become easier. Put the topic you want to write about and leave the content to us")}    </p>
                            </section>
                            <img className='imageThinking' style={{ alignSelf: "flex-end", height: "364px", width: "400px", verticalAlign: "middle" }} src={person} />

                        </article>

                        <div style={{ width: "100%", }}>
                            < Card className="shadow" style={{
                                margin: "60px 20px 20px",
                                padding: "20px",
                                borderRadius: "38px",
                                border: "none"

                            }} >

                                <Card.Body>

                                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "10px", width: "100%" }}>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                                            <div style={{ display: "flex", gap: "10px", margin: "10px", width: "100%", opacity: "0.5" }}>
                                                <label >{t("From")}</label>
                                                <TextField className="inputField" id="standard-basic" placeholder={t("Your name")} variant="standard"
                                                />
                                            </div>
                                            <div style={{ display: "flex", gap: "10px", margin: "10px", width: "100%", opacity: "0.5" }}>

                                                <label style={{ opacity: 0.5 }}>{t("To")}</label>
                                                <TextField className="inputField" id="standard-basic" placeholder={t("The addressee's name")} variant="standard"
                                                />
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                            <div style={{ position: "relative", alignItems: "center", display: "flex", gap: "10px", margin: "10px", width: "100%" }}>
                                                <label> {t("The subject")}</label>
                                                <TextField className="shadow" placeholder={t("Write the subject here...")} style={{
                                                    width: "100%", border: "none", borderRadius: "15px",
                                                    padding: "15px 10px",
                                                }} InputProps={{ disableUnderline: true }} variant='standard' />
                                                <img className="imageThinking" id={directionPhoto} src={arrow} style={{
                                                    bottom: "50px", position: "absolute", width: "198px"
                                                }} />
                                            </div>
                                        </div>
                                        <div style={{
                                            display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "40px"
                                        }}>
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <button style={{
                                                    backgroundImage: "linear-gradient(45deg,#1171d8,#3cc8eb)",
                                                    border: "none", borderRadius: "30px", padding: "15px 60px", color: "white"
                                                }}>{t("Write")}</button>
                                            </motion.a>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>


                    </div >
                </div>
                <ImageGenerator />

                <TypingGenerator />

                <OurWork />
                <FooterPage></FooterPage>
            </div >
        </div >
    );
}

export default Home;
