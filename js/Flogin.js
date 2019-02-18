var Flogin=angular.module('login', []);
Flogin.controller('loginController',function ($scope,$http,$rootScope) {

	$scope.send=function()
	{
       
		  var lDetails ={
    "user_full_name": $scope.username,
    "phone" : $scope.phone,
    "gender" : "Male",
    "email":$scope.Email,
    "password1":$scope.Password,
    "dob":"1990-01-01",
    "postcode":"560023",
    "email_verified":"1",
    "phone_verified":"1"
}
console.log(JSON.stringify(lDetails));
        $http({
            method: 'POST',
             headers: {
                "Content-Type": "application/json"
            },
            url:"http://nextoapp-env.af96sddtpq.ap-south-1.elasticbeanstalk.com/services/v1.0/register/user",
            data: JSON.stringify(lDetails)
        }).then(function successCallback(response) {
            console.log("response.data ======", response);
            	window.location="/index.html";
        }, function errorCallback(reject) {
               alert("Username does not exist");
        });
	}
	
});