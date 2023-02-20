import React, { useState } from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { useTranslation } from 'react-i18next';
import "./footerPage.css"
import logo from './Araby.ai logo white.svg';
import { SocialIcon } from "react-social-icons";
import Stack from 'react-bootstrap/Stack';
import ContactUs from './ContactUs';
import { motion } from 'framer-motion';
import { Modal } from '@mui/material';
export default function FooterPage() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <MDBFooter style={{ color: "white", backgroundColor: "black", fontSize: "small" }}>

            <section className='section' style={{ paddingTop: "10px", backgroundColor: "black" }}>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>


                        <MDBCol md='2' lg='2' xl='2' className=' mb-4'>
                            <h4 style={{ fontWeight: "bold" }}>{t("Company")}</h4>
                            <motion.div
                                whileHover={{ x: 10 }}
                            >
                                <p>
                                    <a href='#!' className="description" >
                                        {t("Features")}
                                    </a>
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 10 }}
                            >
                                <p>
                                    <a href='#!' className="description" >
                                        {t("Terms and Conditions")}
                                    </a>
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 10 }}
                            >
                                <p>
                                    <a href='#!' className="description" >
                                        {t("Privacy Policy")}
                                    </a>
                                </p>
                            </motion.div>

                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h4 style={{ fontWeight: "bold" }}>{t("Help")}</h4>
                            <motion.div
                                whileHover={{ x: 10 }}
                            >
                                <p>
                                    <a href='#!' onClick={handleOpen} className="description" >
                                        {t("Contact us")}
                                    </a>
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 10 }}
                            >
                                <p>
                                    <a href='#!' onClick={handleOpen} className="description" >
                                        {t("Share feedback")}
                                    </a>
                                </p>
                            </motion.div>

                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h4 style={{ fontWeight: "bold" }}>{t("Support")}</h4>
                            <motion.div
                                whileHover={{ x: 10 }}
                            >
                                <p>
                                    <a onClick={handleOpen} className="description" >
                                        {t("Report a Bug")}
                                    </a>
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 10 }}
                            >
                                <p>
                                    <a href='#!' onClick={handleOpen} className="description" >
                                        {t("Report an Outage")}
                                    </a>
                                </p>
                            </motion.div>
                        </MDBCol>
                        <MDBCol md='4' lg='3' xl='2' className='mx-auto mb-md-0 mb-4'>
                            <Stack>
                                <motion.div
                                    whileHover={{ x: 10 }}
                                >
                                    <div style={{ paddingBottom: "5px" }}>
                                        <SocialIcon url="https://twitter.com/ai_araby" fgColor="black" bgColor="White" style={{ width: "40px", height: "40px" }} />  @ai_araby
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 10 }}
                                >
                                    <div style={{ paddingBottom: "5px" }}>
                                        <SocialIcon url="https://www.instagram.com/araby.ai/" fgColor="black" bgColor="White" style={{ width: "40px", height: "40px" }} />  @araby.ai
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 10 }}
                                >
                                    <div style={{ paddingBottom: "5px" }}>
                                        <SocialIcon url="https://www.tiktok.com/@araby.ai" fgColor="black" bgColor="White" style={{ width: "40px", height: "40px" }} />  @araby.ai
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 10 }}
                                >
                                    <div style={{ paddingBottom: "5px" }}>
                                        <SocialIcon url="https://www.linkedin.com/company/araby-ai/" fgColor="black" bgColor="White" style={{ width: "40px", height: "40px" }} />  @araby-ai
                                    </div>
                                </motion.div>
                            </Stack>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center pb-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <center>
                    <img className='centerImg' src={logo} />Araby AI

                </center>
                <p>© 2023 Araby AI All rights reserved.</p>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    style={{ overflowY: "auto" }}
                >
                    <motion.div
                        animate={{ y: 20 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >

                        <ContactUs></ContactUs>
                    </motion.div>

                </Modal>
            </div>
        </MDBFooter >
    );
}