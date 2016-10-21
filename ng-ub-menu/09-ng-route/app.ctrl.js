angular.module('ubApp')
    .controller('AppController', ['$scope', 'menuFactory', 'appSettings', function($scope, menuFactory, appSettings) {
        $scope.appSettings = appSettings;

        console.log('AppController loaded.');
    }]);
