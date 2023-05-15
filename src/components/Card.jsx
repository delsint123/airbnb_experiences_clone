import React from "react";

export default function Card(props) {

    let badgeText
    if(props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img className="card--image" src={props.card.coverImg} />
            
            <div className="card--content">
                <div className="card--ratings">
                    <img className="card--star_icon" src="./star.png" />
                    <p>{props.card.stats.rating} <span className="grey"> ({props.card.stats.reviewCount}) • {props.card.location} </span></p>
                </div>
                <p className="card--title">{props.card.title}</p>
                <p className="card--price"> <span className="bold"> From ${props.card.price} </span> / person</p>
            </div>
        </div>
    )
}