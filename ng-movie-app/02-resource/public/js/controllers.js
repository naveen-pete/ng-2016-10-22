angular.module('movieApp')
    .controller('MovieListController', function($scope, $state, popupService, $window, Movie) {
        $scope.movies = Movie.query();

        $scope.deleteMovie = function(movie){
            if(popupService.showPopup('Are you sure?')) {
                movie.$delete(function() {
                    $window.location.reload();
                });
            }
        }
    })

    .controller('MovieViewController', function($scope, $stateParams, Movie) {
        $scope.movie = Movie.get({id: $stateParams.id});
    })

    .controller('MovieCreateController', function($scope, $state, $stateParams, Movie) {
        $scope.movie = new Movie();

        $scope.addMovie = function() {
            $scope.movie.$save(function() {
                $state.go('movies');
            });
        }
    })

    .controller('MovieEditController', function($scope, $state, $stateParams, Movie) {
        $scope.updateMovie = function() {
            $scope.movie.$update(function() {
                $state.go('movies');
            });
        };

        $scope.movie = Movie.get({id: $stateParams.id});
    });
