import React from "react";
import { pastries } from "../../Data";
import CustomCarousel from "../CustomCarousel";
import { HashLink } from "react-router-hash-link";



function HomeSectionPastries() {

    console.log(pastries);

    const flexList = Object.values(pastries).map(item =>

        <HashLink to={`pastries#${item.title}`} key={item.id}>
            <div className="cardd" >
                <img className="product--image" src={`.${item.Img}`} alt="product image" />
                <p className="cardd-title">{item.name} </p>
            </div>
        </HashLink>

    );



    return (


        <div className="section homeSectionPastries container">
            <a href="pastries">
                <div className="section-text-title d-flex">
                    <hr />
                    <h1>מאפים</h1>
                    <hr />
                </div>
            </a>

            <div className="section-text-p">
                <p>מאפי הבית מיוצרים במתכונת סודית שעוברת מדור לדור במשפחה.
                    כל המאפים נעשים בעבודת ידיים,כולל פתיחת הבצק בשיטה האוטנתית ובשמירה קפדנית על איכות המילויים.
                    את כל המאפים המתוקים ניתן לקבל בבצק שמרים , בצק פילאס , שטרודל , פריך , פילו  בגדלים שונים ממני מאפים ועד שטרודלים ובמילוים מגוונים כגון : גבינה מתוקה , תפוח עץ , פרג , שוקולד , אגוזים ,חלווה , קינמון , אוכמניות , אגוזים ועוד
                </p>
            </div>

            {/* passing the CustomCarousel the card list */}
            <CustomCarousel list={flexList} />

        </div>
    );




}
export default HomeSectionPastries;


