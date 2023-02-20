import "./ContactUs.css";
import { Card } from '@mui/material';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
function ContactUs() {

    const { t } = useTranslation();

    return (
        <div style={{ position: "absolute", left: 0, right: 0 }}>
            <div id="modalatt" className='modal-dialog modal-lg modal-dialog-centered' style={{ position: "absolute", left: 0, right: 0 }}>
                <div><center>

                    <Modal.Title style={{ fontWeight: "normal" }} id='headeratt'>{t("Contact us")}</Modal.Title>

                    <h1 style={{ fontWeight: "normal" }}>{t("How can we help you?")}</h1>
                    <p>{t("Have a question, Or just want to say hello?, fill the form below")}</p>
                </center>
                    <div id='containeratt'>
                        <Card id="cardatt" style={{ width: "100%" }}>

                            <Modal.Body >
                                <Form style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }}>
                                    <div className="box">
                                        <Form.Group className="mb-5" style={{ flex: 1, padding: "10px" }} >
                                            <Form.Label >{t("Email")}</Form.Label>
                                            <Form.Control
                                                type="email"
                                                autoFocus
                                                id='formatatt' />
                                        </Form.Group>
                                        <Form.Group className="mb-5" style={{ flex: 1, padding: "10px" }}>
                                            <Form.Label>{t("Name")}</Form.Label>
                                            <Form.Control
                                                type="name"
                                                autoFocus
                                                id='formatatt'
                                            />
                                        </Form.Group>
                                    </div>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>{t("Your message")}</Form.Label>
                                        <Form.Control as="textarea" rows={3} id="formatatt" />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Button variant="primary" style={{
                                        borderRadius: "30px",
                                        border: "none", padding: "10px 40px",
                                        backgroundImage: "linear-gradient(45deg,#1171d8,#3cc8eb)"
                                    }}>
                                        {t("Send")}
                                    </Button>
                                </motion.a>
                            </Modal.Footer>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ContactUs;