window.app.controller('HomeCtrl', ['$scope','$state','$rootScope', function($scope,$state,$rootScope){
	var username = prompt("Put ur name");
	$scope.user = {
		user_id : username,
		user : {
			name: username
		}
	};

	$scope.send = function(){
		var to = {
			user_id: this.to,
			user : {
				name :""
			}
		};
		window.io.emit('message',{
			to: to,
			from: $scope.user,
			message: this.message
		});
	}

	$scope.talk = function(index){
		$state.go('chat',{id: index});
	}
	

	window.io.emit('connectUser',$scope.user);
	window.io.emit('allUsers');
	window.io.on('newUser',function(data){
		$rootScope.conversas = data;
		console.log($rootScope.conversas);
		$scope.$apply();
	});
	window.io.on('receiveUsers',function(data){
		$rootScope.conversas = data;
		console.log($rootScope.conversas);
		$scope.$apply();
	});
	
}])