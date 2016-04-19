(function(angular){
	var myApp = angular.module("myApp",[]);
	myApp.controller("myCtrl",function($scope){
		$scope.names = [
			{name:"Fan",city:"shanghai"},
			{name:"Xin",city:"shangdong"},
			{name:"qing",city:"jiangsu"},
		];

	});
})(angular);