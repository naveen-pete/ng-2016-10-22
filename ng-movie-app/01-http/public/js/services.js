angular.module('movieApp')
    .factory('moviesService', function($http) {
        var apiUrl = 'http://localhost:3000/movies/';
        var factory = {};
    
        factory.getAll = function() {
            return $http({
                method: 'GET',
                url: apiUrl
            });
        };
    
        factory.get = function(id) {
            var apiUrlWithId = apiUrl + id; 
            return $http({
                method: 'GET',
                url: apiUrlWithId
            });

        };
    
        factory.create = function(movie) {
            return $http({
                method: 'POST',
                url: apiUrl,
                data: movie
            });
        };
    
        factory.update = function(movie) {
            var apiUrlWithId = apiUrl + movie.id; 
            return $http({
                method: 'PUT',
                url: apiUrlWithId,
                data: movie
            });
        };
    
        factory.delete = function(id) {
            var apiUrlWithId = apiUrl + id; 
            return $http({
                method: 'DELETE',
                url: apiUrlWithId
            });
        };
    
        return factory;
    })
    
    .service('popupService', function($window) {
        this.showPopup = function(message) {
            return $window.confirm(message);
        }
    });
