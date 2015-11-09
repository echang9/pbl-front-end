

app.service("PointsService",  function($http) {
    var serviceInstance = {};
    serviceInstance.getMemberPoints = function(email, callback){
        $http.get(tokenizedURL(ROOT_URL+'/get_member_points?email='+encodeURIComponent(email)))
            .success(function(data){
                callback(data);
            });
    };
    return serviceInstance;
});
