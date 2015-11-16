(function() {
  'use strict';

  angular
    .module('saIndoonaFront')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/:user_id',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
      });

    $urlRouterProvider.otherwise('/:user_id');
  }

})();
