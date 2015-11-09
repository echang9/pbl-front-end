
app.service("GoService",  function($http) {
    var serviceInstance = {};
    serviceInstance.getRecentGolinks = function(callback){
        $http.get(tokenizedURL(ROOT_URL+'/recent_golinks'))
            .success(function(data){
                callback(data);
            });
    };
    serviceInstance.searchGolinks = function(searchTerm, callback){
        $http.get(tokenizedURL(ROOT_URL+'/search_golinks?searchTerm='+encodeURIComponent(searchTerm)))
            .success(function(data){
                callback(data);
            });
    };
    serviceInstance.createGolink = function(post_data, callback){
      $http.post(tokenizedURL(ROOT_URL+'/create_golink'), post_data)
            .success(function(data){
                callback(data);
            });
    };
    return serviceInstance;
});
