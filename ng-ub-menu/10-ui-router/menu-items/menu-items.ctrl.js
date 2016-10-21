angular.module('ubApp')
    .controller('MenuItemsController', ['$scope', 'menuFactory', function($scope, menuFactory) {
        $scope.search = {};
        $scope.selectedTab = 'Menu';
        $scope.menuItems = menuFactory.getItems();

        $scope.setTab = function(tab) {
            $scope.selectedTab = tab;

            if($scope.selectedTab === 'Menu') {
                $scope.search.category = '';
            } else {
                $scope.search.category = $scope.selectedTab;
            }
        };

        $scope.isSelected = function(tab) {
            return tab === $scope.selectedTab;
        };

        console.log('MenuItemsController loaded.');
    }]);
