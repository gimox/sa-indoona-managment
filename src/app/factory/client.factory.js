(function () {
    angular.module('saIndoonaFront')
        .factory('ClientFactory', function ($http, $log, API_URL) {


            function followContact(params) {
                return $http.post(API_URL + '/management/addContacts', params)
                    .then(function (response) {
                        return response
                    })
            }

            function unfollowContact(params) {
                return $http.post(API_URL + '/management/removeContacts', params)
                    .then(function (response) {
                        return response
                    })
            }

            //RETURN FUNCTIONS
            return {
                followContact: followContact,
                unfollowContact: unfollowContact
            }

        });
})();
