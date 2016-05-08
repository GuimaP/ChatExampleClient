window.app = angular.module('chat', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home',{
		url: "/",
		controller: 'HomeCtrl',
		templateUrl: 'templates/home.html'
	})
	.state('chat',{
		url: "/chat/:id",
		controller: 'ChatCtrl',
		templateUrl: 'templates/chat.html'
	});

	$urlRouterProvider.otherwise('/');
}])
.run(function(){
	window.io = io.connect("http://192.168.0.26:3000");
});