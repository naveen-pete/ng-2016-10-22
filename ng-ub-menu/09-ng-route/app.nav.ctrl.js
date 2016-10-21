angular.module('ubApp')
    .controller('NavController', ['$scope', '$location', function($scope, $location) {
        $scope.isSelected = function(view) {
            return view === $location.path();
        };
        
        console.log('NavController loaded.');
    }]);
