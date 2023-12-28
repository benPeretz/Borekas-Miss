import React from "react";
import { dessert } from "../../Data";
import CustomCarousel from "../CustomCarousel";


function HomeSectionDessert() {


    const flexList = Object.values(dessert).map(item =>

        <div className="cardd">
            <img className="product--image" src={`.${item.Img}`} alt="product image" />
            <p className="cardd-title">{item.name} </p>
        </div>
    );

    return (

        <div className="section homeSectionDessert container" id="homeSectionDessert">

            <div className="section-text-title d-flex">
                <hr />
                <h1>קינוחים</h1>
                <hr />
            </div>

            <div className="section-text-p">
                <p>מאפי הבית מיוצרים במתכונת סודית שעוברת מדור לדור במשפחה.
                    כל המאפים נעשים בעבודת ידיים,כולל פתיחת הבצק בשיטה האוטנתית ובשמירה קפדנית על איכות המילויים.
                </p>
            </div>

            <CustomCarousel list={flexList} />

        </div>
    );


}

export default HomeSectionDessert;