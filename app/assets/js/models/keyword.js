'use strict';

/* global define:true*/
/*globals Environment*/
define(['jquery',
  'knockout',
  'spin',
  '../../../assets/js/environment.js'
], function ($, ko, Spinner) {
  return function () {
    var self = this;

    self.q = ko.observable('');
    self.result = ko.observableArray([]);
    
    var target = $('#keywordSearch')[0];
    var spinner = new Spinner();

    self.callService = function () {
      $.ajax({
        url: Environment.KEYWORD_SERVICE + '?q=' + self.q(),
        type: 'GET',
        beforeSend: function (data) {
          spinner.spin(target);
        },
        success: function (data) {
          self.result(data);
        },
        error: function (data) {
          console.log(data);
        },
        complete: function (data) {
          spinner.stop();
        }
      });
    };
  };
});
