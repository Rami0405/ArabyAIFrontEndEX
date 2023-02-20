import { TextField } from "@mui/material";
import profile from "./tweet-profile.svg";
import gif from "./gif.svg";
import image from "./image.svg"
import smile from "./smile.svg"
import deadline from "./deadline.svg"
import pin from "./pin.svg";
import list from "./list.svg"
import "./TwitterTweet.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
function TwitterTweet() {
    const { t, i18n } = useTranslation();
    const [direction, setDirection] = useState();
    useEffect(() => {
        if (i18n.language == 'en')
            setDirection("ltr")
        else
            setDirection("rtl")
    })

    return (
        <div className="flexbox-container">
            <div style={{ display: "flex", flexDirection: "row" }}> <img src={profile} />
                <TextField variant='standard' InputProps={{ disableUnderline: true }} dir={direction}
                    placeholder={t("please type here...")}
                    style={{ width: "90%", borderRadius: "10px", padding: "9px 5px 5px 10px", marginLeft: "5px", }} />
            </div>
            <div className="box" style={{ display: "flex", flexDirection: "row", }}>
                <img className="twitter" src={deadline} />
                <img className="twitter" src={gif} />
                <img className="twitter" src={pin} />
                <img className="twitter" src={list} />
                <img className="twitter" src={image} />
                <img className="twitter" src={smile} />
                <button className="ml" style={{
                    backgroundColor: "#35b1ea", color: "white",
                    border: "none", borderRadius: "25px", marginLeft: "auto", height: "30px", width: "80px"
                }}>{t("Tweet")}</button>
            </div>


        </div>
    )
}
export default TwitterTweet;