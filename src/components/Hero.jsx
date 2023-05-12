import React from "react";
import photo_grid from "../assets/photo-grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <img className="hero--photo_grid" src={photo_grid} />

            <h1 className="hero--title">Online Experiences</h1>
            <h3 className="hero--subtitle">Join unique interactive activities led by one-of-a-kind 
                hosts-all without leaving home.
            </h3>
        </div>
    )
}