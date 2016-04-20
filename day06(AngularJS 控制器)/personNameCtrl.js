(funtion(angular){
	var myApp = angular.module("myApp",[]);
	myApp.controller("myCtrl",function($scope){
		$scope.firstName = "fan";
		$scope.lastName = "xin";
		$scope.funllName = function(){
			return $scope.firstName +" "+ $scope.lastName
		}
	});
})(angular);
