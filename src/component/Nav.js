import React from "react";


function Nav() {

    return (

        <div>
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">בורקס מיס </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                                <a class="nav-link" href="#section-contact-us">צור קשר</a>
                            </li>
                        <li class="nav-item">
                                <a class="nav-link" href="#section-contact-us">אודות</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/cakes">עוגות</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/pastries">מאפים</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/catering">קייטרינג</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#homeSectionDessert">קינוחים</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>


        </div>


    );
}

export default Nav;

