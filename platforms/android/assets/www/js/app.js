//var mainApp = angular.module('mainApp', ['ionic', 'ManageRippleController', 'ngRoute']);
var mainApp = angular.module('mainApp', ['ionic', 'ngRoute', 'attendeesApp', 'checkinApp', 'ringPoolApp'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('DugoutMenu', {
            url: '/menu',
            abstract: true,
            templateUrl: 'pages/menu.html'
        })
        .state('DugoutMenu.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'pages/home.html'
                }
            }
        })
        .state('DugoutMenu.checkin', {
            url: '/check-in',
            views: {
                'menuContent': {
                    templateUrl: 'pages/check-in.html',
                    controller: 'CheckinCtrl'
                }
            }
        })
        .state('DugoutMenu.attendees', {
            url: '/attendees',
            views: {
                'menuContent': {
                    templateUrl: 'pages/attendees.html',
                    controller: 'AttendeesCtrl'
                }
            }
        })
        .state('DugoutMenu.RingPool', {
            url: '/ringpool',
            views: {
                'menuContent': {
                    templateUrl: 'pages/ringpool.html',
                    controller: 'RingPoolCtrl'
                }
            }
        })


    $urlRouterProvider.otherwise('/menu/home'); //url Routing is sort of like how javascripts deals with using external controllers (eg. /AdOptimization/SomeMethod)
})

.controller('MainCtrl', function ($scope, $state, $ionicSideMenuDelegate) {

    $scope.AppList = [
        { name: 'Check-in', href: '#/menu/check-in', icon: 'ion-flash' },
        { name: 'Attendees', href: '#/menu/attendees', icon: 'ion-pie-graph' },
        { name: 'Ring Pool', href: '#/menu/ringpool', icon: 'ion-ios7-telephone' }
    ];

    $scope.attendees = [
        { firstname: 'Nicolas', lastname: 'Cage' },
        { firstname: 'Jean-Claude', lastname: 'Van Damme' },
        { firstname: 'Keanu', lastname: 'Reeves' },
        { firstname: 'Steven', lastname: 'Seagal' }
    ];

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.goHome = function () {
        $state.go('DugoutMenu.home');
    };
});

//.controller('CheckinCtrl', function ($scope) {
//    $scope.showForm = true;

//    $scope.shirtSizes = [
//      { text: 'Large', value: 'L' },
//      { text: 'Medium', value: 'M' },
//      { text: 'Small', value: 'S' }
//    ];

//    $scope.attendee = {};
//    $scope.submit = function () {
//        if (!$scope.attendee.firstname) {
//            alert('Info required');
//            return;
//        }
//        $scope.showForm = false;
//        $scope.attendees.push($scope.attendee);
//    };

//})

//.controller('AttendeesCtrl', function ($scope) {

//    $scope.activity = [];
//    $scope.arrivedChange = function (attendee) {
//        var msg = attendee.firstname + ' ' + attendee.lastname;
//        msg += (!attendee.arrived ? ' has arrived, ' : ' just left, ');
//        msg += new Date().getMilliseconds();
//        $scope.activity.push(msg);
//        if ($scope.activity.length > 3) {
//            $scope.activity.splice(0, 1);
//        }
//    };

//});