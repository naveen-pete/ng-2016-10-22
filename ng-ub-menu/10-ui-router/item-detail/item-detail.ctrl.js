angular.module('ubApp')
    .controller('ItemDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
        var itemId = $stateParams.id;
        itemId = isNaN(parseInt(itemId)) ? 1 : parseInt(itemId);

        $scope.item = menuFactory.getItem(itemId);
        $scope.custComment = {};

        $scope.submitComment = function() {
            $scope.custComment.createdOn = Date.now();
            $scope.item.comments.push($scope.custComment);
            console.log('custComment:', $scope.custComment);
            console.log('Comment added successfully!');

            $scope.custComment = {};
            $scope.commentForm.$setPristine();
        };

        console.log('ItemDetailController loaded.');
    }]);
