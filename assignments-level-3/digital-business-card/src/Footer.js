import React from "react";
import Twitter from "./images/twitter.png"
import Facebook from "./images/facebook.png"
import Instagram from "./images/instagram.png"
import Github from "./images/github.png"

export default function Footer() {
    return (
        <div className="footer">
            <img className="twitterLogo" src={Twitter} alt="" />
            <img className="facebookLogo" src={Facebook} alt="" />
            <img className="instagramLogo" src={Instagram} alt="" />
            <img className="githubLogo" src={Github} alt="" />
        </div>
    )
}