(function(angular){
	var myApp = angular.module("myApp",[]);
	myApp.controller("myCtrl",function($scope){
		$scope.firstName = "Fan";
		$scope.lastName = "Xin";
		$scope.fullName = function(){
			return $scope.firstName + " " + $scope.lastName;
		}
	});
})(angular);