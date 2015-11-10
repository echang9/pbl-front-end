ROOT_URL = 'http://localhost:3000'
//var token = '6461766964626c697540676d61696c2e636f6d';
// var token = getParameterByName('token');
var email = 'davidbliu@gmail.com';


Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
var Member = Parse.Object.extend("ParseMember");
var Golink = Parse.Object.extend("ParseGoLink");
var Blog = Parse.Object.extend("BlogPost");
var Event = Parse.Object.extend("ParseEvent");
var TablingSlot = Parse.Object.extend("ParseTablingSlot");



var app = angular.module('pblApp', ['ngRoute']);
app.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

// google platform auth
var authEmail = 'davidbliu@gmail.com';
var token = '';

function onLoad() {
  gapi.load('auth2', function() {
    gapi.auth2.init({client_id: GOOGLE_CLIENT_ID});
  });
}

onLoad();

function signIn(){
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signIn().then(function(googleUser){
    onSignIn(googleUser);
  });
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  // save email in global variable
  authEmail = profile.getEmail();
  $('#linout').text(authEmail);
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    authEmail = null;
    $('#linout').text('Login');
  });
}

function toggleLogin(){
  console.log('authEmail was '+authEmail);
  if(authEmail == null){
    signIn();
  }
  else{
    signOut();
  }
}

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'HomeController'
        })
        .when('/members', {
            templateUrl : 'views/members.html',
            controller  : 'MembersController'
        })
        .when('/tabling', {
            templateUrl : 'views/tabling.html',
            controller  : 'TablingController'
        })
        .when('/points', {
            templateUrl : 'views/points.html',
            controller  : 'PointsController'
        })
        .when('/blog', {
            templateUrl : 'views/blog.html',
            controller  : 'BlogController'
        })
        .when('/golinks', {
            templateUrl : 'views/golinks.html',
            controller  : 'GoController'
        })
        .when('/addGolink', {
            templateUrl : 'views/addGolink.html',
            controller  : 'AddGolinkController'
        })
        .when('/parse', {
            templateUrl : 'views/parse.html',
            controller  : 'ParseController'
        })
        .when('/attendance', {
            templateUrl : 'views/attendance.html',
            controller  : 'AttendanceController'
        })
        .otherwise({
          'redirect_to': '/'
        });
});

function tokenizeEmail(email){
  var result = '';
  for (var i=0;i<email.length;i++){
    result += email.charCodeAt(i).toString(16);
  }
  return result;
}
function tokenizedURL(url){
  if(authEmail == null){
    email = '';
  }
  else{
    email = authEmail;
  }
  token = tokenizeEmail(email);
  if(url.indexOf('?') != -1){
      tokenized = url + '&token='+token;
  }
  else{
      tokenized =  url + '?token='+token;
  }
  console.log(tokenized);
  return tokenized;
}
