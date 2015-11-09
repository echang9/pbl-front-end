
app.service("GoService",  function($http) {
    var serviceInstance = {};
    serviceInstance.getRecentGolinks = function(callback){
        $http.get(tokenizedURL(ROOT_URL+'/recent_golinks'))
            .success(function(data){
                callback(data);
            });
    };
    return serviceInstance;
});
