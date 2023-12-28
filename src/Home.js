import React from "react";
import HomeSectionTop from "./component/homeComponent/HomeSectionTop";
import HomeSectionPastries from "./component/homeComponent/HomeSectionPastries";
import HomeSectionCakes from "./component/homeComponent/HomeSectionCakes";
import HomeSectionDessert from "./component/homeComponent/HomeSectionDessert";
import Footer from "./component/Footer";

function Home() {

    return (

        <div>

            <HomeSectionTop />


            <HomeSectionCakes />
            <br />
            <HomeSectionPastries />

            <HomeSectionDessert />

            <Footer />


        </div>


    );


}

export default Home;
