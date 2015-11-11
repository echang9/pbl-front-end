
app.controller('AttendanceController', function($scope, $http, MemberService, PointsService, UtilService) {
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
  $scope.recordAttendance = function(event, email){
    console.log('recording attendance');
    console.log(event);
    console.log(email);
    data = {'email': email, 'event_id': event.google_id};

    $http.post(tokenizedURL(ROOT_URL+'/record_attendance'), data)
      .success(function(data){
        console.log('successfully saved event member');
      });
  };
  MemberService.memberHash(function(data){
    console.log('this is the member hash');
    console.log(data);
  });
});
