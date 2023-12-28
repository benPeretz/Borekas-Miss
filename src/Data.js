
const dessert = {
    napoleon: {
        title: "napoleon",
        id: 21,
        name: "נפוליאון",
        Img: "./img/cheesecake3.jpg",

    },
    creamrolls: {
        title: "creamrolls",
        id: 22,
        name: "רולדות שמנת ",
        Img: "./img/muffins.jpg",

    },
    moussestripe: {
        title: "moussestripe",
        id: 23,
        name: "מוס פסיםיו",
        Img: "./img/decoratecake.jpg",

    },
    birthdaycake: {
        title: "birthdaycake",
        id: 24,
        name: "עוגות יום הולדת",
        Img: "./img/yeastcake.jpg",

    },
    creampuff: {
        title: "creampuff",
        id: 25,
        name: "פחזניות",
        Img: "./img/paicakes.jpg",

    },
    sabrina: {
        title: "sabrina",
        id: 26,
        name: "סברינות שוקלד",
        Img: "./img/fruitcake.jpg",

    },

    chocolateballs: {
        title: "chocolateballs",
        id: 27,
        name: "כדורי שוקלד",
        Img: "./img/paicakes.jpg",

    },
}

const cakes = {
    cheeseCakes: {
        title: "cheeseCakes",
        id: 1,
        name: "עוגות גבינה",
        Img: "./img/cheesecake3.jpg",

    },
    muffinsCakes: {
        title: "muffinsCakes",
        id: 2,
        name: "עוגות מאפינס",
        Img: "./img/muffins.jpg",

    },
    decorateCakes: {
        title: "decorateCakes",
        id: 3,
        name: "עוגות מעוצבות",
        Img: "./img/decoratecake.jpg",

    },
    yeastCakes: {
        title: "yeastCakes",
        id: 4,
        name: "עוגות שמרים",
        Img: "./img/yeastcake.jpg",

    },
    paiCakes: {
        title: "paiCakes",
        id: 5,
        name: "עוגות פאי",
        Img: "./img/paicakes.jpg",

    },
    fruitCakes: {
        title: "fruitCakes",
        id: 6,
        name: "עוגות פירות",
        Img: "./img/fruitcake.jpg",

    }
}

const pastries = {
    pizza: {
        title: "pizza",
        id: 11,
        name: "פיצות",
        Img: "./img/pizza.jpg",

    },
    quiche: {
        title: "quiche",
        id: 12,
        name: "פשטידות",
        Img: "./img/quiche.jpg",

    },
    borekas: {
        title: "borekas",
        id: 13,
        name: "בורקסים",
        Img: "./img/borekas.jpg",

    },
    sweetpastry: {
        title: "sweetpastry",
        id: 14,
        name: "מאפים מתוקים",
        Img: "./img/sweetpastry.jpg",

    }
}

