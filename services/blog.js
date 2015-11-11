
app.service("BlogService",  function($http) {
    var serviceInstance = {};
    serviceInstance.tags = ['Pin', 'Announcements', 'Other', 'Reminders', 'Events', 'Email','Tech', 'CO', 'CS', 'FI', 'HT', 'MK', 'IN', 'PB', 'SO', 'WD', 'EX', 'OF'];
    
    serviceInstance.getAllBlogposts = function(callback){
      query = new Parse.Query(Blog);
      query.limit(MAXINT);
      query.descending('updatedAt');
      query.find({
        success: function(data){
          callback(data);
        }
      });
    }
    serviceInstance.allPosts = function(callback){
        $http.get(tokenizedURL(ROOT_URL+'/all_blogposts'))
            .success(function(data){
                callback(data);
            });
    };
    return serviceInstance;
});
