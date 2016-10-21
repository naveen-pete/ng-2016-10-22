angular.module('movieApp')
    .controller('MovieListController', function($scope, $state, popupService, $window, moviesService) {
        $scope.movies = {};
    
        moviesService.getAll().then(
            function(response) {
                $scope.movies = response.data;
                console.info('Call to moviesService.getAll() succeeded!', response);
            },
            
            function(response) {
                console.error('Error (moviesService.getAll()):', response);
            }
        );

        $scope.deleteMovie = function(id){
            if(popupService.showPopup('Are you sure?')) {
                moviesService.delete(id).then(
                    function(response) {
                        console.info('Call to moviesService.delete() succeeded!', response);
                        $window.location.reload();
                    },

                    function(response) {
                        console.error('Error (moviesService.delete()):', response);
                    }
                );
            }
        }
    })

    .controller('MovieViewController', function($scope, $stateParams, moviesService) {
        $scope.movie = {};
        
        moviesService.get($stateParams.id).then(
            function(response) {
                $scope.movie = response.data;
                console.info('Call to moviesService.get() succeeded!', response);
            },

            function(response) {
                console.error('Error (moviesService.get()):', response);
            }
        );
    })

    .controller('MovieCreateController', function($scope, $state, $stateParams, moviesService) {
        $scope.movie = {};

        $scope.addMovie = function() {
            moviesService.create($scope.movie).then(
                function(response) {
                    $state.go('movies');
                    console.info('Call to moviesService.create() succeeded!', response);
                },

                function(response) {
                    console.error('Error (moviesService.create()):', response);
                }
            );
        }
    })

    .controller('MovieEditController', function($scope, $state, $stateParams, moviesService) {
        $scope.movie = {};
        
        moviesService.get($stateParams.id).then(
            function(response) {
                $scope.movie = response.data;
                console.info('Call to moviesService.get() succeeded!', response);
            },

            function(response) {
                console.error('Error (moviesService.get()):', response);
            }
        );
    
        $scope.updateMovie = function() {
            moviesService.update($scope.movie).then(
                function(response) {
                    $state.go('movies');
                    console.info('Call to moviesService.update() succeeded!', response);
                },

                function(response) {
                    console.error('Error (moviesService.update()):', response);
                }
            );
        };
    });
