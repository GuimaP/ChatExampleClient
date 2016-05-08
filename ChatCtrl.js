window.app.controller('ChatCtrl', ['$scope','$rootScope','$stateParams', function($scope,$rootScope,$stateParams){
	$scope.item = $rootScope.conversas[$stateParams.id];
	$scope.currentConversa = $scope.item.messages == undefined ? [] : $scope.item.messages;
	console.log($scope.currentConversa);
	console.log($rootScope.conversas);
}])	