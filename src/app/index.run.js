(function () {
    'use strict';

    angular
        .module('saIndoonaFront')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
