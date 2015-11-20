'use strict';

angular
    .module('saIndoonaFront')
    .controller('MainController', MainController);

/** @ngInject */
function MainController($log, $scope, ClientFactory, $mdDialog) {

    var self = this;
/*
    var user = {
        ownerId     : '1',
        state       : '2,563cb93f5901714a649f1214',
        code        : '3',
        profile     : {lang: 'it', surname: 'Modoni', name: 'Giorgio'},
        registration: {
            user_id      : '1',
            refresh_token: '2',
            scope        : 'basic',
            token_type   : 'Bearer',
            expires_in   : 360000,
            access_token : '3'
        },
        channelId   : ['563792935901714a649f1208', '563cb93f5901714a649f1214'],
        id          : '2'
    };

    var contacts = [
        {
            "name"       : "Comune di Ussaramanna",
            "id"         : "563cb93f5901714a649f1214",
            "avatar_url" : "http://indoona.senderalert.eu/logo1.jpg",
            "contact_id" : 2,
            "selected"   : true,
            "description": "Rimani on contatto con la nostra amministrazione, ricevi informazioni sui bandi, allerte meteo, eventi e iniziative intorno a te."
        },
        {
            "name"       : "Senderalert Info generiche",
            "id"         : "563792935901714a649f1208",
            "avatar_url" : "http://indoona.senderalert.eu/logo1.jpg",
            "contact_id" : 1,
            "selected"   : true,
            "description": "Rimani on contatto con la nostra amministrazione, ricevi informazioni sui bandi, allerte meteo, eventi e iniziative intorno a te."
        },
        {
            "name"       : "Canale Demo",
            "id"         : "563cb93f5901714a649f1214",
            "avatar_url" : "http://indoona.senderalert.eu/logo1.jpg",
            "contact_id" : 2,
            "selected"   : false,
            "description": "Rimani on contatto con la nostra amministrazione, ricevi informazioni sui bandi, allerte meteo, eventi e iniziative intorno a te."
        },
        {
            "name"       : "Senderalert Info generiche",
            "id"         : "563792935901714a649f1208",
            "avatar_url" : "http://indoona.senderalert.eu/logo1.jpg",
            "contact_id" : 1,
            "selected"   : false,
            "description": "Rimani on contatto con la nostra amministrazione, ricevi informazioni sui bandi, allerte meteo, eventi e iniziative intorno a te."
        },
        {
            "name"       : "Canale Demo",
            "id"         : "563cb93f5901714a649f1214",
            "avatar_url" : "http://indoona.senderalert.eu/images/ussaramanna.jpg",
            "contact_id" : 2,
            "selected"   : true,
            "description": "Rimani on contatto con la nostra amministrazione, ricevi informazioni sui bandi, allerte meteo, eventi e iniziative intorno a te."
        },
        {
            "name"       : "Senderalert Info generiche",
            "id"         : "563792935901714a649f1208",
            "avatar_url" : "http://indoona.senderalert.eu/logo1.jpg",
            "contact_id" : 1,
            "selected"   : true,
            "description": "Rimani on contatto con la nostra amministrazione, ricevi informazioni sui bandi, allerte meteo, eventi e iniziative intorno a te."
        }
    ];
*/

    $scope.contacts = [];
    $scope.contacts = contacts;
    $scope.progress = false;

    self.user = user;

    self.setAction = function (contact) {
        $scope.progress = 'indeterminate';
        contact.disabled = true;

        if (contact.selected) {

            ClientFactory.unfollowContact({
                clientId : user.id,
                channelId: contact.id
            }).then(function (success) {
                $scope.progress = '';
                contact.disabled = false;
                contact.selected = false;
            }, onError);

        } else {

            ClientFactory.followContact({
                clientId : user.id,
                channelId: contact.id
            }).then(function (success) {
                $scope.progress = '';
                contact.disabled = false;
                contact.selected = true;
            }, onError);

        }

        function onError(err) {
            $log.error(err);
            $scope.progress = '';
            contact.disabled = false;
        }

    };


    /**
     * @description
     * return icon for repeat
     *
     * @param selected
     * @returns {string}
     */
    self.getIcon = function (selected) {
        return selected ? 'delete' : 'add';
    };

    self.getIconClass = function (selected) {
        return selected ? 'md-warn' : 'md-primary';
    };


    self.info = function (contact, ev) {
        $mdDialog.show({
                controller         : DialogController,
                templateUrl: 'app/main/dialog.tmpl.html',
                parent     : angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals             : {
                    contact: contact
                }
            })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
                self.setAction(contact);
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    }
}

function DialogController($scope, $mdDialog, contact) {
    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };

    $scope.contact = contact;
}