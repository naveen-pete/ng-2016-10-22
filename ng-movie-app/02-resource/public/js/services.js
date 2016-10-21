angular.module('movieApp')
    .factory('Movie', function($resource) {
        return $resource('http://localhost:3000/movies/:id', 
                            { id: '@id' },
                            {
                                update: {
                                    method: 'PUT'
                                }
                            }
                        );
    })
    
    .service('popupService', function($window) {
        this.showPopup = function(message) {
            return $window.confirm(message);
        }
    });
