import { positions } from "@mui/system";
import React from "react";
import './WallPaper.css';

function WallPaper() {
    return (
        <div>
            <section style={{
                background: "none",
                zIndex: -1,
                width: "100%",
                left: 0,
                right: 0,
                bottom: "-100px",
                top: 0,
                overflow: "hidden",
                position: "absolute"
            }}>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </section>
        </div>
    )
}
export default WallPaper;
