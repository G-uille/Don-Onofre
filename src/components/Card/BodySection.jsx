import React from "react";
import logo from "../../assets/images/marca-logo6-1-1699980691.png"
import bottle from "../../assets/images/botellas.png"

const BodySection = () => {
    return (
        <div className="container-body-section">
            <img src={logo} alt="Logo" className="body-section__img" />
            <div className="container-bottle-with-description">
                <div className="container-column">
                    <div className="container-row">
                        <span className="body-section__text--span">"Disfrutá la</span>
                        <h1>Excelencia,</h1>
                    </div>
                    <div className="container-row">
                        <span className="body-section__text--span">Saboreá la</span>
                        <h1>Tradición"</h1>
                    </div>
                </div>
                <img src={bottle} alt="Botellas" className="body-section__img" />
            </div>
        </div>
    )
};

export default BodySection;