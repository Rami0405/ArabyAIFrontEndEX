import React, { useEffect, useRef, useState } from 'react';
import Grid2 from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { TextField } from '@mui/material';
import TwitterTweet from './TwitterTweet';
import twitter from "./tweet.svg"
import "./TypingGenerator.css"
function TypingGenerator() {
    const [container, setContainer] = useState();
    const { t, i18n } = useTranslation();
    const [direction, setDirection] = useState();
    const [width, setWidth] = useState();
    const [orientation, setOrientation] = useState();
    useEffect(() => {
        const updateWidth = () => { setWidth(window.outerWidth) }
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, [width]
    );
    const [tweetDirection, setTweetDirection] = useState();
    useEffect(() => {
        if (i18n.language == 'en') {
            setDirection("ltr")
            setTweetDirection("tweetDirectionEN")
        }

        else {
            setDirection("rtl")
            setTweetDirection("tweetDirectionAR")
        }
    })

    useEffect(() => {
        console.log(window.innerWidth)
        if (width >= 900) {
            setContainer("true");
            setOrientation("vertical");

        }
        else {
            setContainer("");
            setOrientation("horizontal");
        }

    }, [width])
    return (
        <div style={{ paddingTop: "50px", }}>
            <div style={{ background: "rgba(199, 223, 247, 0.3)", paddingBottom: "90px", paddingTop: "60px", zIndex: -1 }}>
                <div className='d-flix' style={{ width: "100%", }}>


                    <Grid2 container={container} style={{ maxWidth: "100%", marginRight: "auto", marginLeft: "auto", }}>
                        <Grid2 item xs style={{ textAlign: "center", alignSelf: "center", }}>
                            <h1 style={{ fontWeight: "bold" }}>
                                {t("Type Few Keywords Describing Your Brand")}
                            </h1>
                            <br></br>
                            <p style={{ fontWeight: 300, color: "#68727d" }}>{t("Just, Try to write the subject")}

                            </p>
                            <br></br>
                            <br></br>
                            <div class="row justify-content-center">
                                <Card className="shadow" style={{
                                    maxWidth: "80%", borderRadius: "1 rem",
                                    borderColor: "white", padding: "10px", alignSelf: "center", borderRadius: "25px"
                                }} >

                                    <Card.Body>
                                        <div className="d-flex" dir={direction}>
                                            <TextField className="shadow" variant='standard' InputProps={{ disableUnderline: true }}
                                                placeholder={t("Write the subject here...")}

                                                style={{
                                                    width: "90%", borderRadius: "10px",
                                                    padding: "9px 5px 5px 10px", marginLeft: "5px"
                                                }} />
                                            <button style={{
                                                backgroundColor: "#1ac741", color: "white", border: "none",
                                                boxShadow: "2px 2px 2px 2px #ebe6e6bd", borderRadius: "10px", height: "40px", width: "30%", marginLeft: "20px"
                                            }}>{t("write")}</button>

                                        </div>
                                    </Card.Body>
                                    <Divider variant='middle' style={{
                                        backgroundColor: "black", opacity: "0.1", width: "85%", height: "100%",
                                        alignSelf: "center", padding: "0.4px", marginBottom: "2%"
                                    }}></Divider>

                                </Card>
                            </div>
                        </Grid2>
                        <div >
                            <Divider orientation={orientation} style={{ color: "#c7dff7", fontSize: "50px" }}>{t("or")}</Divider>

                        </div>
                        <Grid2 item xs style={{ textAlign: "center", alignSelf: "center", zIndex: 10 }}>
                            <h1 style={{ fontWeight: "bold" }}>
                                {t("Tweeting with the help of AI")}
                            </h1>
                            <br></br>
                            <p style={{ fontWeight: 300 }}>{t("Do you have the idea but confused about what to tweet? Do not worry, AI is here to help, try it out now!")}

                            </p>
                            <br></br>
                            <br></br>
                            <div class="row justify-content-center">
                                <Card className="shadow" style={{
                                    maxWidth: "80%", borderRadius: "1 rem", minHeight: "120px", maxHeight: "none",
                                    borderColor: "white", padding: "10px", alignSelf: "center", borderRadius: "25px"
                                }} >

                                    <Card.Body>

                                        <TwitterTweet></TwitterTweet>

                                    </Card.Body>
                                    <img className='imageThinking' id={tweetDirection} src={twitter}
                                        style={{
                                            position: "absolute", zIndex: -1,
                                            height: "170px", width: "170px", top: "90px"
                                        }} />
                                </Card>
                            </div>
                        </Grid2>
                    </Grid2>
                </div >
            </div >
        </div >
    )
}
export default TypingGenerator;
