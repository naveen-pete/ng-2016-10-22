angular.module('ubApp')
    .factory('menuFactory', function() {
        var factory = {};

        factory.getItems = function() {
            console.log('menuFactory.getItems() called!');
            return menuItems;
        };

        factory.getItem = function(itemId) {
            console.log('menuFactory.getItem() called!');
            for(var i=0; i<menuItems.length; i++) {
                if(menuItems[i].id === itemId) {
                    return menuItems[i];
                }
            }
        };

        return factory;
    });

var menuItems = [
    {
        "id": 1,
        "name": "Filter Coffee",
        "image": "../common/images/filter-coffee.jpg",
        "description": "Indian filter coffee is a coffee drink made by mixing frothed and boiled milk with the decoction obtained by brewing finely ground coffee powder in a traditional Indian filter.",
        "price": 15,
        "category": "Beverage",
        "comments": [
            { "rating": 4, "comment": "Hot and refreshing", "author": "Hari" }
        ]
    }
    , {
        "id": 2,
        "name": "Masala Chai",
        "image": "../common/images/masala-chai.jpg",
        "description": "Masala chai is a flavoured tea beverage made by brewing black tea with a mixture of aromatic Indian spices and herbs. Originating in India, the beverage has gained worldwide popularity, becoming a feature in many coffee and tea houses.",
        "price": 17,
        "category": "Beverage",
        "comments": [
            { "rating": 5, "comment": "Aromatic!!", "author": "Krishna" }
        ]
    }
    , {
        "id": 3,
        "name": "Badam Milk",
        "image": "../common/images/badam-milk.jpg",
        "description": "Almond saffron milk is a festive drink; this can be served hot or cold. Milk with blend of nuts and flavored with saffron to give a beautiful orange-yellow color and distinctive flavor and aroma.",
        "price": 20,
        "category": "Beverage",
        "comments": [
            { "rating": 5, "comment": "Awesome!", "author": "Naveen" }
        ]
    }
    , {
        "id": 4,
        "name": "Masala Dosa",
        "image": "../common/images/masala-dosa.jpg",
        "description": "Masala dosa or Masale Dose is a variant of the popular South Indian food dosa and has its origins in Tuluva Mangalorean cuisine made popular by the Udupi hotels all over India.",
        "price": 35,
        "category": "Dosa",
        "comments": [
            { "rating": 5, "comment": "Amazing!", "author": "Hari" },
            { "rating": 3, "comment": "Delicious.", "author": "Krishna" }
        ]
    }
    , {
        "id": 5,
        "name": "Neer Dosa",
        "image": "../common/images/neer-dosa.jpg",
        "description": "Neer dosa or Neer dose literally meaning Water dosa is a crêpe prepared from rice batter. It is light type of dosa, an Indian dish.",
        "price": 40,
        "category": "Dosa",
        "comments": [
            { "rating": 4, "comment": "Crispy and tasty!", "author": "Naveen" },
            { "rating": 2, "comment": "Nice.", "author": "Amar" }
        ]
    }
    , {
        "id": 6,
        "name": "Idli",
        "image": "../common/images/idli.jpg",
        "description": "Idli is a traditional breakfast in South Indian households. Idli is a savoury cake that is popular throughout India and neighbouring countries like Sri Lanka The cakes are usually four to five inches in diameter and are made by steaming a batter consisting of fermented black lentils (de-husked) and rice. The fermentation process breaks down the starches so that they are more readily metabolized by the body.",
        "price": 25,
        "category": "Idli",
        "comments": [
            { "rating": 5, "comment": "Soft and fluffy!", "author": "Amogh" },
            { "rating": 1, "comment": "Bland.", "author": "Akbar" }
        ]
    }
    , {
        "id": 7,
        "name": "Rava Idli",
        "image": "../common/images/rava-idli.jpg",
        "description": "Rava idli is a variation of the popular South Indian breakfast item, idli, made with rava or Bombay rava.",
        "price": 30,
        "category": "Idli",
        "comments": [
            { "rating": 3, "comment": "Good.", "author": "Antony" },
            { "rating": 2, "comment": "Its ok.", "author": "Akbar" }
        ]
    }
    , {
        "id": 8,
        "name": "Puliyogare",
        "image": "../common/images/puliyogare.jpg",
        "description": "Pulihora, Puliyodarai, Puliyogare or simply Tamarind Rice is a common rice preparation in the South Indian states of Andhra Pradesh, Telangana, Karnataka and Tamil Nadu.",
        "price": 40,
        "category": "Rice",
        "comments": [
            { "rating": 4, "comment": "Sweet and tangy.", "author": "Hari" },
            { "rating": 2, "comment": "Very spicy.", "author": "Amar" }
        ]
    }
    , {
        "id": 9,
        "name": "Lemon Rice",
        "image": "../common/images/lemon-rice.jpg",
        "description": "Lemon Rice is a delicious South Indian dish you can easily put together when in a hurry. Serve Lemon Rice with a Raita (yogurt salad) and Poppadums for a simple yet tasty meal.",
        "price": 30,
        "category": "Rice",
        "comments": [
            { "rating": 3, "comment": "Tangy.", "author": "Amogh" },
            { "rating": 4, "comment": "Tasty.", "author": "John" }
        ]
    }
];

