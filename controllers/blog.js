
app.controller('BlogController', function($scope, $http, BlogService, UtilService) {
  $scope.loadingGif = UtilService.loadingGif;

  $scope.loading = false;

  $scope.filterOptions = ['Pinned Posts', 'Least Recent', 'Most Recent'];

  $scope.tags = BlogService.tags;
  $scope.permissionsList = BlogService.permissionsList;

  $scope.$watch('filter', function(newFilter){
    if(newFilter == 'Pinned Posts'){
      $scope.loading = true;
      BlogService.pinnedPosts(function(data){
        $scope.loading = false;
        $scope.posts = data;
      });
    }
    if(newFilter == 'Most Recent'){
      $scope.loading = true;
      BlogService.allPosts(function(data){
        $scope.loading = false;
        $scope.posts = data;
      });
    }
    if(newFilter == 'Least Recent'){
      $scope.loading = true;
      $scope.posts = $scope.posts.reverse();
      $scope.loading = false;
    }
    $scope.unfilteredPosts = $scope.posts;
  });

  $scope.tagFilter = '';
  $scope.unfilteredPosts = [];
  $scope.filterTags = function(tag){
      $('.tag').each(function(){
        $(this).removeClass('selected');
      });
    if($scope.tagFilter == tag){
      $scope.tagFilter = '';
      $scope.posts = $scope.unfilteredPosts;
    }
   else{
     console.log('tag was '+tag);
     console.log('unfiltered was ');
     console.log($scope.unfilteredPosts);
     $scope.tagFilter = tag;
     $scope.posts = [];
      $('.tag').each(function(){
        if($(this).text() == tag){
          $(this).addClass('selected');
        }
      });
      for(var i=0;i<$scope.unfilteredPosts.length;i++){
        post = $scope.unfilteredPosts[i];
        if(post.tags != null && post.tags.indexOf(tag)!=-1){
          $scope.posts.push(post);
        }
      }
   } 
  };

  $scope.message = 'hi there from blog controller';
    BlogService.allPosts(function(data){
      $scope.posts = data;
      $scope.unfilteredPosts = $scope.posts;
    });

  $scope.filterPost = function(post){
    if($scope.searchTerm != post.title){
      $scope.searchTerm = post.title;
    }
    else{
      $scope.searchTerm = '';
    }
  }
});
