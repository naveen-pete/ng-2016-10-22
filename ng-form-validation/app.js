angular.module('formDemoApp', [])
.controller('ContactUsController', ['$scope', function($scope) {
    var initFeedback = function() {
        return {
            firstName: "", 
            lastName: "",
            tel: {
                areaCode: "",
                number: ""
            },
            agree: false, 
            myChannel: "", 
            email: "",
            comments: ""
        };
    };
    
    $scope.channels = [
        { value: "tel", label: "Telephone" }, 
        { value: "email", label: "Email" }
    ];
    $scope.channelNotSelected = false;
    $scope.feedback = initFeedback();
    
    $scope.sendFeedback = function() {
        console.log('sendFeedback() - begin...');
        
        if ($scope.feedback.agree && 
            $scope.feedback.myChannel === "") {
            // Channel not selected, do not proceed
            $scope.channelNotSelected = true;
            console.log('Channel is not selected. Invalid feedback input! Cannot proceed further.');
        } else {
            // Channel selection is fine. 
            // Push feedback data to server.
            console.log('Feedback has valid data!');
            console.log('feedback:', $scope.feedback);
            
            // Re-initialize data. Set form to pristine.
            $scope.channelNotSelected = false;
            $scope.feedback = initFeedback();
            $scope.feedbackForm.$setPristine();
        }
        
        console.log('...sendFeedback() - end.');
    };
}]);
