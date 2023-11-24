import React from "react";
import './styles.module.css'
// import BgVideo from "@/public/videos/organizationBg.mp4"

const LandingPage = () => {
    return (
        <div className="landingpage">

            <video src="/videos/organizationBg.mp4" autoPlay muted loop className="video-bg" />
            <div className="bg-overlay">Hello </div>

            {/* <div className="navbar">
                <div className="menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div> */}

            <div className="home-text">
                <h1>The Bubu Island</h1>
                <p>Come live out your ideal vacation with us</p>
            </div>

            <div className="home-btn">Explore</div>

        </div>
    )
}

export default LandingPage;