
app.service("BlogService",  function($http) {
    var serviceInstance = {};
    serviceInstance.getAllBlogposts = function(callback){
        $http.get(tokenizedURL(ROOT_URL+'/all_blogposts'))
            .success(function(data){
                callback(data);
            });
    };
    return serviceInstance;
});
