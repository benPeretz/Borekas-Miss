import React from "react";
import CustomCarousel from "./CustomCarousel";
import { allProduct } from "../Data";


function SubjectProductItem(props) {


    const subject = allProduct[props.type];//extract cakes or pastries list object from allProduct
    const subjectItem = subject[props.title];//Inside the object list we extract what sub subject to take -> from cakes take the cheese cakes object

    const flexList = Object.values(subjectItem).map(item =>

        <a href={`${props.type}/${props.title}/${item.title}`} key={item.id}>
            <div className="cardd">

            {item.images && item.images.length > 0 ? (//Making cards from each item and the img will be the first image in item's image list
                <img className="product--image" src={item.images[0]} alt="product image" />
            ) : (
                <p>No image available</p>
            )}

                <p className="cardd-title">{item.name} </p>
            </div>
        </a>

    );

    return (
        <div className="contentProductSubject">

            <hr className="hrClass" />
            <h1 className="subjectTitle">{props.name} </h1>
            <p className="subjectProductItem-p">{props.p}</p>

            <CustomCarousel list={flexList} />
            
        </div>
    );
}

export default SubjectProductItem;