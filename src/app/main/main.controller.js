(function() {
  'use strict';

  angular
  .module('saIndoonaFront')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, $http, $log, $scope, ClientFactory) {
    $log.log($state.params)

    var self = this;

    $scope.contacts = [];
    $scope.user = {
      name: 'Marco Francesco Sotgiu'
    }

    $scope.contacts = [{
      name : 'Comune di Cagliari',
      id: '1',
      selected: true,
      avatar_url: 'assets/images/user.png'
    },
      {
        name : 'Comune di Serramanna',
        id: '2',
        selected: false,
        avatar_url: 'assets/images/user.png'
      },
    {
      name : 'Comune di Capoterra',
      id: '3',
      selected: false,
      avatar_url: 'assets/images/user.png'
    }]

    self.follow = function(contact){
      $log.log(contact)
      contact.progress='indeterminate';
      contact.disabled = true;

      ClientFactory.followContact(contact)
        .then(function(response){
          contact.progress='';
          contact.selected = true;
          contact.disabled = false;
        }, function(error){
          $log.error(error)
        });
    }

    self.unfollow = function(contact){
      $log.log(contact)
      contact.progress='indeterminate';
      contact.disabled = true;

      ClientFactory.unfollowContact(contact)
        .then(function(response){
          contact.progress='';
          contact.selected = false;
          contact.disabled = false;
        }, function(error){
          $log.error(error)
        });
    }

  }
})();
