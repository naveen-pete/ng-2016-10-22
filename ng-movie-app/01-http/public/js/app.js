angular.module('movieApp', ['ui.router']);

angular.module('movieApp').config(function($stateProvider,  $urlRouterProvider) {
    $urlRouterProvider.otherwise('/movies');
    
    $stateProvider.state('movies', {
        url: '/movies',
        templateUrl: 'partials/movies.html',
        controller: 'MovieListController'
    })
    .state('viewMovie', {
        url: '/movies/:id',
        templateUrl: 'partials/movie-view.html',
        controller: 'MovieViewController'
    })
    .state('newMovie',{
        templateUrl: 'partials/movie-add.html',
        controller: 'MovieCreateController'
    })
    .state('editMovie',{
        url: '/movies/:id',
        templateUrl: 'partials/movie-edit.html',
        controller: 'MovieEditController'
    });
});
