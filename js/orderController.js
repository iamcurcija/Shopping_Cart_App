app.controller("OrderController", function($scope, bagService){
	$scope.product = bagService.mybag;
	console.log(bagService.mybag);
	
});