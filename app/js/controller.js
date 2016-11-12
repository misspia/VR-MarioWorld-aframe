app.controller('mainCrtl', function($scope, assets){
	$scope.sky = assets.sky();
	console.log($scope.sky);
	$scope.test = '++++++++++++++';

});