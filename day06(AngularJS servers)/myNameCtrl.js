(function(angular){
	var myApp = angular.module("myApp",[]);
	myApp.service("fexafy",function(){
		this.myFunc = function(x){
			return x.toString(16);
		};
	});
	myApp.controller("myCtrl",function($scope,$location,$timeout,$interval,fexafy){
		$scope.currentUrl = $location.absUrl();
		
		$scope.currentTitle = "SunnyFan";
		$timeout(function(){
			$scope.currentTitle = "Frances"
		},2000);

		$scope.theTime = new Date().toLocaleTimeString();
		 $interval(function () {
		     $scope.theTime = new Date().toLocaleTimeString();
		 }, 1000);

		 $scope.hex = fexafy.myFunc(255);
	});
})(angular);