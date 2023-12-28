import React from "react";
import Footer from "./Footer";
import { allProduct } from "../Data";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useParams } from 'react-router-dom';


function SingleProduct(props) {


    const responsive = {//any case I would like to show one item in carousel
        all: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }

    };
    //Type and productId are route parameter which i get from the url-> more detail in app.js 
    const { type, productId } = useParams();
    let product;

    if (productId && type) {//If both are undefined or null it's indicate that is catering

        const subjectProduct = allProduct[props.subjectProduct];
        const subjectProductType = subjectProduct[type];
        product = subjectProductType[productId];
    } else {
        product = allProduct["catering"];
    }

    return (
        <div className="singleProduct">

            <div className="singleProducFlex" >

                <div className="productCarouselImages ">

                    <Carousel responsive={responsive}>

                        {/* We make sure that there is images to product images list(array) */}
                        {product.images && product.images.length > 0 ? (
                            product.images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`product image ${index + 1}`} />
                                </div>
                            ))
                        ) : (
                            <p>No images available</p>
                        )}

                    </Carousel>


                </div>

                <div className="productContent">
                    <h1>{product.name}</h1>
                    <p>nbkack dmkb sk  ds </p>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default SingleProduct;

