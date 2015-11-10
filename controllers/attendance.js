
app.controller('AttendanceController', function($scope, $http, PointsService, UtilService) {
  $scope.loadingGif = UtilService.loadingGif;
  $scope.loading=false;
  $scope.message = 'hi there from attendance controller';
  // if chair, load entire committees attendance
  $http.get(tokenizedURL(ROOT_URL+'/attendance'))
    .success(function(data){
      console.log(data);
      $scope.attendance = data;
      $scope.coCMs = Object.keys(data);
    }); 
   PointsService.getEvents(function(data){
    $scope.events = data;
   }); 
  $scope.attendedEvent = function(email, id){
    attended = $scope.attendance[email];
    for(var i=0;i<attended.length;i++){
      if(attended[i].event_id == id){
        return attended[i].type;
      }
    }
    return 'unconfirmed';
  };
});
