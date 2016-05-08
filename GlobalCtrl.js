window.app.controller('GlobalCtrl', ['$scope','$rootScope', function($scope,$rootScope){
	
	

	window.io.on('messageReceived',function(data){
		console.log($rootScope.conversas.length);
		console.log(data);

		for(var i =0; i < $rootScope.conversas.length; i++){
			if($rootScope.conversas[i].user_id == data.from.user_id){
				$rootScope.conversas[i].count = $rootScope.conversas[i].count + 1;
				if(!$rootScope.conversas[i].messages || $rootScope.conversas[i].messages == undefined){
					$rootScope.conversas[i].messages = new Array();
				}
				$rootScope.conversas[i].messages.push(data.message);

				
				$rootScope.$apply();	
				break;
			}
		}
	});	

}]);