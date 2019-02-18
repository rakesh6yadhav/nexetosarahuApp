loginApp.service('loginServices', function ($http,$q) {
	this.addPatient=function(lDetails)
	{
		console.log(JSON.stringify(lDetails));
        var q = $q.defer();
        $http({
            method: "POST",
             headers: {
                "Content-Type": "application/json"
            },
            url: "http://nextoapp-env.af96sddtpq.ap-south-1.elasticbeanstalk.com/services/v1.0/authenticate/user",
            data: JSON.stringify(lDetails)
        }).then(function(res) {
            console.log("success", res);
            //This is Asynchronous Check it ............
            console.log("From loginservice before returning ::::::");
            q.resolve(res);
        }, function(error) {
            console.log("error", error);
            q.reject(error);
        });
        return q.promise;
	}
	
});