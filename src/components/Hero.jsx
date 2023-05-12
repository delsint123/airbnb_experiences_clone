import React from "react";
import photo_grid from "../assets/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero--photo_grid" src={photo_grid} />

            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--subtitle">Join unique interactive activities led by one-of-a-kind 
                hosts-all without leaving home.
            </p>
        </section>
    )
}