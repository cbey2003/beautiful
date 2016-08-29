'use strict';

angular.module('uteBeautiful.header', [])

    .directive('ngHeader', function() {
        return {
            scope : {
                id: '@headerId'
            },

            templateUrl: 'modules/header/header.html',

            controller: ['$scope','$http', function ngHeaderController($scope, $http){
                /*$http.get($scope.path).then(function(response) {
                    $scope.contentItems = response.data;
                });*/
            }]
        }
    });