const allProduct = {
    catering: {

        title: "catering",
        id: 401,
        name: " מגשי אירוח וקייטרינג",
        images: [
            "/img/vegetables.jpg",
            "/img/fruitcake.jpg",
            "/img/vegetables.jpg",
            "/img/vegetables.jpg",
        ],

    },

    allSubject: {
        cakes: {
            cheeseCakes: {
                title: "cheeseCakes",
                id: 201,
                name: "עוגות גבינה",
                content: "...עוגות גבינה : קרה ו / או אפוייה , צימוקים , פירורים , שמנת חמוצה ועוד",
            },
            muffinsCakes: {
                title: "muffinsCakes",
                id: 202,
                name: "עוגות מאפינס",
                content: "עוגות מאפינס : שוקולד , וניל , שזיפים , אגסים , פרג , תפוחים , שיש , שיש אגוזים , תפוזים , פירות ",
            },
            decorateCakes: {
                title: "decorateCakes",
                id: 203,
                name: "עוגות מעוצבות",
                content: "עוגות מעוצבות ליום הולדת - אנו מתמחים בעוגות לימי הולדת ואירועים מיוחדים כולל להיט הילדים מאפינס שוקולד.  ניתן  להזמין אצלנו תמונות אכילות לקשט עוגות לימי הולדת",
            },
            paiCakes: {
                title: "paiCakes",
                id: 204,
                name: "עוגות פאי",
                content: "עוגות פאי : תפוחים , אגוזים , פרג , פקאנים , ופירות העונה.",
            },
            fruitCakes: {
                title: "fruitCakes",
                id: 205,
                name: "עוגות פירות",
                content: "ניתן להזמין גם - שזיפים , אגסים , פרג , תפוחים , שיש , שיש אגוזים , תפוזים , פירות,לפי עונה",
            },
            yeastCakes: {
                title: "yeastCakes",
                id: 206,
                name: "עוגות שמרים",
                content: "עוגות שמרים : עוגות שמרים טריות הנאפות מדי יום במילויים של : גבינה , תפוחים , שוקולד ופרג",
            }
        },
        pastries: {
            pizza: {
                title: "pizza",
                id: 211,
                name: "פיצות",
                content: "את הפיצות אנו מייצרים במקום מבצק שמרים וברוטב שפיתחנו בעצמנו.הפיצות מיוצרות עם גבינת מוצרלה טרייה , ניתן להזמין בגדלים של פיצטות , אישיות ו / או משפחתיות.על הפיצה מרגריטה ניתן להוסיף תוספות לפי דרישה."

            },
            quiche: {
                title: "quiche",
                id: 212,
                name: "פשטידות",
                content: "כל הפשטידות ניתן להזמין במנות ובגדלים שונים , מפשטידה אישית ועד משפחתית ו / או בכלל.פשטידות על בסיס 5 סוגי גבינות בהקפדה על גבינות שאינן מעל 5%.ניתן למצוא פשטידות בטעמים של : חצילים , תרד , פטריות , בצל , פלפלים , קישואים , גבינות ,וירקות העונה."

            },
            borekas: {
                title: "borekas",
                id: 213,
                name: "בורקסים",
                content: "הבורקסים נעשים מארבע סוגי בצק: עלים,פילאס, פילו  ופריך  בגדלים שונים ובמילויים : גבינה , תפוח אדמה , פיטריות , חצילים על האש , תרד עם גבינה , גבינת זיתים , קשקבל , תרד , פיצה , בולגרית עם ביצה , פיצה ניתן להשיג בנוסף מיני מאפים בהזמנה מראש"

            },
            sweetpastry: {
                title: "sweetpastry",
                id: 214,
                name: "מאפים מתוקים",
                content: " מאפים מתוקים שמרים גביניות קינמון, רוגלך, קוראסונים, חלווה, אוכמניות, תפוחים ופרג     מאפה מתוק פילס גבינה , תפוחים, שוקלד וחלווה    מאפה מתוק פילו ניתן להשיג בנוסף מיני מאפים בהזמנה מראש "

            }
        }
    },

    cakes: {

        cheeseCakes: {

            cheeseCake1: {
                title: "cheeseCake1",
                id: 101,
                name: "עוגת גבינה אוכמניות",
                images: [
                    "/img/cheesecake3.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ]


            },
            cheeseCake2: {
                title: "cheeseCake2",
                id: 102,
                name: "עוגת גבינה פירורים",
                images: [
                    "/img/cheesecake3.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },
            cheeseCake3: {
                title: "cheeseCake3",
                id: 103,
                name: "עוגת גבינה ",
                images: [
                    "/img/cheesecake3.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },

        },
        muffinsCakes: {

            muffinsCake1: {
                title: "muffinsCake1",
                id: 111,
                name: "עוגות בחושות",
                images: [
                    "/img/muffins.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },
            muffinsCake2: {
                title: "muffinsCake2",
                id: 112,
                name: "עוגות פירות יבשים",
                images: [
                    "/img/muffins.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },
            muffinsCake3: {
                title: "muffinsCake3",
                id: 113,
                name: "עוגת מאפינס שוקולד ",
                images: [
                    "/img/muffins.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },

        },
        decorateCakes: {

            decorateCake1: {
                title: "decorateCake1",
                id: 121,
                name: "עוגות בחושות",
                images: [
                    "/img/muffins.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },
            decorateCake2: {
                title: "decorateCake2",
                id: 122,
                name: "עוגות פירות יבשים",
                images: [
                    "/img/muffins.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },
            decorateCake3: {
                title: "decorateCake3",
                id: 123,
                name: "עוגת מאפינס שוקולד ",
                images: [
                    "/img/muffins.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },

        },
        paiCakes: {

            paiCake1: {
                title: "paiCake1",
                id: 131,
                name: "עוגות בחושות",
                images: [
                    "/img/paicakes.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },
            paiCake2: {
                title: "paiCake2",
                id: 132,
                name: "עוגות פירות יבשים",
                images: [
                    "/img/paicakes.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },
            paiCake3: {
                title: "paiCake3",
                id: 133,
                name: "עוגת מאפינס שוקולד ",
                images: [
                    "/img/paicakes.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },

        },
        fruitCakes: {

            friutCake1: {
                title: "friutCake1",
                id: 141,
                name: "עוגות בחושות",
                images: [
                    "/img/fruitcake.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },
            friutCake2: {
                title: "friutCake2",
                id: 142,
                name: "עוגות פירות יבשים",
                images: [
                    "/img/fruitcake.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },
            friutCake3: {
                title: "friutCake3",
                id: 143,
                name: "עוגת מאפינס שוקולד ",
                images: [
                    "/img/fruitcake.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },

        },
        yeastCakes: {

            yeastCake1: {
                title: "yeastCake1",
                id: 151,
                name: "עוגות שמרים",
                images: [
                    "/img/yeastcake.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },
            yeastCake2: {
                title: "yeastCake2",
                id: 152,
                name: "עוגות פירות שמרים",
                images: [
                    "/img/yeastcake.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },
            yeastCake3: {
                title: "yeastCake3",
                id: 153,
                name: "עוגת שמרים שוקולד ",
                images: [
                    "/img/yeastcake.jpg",
                    "/img/cheesecake.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },

        }
    },

    pastries: {

        pizza: {
            pizza1: {
                title: "pizza1",
                id: 301,
                name: " pizza1",
                images: [
                    "/img/pizza.jpg",
                    "/img/pizza.jpg",
                    "/img/cheesecake2.jpg"
                ],

            },
            pizza2: {
                title: "pizza2",
                id: 302,
                name: " pizza2",
                images: [
                    "/img/pizza.jpg",
                    "/img/pizza.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },
            pizza3: {
                title: "pizza3",
                id: 303,
                name: " pizza3",
                images: [
                    "/img/pizza.jpg",
                    "/img/pizza.jpg",
                    "/img/cheesecake2.jpg"
                ],
            },

        },
        quiche: {
            quiche1: {
                title: "quiche1",
                id: 311,
                name: "quiche1",
                images: [
                    "/img/quiche.jpg",
                    "/img/pizza.jpg",
                    "/img/quiche.jpg"
                ],
            },
            quiche2: {
                title: "quiche2",
                id: 312,
                name: "quiche2",
                images: [
                    "/img/quiche.jpg",
                    "/img/pizza.jpg",
                    "/img/quiche.jpg"
                ],
            },
            quiche3: {
                title: "quiche3",
                id: 313,
                name: "quiche3",
                images: [
                    "/img/quiche.jpg",
                    "/img/pizza.jpg",
                    "/img/quiche.jpg"
                ],
            }
        },
        borekas: {
            borekas1: {
                title: "borekas1",
                id: 321,
                name: "borekas1",
                images: [
                    "/img/borekas.jpg",
                    "/img/pizza.jpg",
                    "/img/borekas.jpg"
                ],
            },
            borekas2: {
                title: "borekas2",
                id: 322,
                name: "borekas2",
                images: [
                    "/img/borekas.jpg",
                    "/img/pizza.jpg",
                    "/img/borekas.jpg"
                ],
            },
            borekas3: {
                title: "borekas3",
                id: 323,
                name: "borekas3",
                images: [
                    "/img/borekas.jpg",
                    "/img/pizza.jpg",
                    "/img/borekas.jpg"
                ],
            }
        },
        sweetpastry: {
            sweetpastry1: {
                title: "sweetpastry1",
                id: 331,
                name: "sweetpastry1",

                images: [
                    "/img/sweetpastry.jpg",
                    "/img/pizza2.jpg",
                    "/img/sweetpastry.jpg"
                ],
            },
            sweetpastry2: {
                title: "sweetpastry2",
                id: 332,
                name: "sweetpastry2",
                images: [
                    "/img/sweetpastry.jpg",
                    "/img/pizza2.jpg",
                    "/img/sweetpastry.jpg"
                ],
            },
            sweetpastry3: {
                title: "sweetpastry3",
                id: 333,
                name: "sweetpastry3",
                images: [
                    "/img/sweetpastry.jpg",
                    "/img/pizza2.jpg",
                    "/img/sweetpastry.jpg"
                ],
            },
        }
    },



}

export { cakes, pastries, dessert, allProduct };