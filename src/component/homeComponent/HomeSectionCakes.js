import React from "react";
import { cakes } from "../../Data";
import { HashLink } from "react-router-hash-link";

function HomeSectionCakes() {

    const linearDarkImage = "linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30))"//darken the image a bit

    const gridList = Object.values(cakes).map(item =>//Go through each item in the cakes information, and making a grid list items

        //key-> mapping every item must have uniqe id, if the item's tile is cheese we adding a class for the grid, to be grader than the rest grids items 
        <div key={item.id} className={`gridItem ${item.title == "cheeseCakes" && "gridItemBig"}`} style={{ background: `${linearDarkImage},url(.${item.Img}) center/cover` }}>
            
            {/* Using hashLink to go through another page and than to roll to specific section */}
            <HashLink to={`cakes#${item.title}`} style={{width:"100%", height:"100%", display:"flex", alignItems:"end", justifyContent:"center"}} >
                <div >
                    <h3>{item.name}</h3>
                </div>
            </HashLink>
        </div>
    );




    return (

        <div className="section homeSectionPastries container">
            <a href="cakes">
                <div className="section-text-title d-flex">
                    <hr />
                    <h1>עוגות</h1>
                    <hr />
                </div>
            </a>

            <div className="section-text-p">
                <p>
                    ניתן למצוא במקומם מבחר ענק ונרחב של עוגות מאפים וקינוחים.
                    למעשה בורקס מיס הוא אחד המקומות הבודדים שעדיין ניתן למצוא בו פלטות של עוגות הנפרשות במקום על פי דרישת הלקוח.
                    כמו כן יש מבחר גדול של עוגות בחושות.
                </p>
            </div>

            <div className="container grid">
                {gridList}
            </div>

        </div>
    );




}
export default HomeSectionCakes;























