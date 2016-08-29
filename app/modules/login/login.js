'use strict';

angular.module('uteBeautiful.login', [])


    .directive('ngLogin', function() {
        return {
            scope : {
                username: '@username',
                password: '@password'
            },

            templateUrl: 'modules/login/login.html',

            controller: ['$scope','$http', function ngLoginController($scope, $http){
                var self = this;

            }]
        }
    });


