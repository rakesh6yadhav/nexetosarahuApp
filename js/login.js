var loginApp = angular.module('loginApp', []);
loginApp.controller('loginController',function($scope,loginServices,$rootScope) {
	 $scope.login = function() {
        var lDetails = {
            "username": $scope.username,
            "password": $scope.password
        };
         //window.location="home.html";
        console.log(lDetails);
        $scope.promise = loginServices.addPatient(lDetails);
        $scope.promise.then(function(resolve) {
          console.log(resolve); 
         window.location="home.html";
        }, function(reject) {
            console.log(reject.status);
            alert("Wrong username or password");
        });
    }
});
