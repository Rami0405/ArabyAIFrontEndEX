import { Card, Col, Row } from "react-bootstrap";
import first from "./first.svg";
import second from "./second.svg";
import third from "./third.svg";
import "./OurWork.css";
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import Login from "./LoginCard";
import { Modal } from "@mui/material";
function OurWork() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { t } = useTranslation();

    return (
        <div style={{ padding: "50px", width: "100%" }}>
            <div>

                <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>{t("Who is Araby AI for?")}
                </h1>
                <p style={{ fontWeight: 300 }}>{t("If you try any of our services, you'll discover a platform that writers can't live without.")}
                </p>
            </div>
            <div className="container" dir="ltr">

                <Row className="box" style={{ justifyContent: "center" }}>


                    <Col>
                        <Row className="paddingRow" >
                            <motion.a
                                whileHover={{ y: -5 }}
                            >
                                <Card className="shadow" id="card" style={{ maxWidth: "100%" }}>
                                    <Card.Body>
                                        <Card.Text>
                                            <img src={first} style={{ paddingBottom: "15px" }} />
                                            <h4 style={{ fontWeight: "bold" }}>{t("Content Marketing Teams")}</h4>
                                            <p>{t("kickstart your content now with simple steps and improve your brand's voice and tone.")}</p></Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.a>
                        </Row>
                    </Col>


                    <Col>
                        <Row className="paddingRow">
                            <motion.a
                                whileHover={{ y: -5 }}
                            >
                                <Card className="shadow" id="card" style={{ maxWidth: "100%" }}>
                                    <Card.Body>
                                        <Card.Text>
                                            <img src={second} style={{ paddingBottom: "15px" }} />
                                            <h4 style={{ fontWeight: "bold" }}>{t("Copywriters")}</h4>
                                            <p>{t("Never face writers block again. Generate creative content that aligns with your ideas.")}</p></Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.a>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <motion.a
                                whileHover={{ y: -5 }}
                            >
                                <Card className="shadow" id="card" style={{ maxWidth: "100%" }}>
                                    <Card.Body>
                                        <Card.Text>
                                            <img src={third} style={{ paddingBottom: "15px" }} />
                                            <h4 style={{ fontWeight: "bold" }}>{t("Entrepreneurs")}</h4>
                                            <p>{t("Build your brand's voice, get your thoughts out to the world and educate your customers without the need for a dedicated copywriting staff.")}</p></Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.a>
                        </Row>
                    </Col>

                </Row>
            </div>
            <div style={{
                paddingTop: "40px", display: "flex", justifyContent: "center"
            }}>
                <motion.a
                    onClick={handleOpen}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <button className="button"
                    >{t("Start now")}</button>
                </motion.a>
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


        </div >

    )
}
export default OurWork;