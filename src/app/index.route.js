(function() {
  'use strict';

  angular
    .module('saIndoonaFront')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
