import React from "react";
import card_image from "../assets/katie-zaferes.png"
import star_icon from "../assets/star.png"

export default function Card() {
    return (
        <div className="card--katie">
            <img className="card--image" src={card_image} />
            
            <div className="card--content">
                <div className="card--ratings">
                    <img className="card--star_icon" src={star_icon} />
                    <p>5.0 <span className="grey"> (6) • USA </span></p>
                </div>
                <p>Life lessons with Katie Zafares</p>
                <p> <span className="bold"> From $136 </span> / person</p>
            </div>
        </div>
    )
}