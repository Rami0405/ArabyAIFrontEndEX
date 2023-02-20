import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import "./ImageGenerator.css";
import human from "./human-robot.svg"
import horse from "./horse-riding.svg";
import hair from "./curly-hair.svg"
import shrek from "./office-shrek.svg";
import { useTranslation } from 'react-i18next';

import { Button, Form, InputGroup } from 'react-bootstrap';
function ImageGenerator() {
    const { t, i18n } = useTranslation();
    const [direction, setDirection] = useState();
    const [radiusBorder, setRadiusBorder] = useState();
    const [formBorder, setFormBorder] = useState();

    useEffect(() => {
        if (i18n.language == 'en') {
            setDirection("ltr")
            setRadiusBorder("0px 5px 5px 0px")
            setFormBorder("5px 0px 0px 5px")
        }
        else {
            setDirection("rtl")
            setRadiusBorder("5px 0px 0px 5px")
            setFormBorder("0px 5px 5px 0px")

        }

    })
    return (
        <div style={{ backgroundColor: "black", }}>
            <div className='container-fluid' style={{ width: "100%" }}>
                <div >

                    <React.Fragment>
                        <Card style={{ background: "black", color: "white", borderRadius: "0rem", }}>
                            <Card.Body style={{ textAlign: "center" }}>
                                <h1 >{t("We turn your text into an image!")}</h1>
                                <p>{t("Write what you want to visualise, and we will turn your imagination into reality!")}
                                </p>
                            </Card.Body>

                            <Card.Body style={{ color: "white", width: "100%", maxWidth: "1700px", alignSelf: "center", }}>
                                <InputGroup style={{ height: "50px" }}>
                                    <Form.Control
                                        placeholder={t("flying car in space...")}
                                        style={{ borderRadius: formBorder }}
                                        aria-describedby="basic-addon1"
                                        dir={direction}
                                    />

                                    <Button id="button-addon1" style={{ backgroundImage: "linear-gradient(47deg,#1171d8,#3cc8eb)", borderRadius: radiusBorder }}>
                                        {t("Create Image")}
                                    </Button>
                                </InputGroup>

                            </Card.Body>
                            <center>
                                <div style={{ display: "inline-block", alignSelf: "center", direction: "ltr" }}>
                                    <img src={human} className="image"></img>
                                    <img src={shrek} className="image"></img>
                                    <img src={horse} className="image"></img>
                                    <img src={hair} className="image"></img>
                                </div>
                            </center>
                        </Card>

                    </React.Fragment>
                </div>
            </div >
        </div>
    )
}
export default ImageGenerator;