(function(){
	function httpService($http) {
		var errorText = "Error! Server responded with status code: ";

		return {
	        fetch: function(endpoint, queryParams) {
	            return $http.get(configServerUrl + endpoint, {params: queryParams}).then((response) => {
	                return response.data;
	            }, (error) => {
	                console.log(errorText + error.status);
	                return error;
	            });
	        }
	    };
	}

	angular.module('app')
		.service('httpService', ['$http', httpService]);
})();