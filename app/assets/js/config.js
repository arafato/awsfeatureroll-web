'use strict';

require.config({
  paths: {
    'bower_components': '../../bower_components',
    'jquery': '../../bower_components/jquery/dist/jquery',
    'sammy': '../../bower_components/sammy/lib/sammy',
    'spin': '../../bower_components/spin.js/spin',
    'knockout.validation': '../../bower_components/knockout.validation/Dist/knockout.validation',
    'koBinding.datePicker': '../../assets/js/koBindings/datePickerBinding',
    'datePicker': '../../bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker',
    'notify': '../../bower_components/notifyjs-dist/notify',
    'notify-bootstrap': '../../bower_components/notifyjs-dist/styles/bootstrap/notify-bootstrap',
    'jquery.bootstrap': '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap'
  },
  shim: {
    'jquery.bootstrap': {
      deps: ['jquery']
    },
    'knockout.validation': {
      deps: ['knockout']
    },
    'notify': {
      deps: ['jquery']
    },
    'notify-bootstrap': {
      deps: ['notify']
    },
    'datePicker': {
      deps: ['moment']
    },
    'koBinding.datePicker': {
      deps: ['datePicker', 'knockout']
    }
  },
  map: {
    '*': {
      'knockout': '../../bower_components/knockout.js/knockout',
      'ko': '../../bower_components/knockout.js/knockout',
      'datePicker': '../../bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min',
      'moment': '../../bower_components/moment/moment'
    }
  }
});

// Use the debug version of knockout and datePicker in development only
/* global window:true*/
if (window.knockoutBootstrapDebug) {
  require.config({
    map: {
      '*': {
        'knockout': '../../bower_components/knockout.js/knockout.debug.js',
        'ko': '../../bower_components/knockout.js/knockout.debug.js',
        'datePicker': '../../bower_components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker',
        'moment': '../../bower_components/moment/min/moment.min.js'
      }
    }
  });
}

if (!window.requireTestMode) {
  require(['main'], function () { });
}
