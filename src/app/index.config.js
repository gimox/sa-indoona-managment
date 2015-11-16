(function() {
  'use strict';

  angular
    .module('saIndoonaFront')
    .config(config);

  /** @ngInject */
  function config($logProvider,$mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $mdThemingProvider.definePalette('senderalert', {
          '50'                  : '90D0DB',
          '100'                 : '90D0DB',
          '200'                 : '90D0DB',
          '300'                 : '90D0DB',
          '400'                 : '90D0DB',
          '500'                 : '90D0DB',
          '600'                 : '90D0DB',
          '700'                 : '90D0DB',
          '800'                 : '90D0DB',
          '900'                 : '90D0DB',
          'A100'                : '90D0DB',
          'A200'                : '90D0DB',
          'A400'                : '90D0DB',
          'A700'                : '90D0DB',
          'contrastDefaultColor': 'light',
          'contrastDarkColors'  : [
            '50',
            '100',
            '200',
            '300',
            '400',
            'A100'
          ],
          'contrastLightColors' : undefined
        })
        .definePalette('saccent', {
          '50'                  : 'FF9800',
          '100'                 : 'FF9800',
          '200'                 : 'FF9800',
          '300'                 : 'FF9800',
          '400'                 : 'FF9800',
          '500'                 : 'FF9800',
          '600'                 : 'FF9800',
          '700'                 : 'FF9800',
          '800'                 : 'FF9800',
          '900'                 : 'FF9800',
          'A100'                : 'FF9800',
          'A200'                : 'FF9800',
          'A400'                : 'FF9800',
          'A700'                : 'FF9800',
          'contrastDefaultColor': 'light',
          'contrastDarkColors'  : [
            '50',
            '100',
            '200',
            '300',
            '400',
            'A100'
          ],
          'contrastLightColors' : undefined
        })
        .theme('default')
        .primaryPalette('senderalert')
        .accentPalette('saccent');
  }

})();
