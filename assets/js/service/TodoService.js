lApp.service('TodoService', function($http, $q) {
  return {
    'getSession': function() {
      var defer = $q.defer();
      $http.post('/todo/getSession').success(function(resp,status){
		  console.log ("getSession resp", resp, status );
		defer.resolve(resp);
      }).error( function(err) {
		console.log ( "getSession err", err, status );
        defer.reject(err);
      });
      return defer.promise;
    },
    'startApi': function(todo) {
      var defer = $q.defer();
	  console.log ( "assets\\js\\service\\Todoservices.js startApi")
      $http.post('/todo/startApi').success(function(resp,status){
		console.log ( "startApi resp", resp , status );
        defer.resolve(resp);
      }).error( function(err) {
		console.log ( "startApi err", err, status );
        defer.reject(err);
      });
      return defer.promise;
    }
}});