var app = angular.module('app', []);

app.controller("MainController", function ($scope, $http, ToDoFactory){

	console.log(ToDoFactory.getToDo());


	// $http.get('/api/todo')
	// .then(function (response){
	// 	//console.log(response);
	// }, function (response){

	// });

	$scope.formData = {};
	$scope.createToDo = function(){
		$http.post('/api/todo', $scope.formData)
		.then(function (response){
			$scope.formData = {};
		}, function (response){

		});
	}
});

app.factory('ToDoFactory', function($http){

	return {
        getToDo: function(){
        	$http.get('/api/todo')
        	.then(function (response){
        		return {
        			data: response.data
        		};
        	}).catch(function (response){
        		return response;
        	})
        }
	};

});