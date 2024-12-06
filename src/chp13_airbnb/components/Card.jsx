import React from "react";

function Card({title, price, reting, imageUrl}) {
    return(
        <div className="card">
            <img src={imageUrl} alt={title}/>
            <h3>{title}</h3>
            <p>￦{price.toLocaleString()} / 박</p>
            <p>★ {reting}</p>
        </div>
    );}
export default Card;