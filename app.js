ROOT_URL = 'http://localhost:3000'
var token = '6461766964626c697540676d61696c2e636f6d';
// var token = getParameterByName('token');
var email = 'davidbliu@gmail.com';
var authEmail = null;


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
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
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
        .otherwise({
          'redirect_to': '/'
        });
});

function tokenizedURL(url){
  return url;
    if(url.indexOf('?') != -1){
        tokenized = url + '&token='+token;
    }
    else{
        tokenized =  url + '?token='+token;
    }
    return tokenized;
}
