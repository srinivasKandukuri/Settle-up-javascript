'use strict';

angular.module('NodeApp', ['ui.router', 'ngAria', 'ngAnimate', 'ngMaterial'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: 'views/login.html'
            })
            .state('home', {
                url: "/",
                templateUrl: 'views/home.html'
            })
            .state('home.groups', {
                url: "groups",
                templateUrl: 'views/groups.html'
            })
            .state('home.settings', {
                url: "settings",
                templateUrl: 'views/settings.html'
            })
    })

    .directive('addItemsFab', function(){
        return{
          replace:true,
          template:'<button class="md-fab md-fab-bottom-right docs-scroll-fab md-button md-ink-ripple scrolling" type="button"  docs-scroll-class="scrolling"> <md-tooltip md-direction="left">Add Expensives</md-tooltip>+<div class="md-ripple-container"></div> </button>'
        }
      })
      

    .controller('homeCtrl', function($scope){
        $scope.activity = [
      {
        what: 'Brunch this weekend?',
        who: 'Ali Conners',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        what: 'Summer BBQ',
        who: 'to Alex, Scott, Jennifer',
        when: '3:08PM',
        notes: "Wish I could come out but I'm out of town this weekend"
      },
      {
        what: 'Oui Oui',
        who: 'Sandra Adams',
        when: '3:08PM',
        notes: "Do you have Paris recommendations? Have you ever been?"
      },
      {
        what: 'Birthday Gift',
        who: 'Trevor Hansen',
        when: '3:08PM',
        notes: "Have any ideas of what we should get Heidi for her birthday?"
      },
      {
        what: 'Recipe to try',
        who: 'Brian Holt',
        when: '3:08PM',
        notes: "We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos"
      },
    ];
    })

    .controller('formCtrl', function ($scope) {
        $scope.amount = 0;

        $scope.members = [{
            name: 'srinivas',
            price: 0
        },
        {
            name: 'naveen',
            price: 0
        },
        {
            name: 'akil',
            price: 0
        }];


        $scope.process = function () {

            $scope.eachAmt = $scope.amount / $scope.members.length
            $scope.new = [];


            for (var i = 0; i < $scope.members.length; i++) {
                var obj = {};
                obj.name = $scope.members[i].name;
                obj.price = $scope.eachAmt;
                $scope.new.push(obj);
            }
            $scope.members = $scope.new;
        }

        $scope.submit = function () {

        }
    });

