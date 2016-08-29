'use strict';

angular.module('myApp.version', [
  'uteBeautiful.version.interpolate-filter',
  'uteBeautiful.version.version-directive'
])

.value('version', '0.1');
