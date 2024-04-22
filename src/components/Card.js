import React from "react";

export default function Card(props) {
    
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (

        
        <div className="card">
           {badgeText && <div className="card--badge">{badgeText}</div>}
            <img
                src={props.item.coverImg}
                className="card--image"
            
            />


            <div className="card--stats">
                <img src={require("../images/Star 1.png")}
                    className="card--star"
                    alt="image of star."
                />
                <span className="gray"> {props.item.stats.rating} </span>
                <span className="gray">({props.item.stats.reviewCount}) •  </span>
                <span>{props.item.country}</span>


            </div>

            <p className="card--title">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>




    )
}