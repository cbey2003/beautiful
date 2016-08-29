'use strict';

angular.module('uteBeautiful.infoBubble', [])

    .directive('ngInfoBubble', function() {
        return {
            restrict: 'E',

            scope : {
                id: '@infoId',
                path : '@contentSrc'
            },

            transclude:{
                'cost':'span'
            },

            templateUrl: 'modules/infobubble/infobubble.html'

        }
    });


