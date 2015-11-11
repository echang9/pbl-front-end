ROOT_URL = 'http://localhost:3000'

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
        .when('/createPost', {
            templateUrl : 'views/createPost.html',
            controller  : 'CreatePostController'
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
