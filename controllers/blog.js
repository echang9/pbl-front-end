
app.controller('BlogController', function($scope, $http, BlogService, UtilService) {
  $scope.loadingGif = UtilService.loadingGif;
  $scope.loading = false;
  $scope.message = 'hi there from blog controller';
  function init(){
    BlogService.getAllBlogposts(function(data){
      $scope.posts = data;
    });
  }
  init();
});
