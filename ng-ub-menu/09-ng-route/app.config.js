angular.module('ubApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            })
            .when('/menu', {
                templateUrl: 'menu-items/menu-items.html',
                controller: 'MenuItemsController'
            })
            .when('/menu/:id', {
                templateUrl: 'item-detail/item-detail.html',
                controller: 'ItemDetailController'
            })
            .when('/contactus', {
                templateUrl: 'contact-us/contact-us.html',
                controller: 'ContactUsController'
            })
            .otherwise('/');

        console.log('Route configuration done!');
    });
