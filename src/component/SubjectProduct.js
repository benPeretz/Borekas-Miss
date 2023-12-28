import React from "react";
import { allProduct } from "../Data";
import SubjectProductItem from "./SubjectProductItem";
import Footer from "./Footer";

function SubjectProduct(props) {

    let productSubject;
    let allSubjectList;

    const { allSubject } = allProduct;

    if (props.subjectName) {
        productSubject = allSubject[props.subjectName];//from app.js allSubject[cakes] or allSubject[pastries]

        if (productSubject) {
            allSubjectList = Object.values(productSubject).map(item =>

                <section id={item.title} key={item.id}>

                    <SubjectProductItem
                        type={props.subjectName}//pastries || cakes from app.js
                        name={item.name}
                        p={item.content}
                        title={item.title}
                        key={item.id}
                    />

                </section>
            );
        }
    }


    return (
        <div className="subjectProduct">

            <div className="section-text-title d-flex">
                <hr />
                <h1>{props.subjectTitle}</h1>
                <hr />
            </div>

            <div className="section-text-p">
                <p>מאפי הבית מיוצרים במתכונת סודית שעוברת מדור לדור במשפחה.
                    כל המאפים נעשים בעבודת ידיים,כולל פתיחת הבצק בשיטה האוטנתית ובשמירה קפדנית על איכות המילויים.
                </p>
            </div>

            {allSubjectList}

            <Footer />

        </div>
    );
}

export default SubjectProduct;