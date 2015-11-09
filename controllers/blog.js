
app.controller('BlogController', function($scope, $http, BlogService) {
  $scope.message = 'hi there from blog controller';
  function init(){
    BlogService.getAllBlogposts(function(data){
      $scope.posts = data;
    });
  }
  init();
});
