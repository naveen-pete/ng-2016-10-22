angular.module('ubApp')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'nav': { 
                        templateUrl: 'nav/nav.html',
                        controller: 'NavController'
                    },
                    'header': {
                        templateUrl: 'header/header.html'
                    },
                    'content': {
                        templateUrl: 'home/home.html',
                        controller: 'HomeController'
                    },
                    'footer': {
                        templateUrl: 'footer/footer.html'
                    }
                }
            })
            .state('app.menuItems', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl: 'menu-items/menu-items.html',
                        controller: 'MenuItemsController'
                    }
                }
            })
            .state('app.itemDetail', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl: 'item-detail/item-detail.html',
                        controller: 'ItemDetailController'
                    }
                }
            })
            .state('app.contactUs', {
                url: 'contactus',
                views: {
                    'content@': {
                        templateUrl: 'contact-us/contact-us.html',
                        controller: 'ContactUsController'
                    }
                }
            });
    
        $urlRouterProvider.otherwise('/');

        console.log('Route configuration done!');
    });
