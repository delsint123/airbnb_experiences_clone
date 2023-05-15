import React from "react";

export default function Card(props) {

    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img className="card--image" src={props.img} />
            
            <div className="card--content">
                <div className="card--ratings">
                    <img className="card--star_icon" src="./star.png" />
                    <p>{props.rating} <span className="grey"> ({props.reviewCount}) • {props.location} </span></p>
                </div>
                <p className="card--title">{props.title}</p>
                <p className="card--price"> <span className="bold"> From ${props.price} </span> / person</p>
            </div>
        </div>
    )
}