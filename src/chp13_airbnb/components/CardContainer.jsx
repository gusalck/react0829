import React from "react";
import Card from "./Card";
import apt1 from "../imgs/apt1.jpg";
import oceanView1 from "../imgs/oceanView1.jpg";
import oceanView2 from "../imgs/oceanView2.jpg"

const listings=[
    {
        id:1,
        title: "제주도 바다 뷰 펜션",
        price: 200000,
        rating: 4.8,
        imageUrl: `${apt1}`
    },
    {
        id:2,
        title: "부산 해운대 근처",
        price: 150000,
        rating: 4.4,
        imageUrl: `${oceanView1}`
    },
    {
        id:3,
        title: "서해 앞바다 근처",
        price: 100000,
        rating: 4.1,
        imageUrl: `${oceanView2}`
    },

];

function CardContainer() {
    return(
        <div>
            {listings.map(listing =>(
                <Card key={listing.id} {...listing}/>
            ))}
        </div>
    );
}

export default CardContainer;