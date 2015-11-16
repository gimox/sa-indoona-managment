'use strict';

angular
    .module('saIndoonaFront')
    .controller('MainController', MainController);

/** @ngInject */
function MainController($log, $scope, ClientFactory) {

    var self = this;


/*
    var user = {
        ownerId     : '564621adc70aa44e6d481e99',
        state       : '564621adc70aa44e6d481e99_563792935901714a649f1208,563cb93f5901714a649f1214',
        code        : '6265c41f203ded70b75f8ba063f39c4e70f9809d',
        profile     : {lang: 'it', surname: 'Modoni', name: 'Giorgio'},
        registration: {
            user_id      : 'am0zho0aa9xyf5a41695l4h6r',
            refresh_token: 'e7af3ad1a3c13516a8482e5f033e65467b3c4ef5',
            scope        : 'basic',
            token_type   : 'Bearer',
            expires_in   : 360000,
            access_token : '5ceaf896c6bb537b2a5dce6e86ebd1625b66c036'
        },
        channelId   : ['563792935901714a649f1208', '563cb93f5901714a649f1214'],
        id          : '564a2e785901714a649f1230'
    };


    var contacts = [
        {
            "name"      : "Canale Demo",
            "id"        : "563cb93f5901714a649f1214",
            "avatar_url": "http://indoona.senderalert.eu/logo1.jpg",
            "contact_id": 2,
            "selected"  : true
        },
        {
            "name"      : "Senderalert Info generiche",
            "id"        : "563792935901714a649f1208",
            "avatar_url": "http://indoona.senderalert.eu/logo1.jpg",
            "contact_id": 1,
            "selected"  : true
        }
    ];

*/
    $scope.contacts = [];
    $scope.contacts = contacts;

    self.user = user;

    self.follow = function (contact) {
        $log.log(contact);
        contact.progress = 'indeterminate';
        contact.disabled = true;

        ClientFactory.followContact({
            clientId : user.id,
            channelId: contact.id
        }).then(onSuccess, onError);

        function onSuccess(response) {
            console.log(response);
            contact.progress = '';
            contact.selected = true;
            contact.disabled = false;
        }

        function onError(error) {
            contact.progress = '';
            contact.disabled = false;

            $log.error(error);
        }

    };

    self.unfollow = function (contact) {
        $log.log(contact);
        contact.progress = 'indeterminate';
        contact.disabled = true;

        ClientFactory.unfollowContact({
            clientId : user.id,
            channelId: contact.id
        }).then(onSuccess, onError);

        function onSuccess(response) {
            console.log(response);
            contact.progress = '';
            contact.selected = false;
            contact.disabled = false;
        }

        function onError(error) {
            contact.progress = '';
            contact.disabled = false;

            $log.error(error);
        }
    }

}



