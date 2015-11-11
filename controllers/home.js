app.controller('HomeController', function($scope, $http, MemberService) {
  $scope.message = 'welcome to pbl frontend';
  myEmail = 'alice.sun94@gmail.com';
  $scope.message += ' you are '+myEmail;
  MemberService.memberHash(function(data){
    $scope.memberHash = data;
    $scope.message += data[myEmail].position;
  });

  
});
