(function(angular){
	var myApp = angular.module("myApp",[]);
	myApp.controller("myCtrl",function($scope){
		$scope.firstName="SunnyFan";
		$scope.lastName ="Frances";
		$scope.showHide =true;
		$scope.toggle = function(){
			$scope.showHide = !$scope.showHide; 
		}
	});
})(angular);