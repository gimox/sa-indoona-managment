(function(){
  angular.module('saIndoonaFront')
    .factory('ClientFactory', function ($http, $log) {


      /*
      * Get all the contacts
      */
      function getContacts(){
        return $http.get('//localhost:8080/api/management/getContacts')
          .then(function(response){
            return response
          })
      }

      function followContact(contact){
        /*return $http.get('//localhost:8080/api/management/getContacts')
          .then(function(response){
            return response
          })*/
      }

      function unfollowContact(contact){
        /*return $http.get('//localhost:8080/api/management/getContacts')
          .then(function(response){
            return response
          })*/
      }

      //RETURN FUNCTIONS
      return {
        getContacts     : getContacts,
        followContact   : followContact,
        unfollowContact : unfollowContact
      }

    });
})();
