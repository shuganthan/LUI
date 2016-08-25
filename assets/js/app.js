'use strict';

var lApp = angular.module('luiApp', ['ngRoute', 'ui.bootstrap']);
lApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/todo.html',
      controller: 'TodoCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);

lApp.controller('TodoCtrl', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService) {
   $scope.value = '';

  TodoService.getSession().then(function(response) {
	console.log ( "app.js getSession")
    $scope.value = '';
  });

  $scope.startApi = function() {
    TodoService.startApi().then(function(response) {
		console.log ( "app.js startApi",response)
		$scope.value = response;
	});
  }

}]);