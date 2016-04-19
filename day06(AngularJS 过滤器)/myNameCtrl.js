(function(angular){
	var myApp = angular.module("myApp",[]);
	myApp.controller("myCtrl",function($scope){
		$scope.myName = "FanXin";
		$scope.yourName = "FanXin";
		$scope.number = 111;

		$scope.names=[
			{name:"SunnyFan",city:"handan"},
			{name:"Frances",city:"jiangsu"},
			{name:"IOY",city:"forever"},
		];

	});
})(angular);