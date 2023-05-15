import React from "react";
import star_icon from "../assets/star.png"

export default function Card(props) {
    return (
        <div className="card--katie">
            <img className="card--image" src={props.img} />
            
            <div className="card--content">
                <div className="card--ratings">
                    <img className="card--star_icon" src={star_icon} />
                    <p>{props.rating} <span className="grey"> ({props.reviewCount}) • {props.country} </span></p>
                </div>
                <p>{props.title}</p>
                <p> <span className="bold"> From ${props.price} </span> / person</p>
            </div>
        </div>
    )
}