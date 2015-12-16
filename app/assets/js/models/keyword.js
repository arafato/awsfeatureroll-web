'use strict';

/* global define:true*/
/*globals Environment*/
define(['jquery',
  'knockout',
  '../../../assets/js/environment.js'
], function ($, ko) {
  return function () {
    var self = this;

    self.q = ko.observable('');

    self.callService = function () {
      $.ajax({
        url: Environment.KEYWORD_SERVICE + '?q=' + self.q(),
        type: 'GET',
        success: function (data) {
          console.log(data);
        },
        error: function (data) {
          console.log(data);
        }
      });
    };
  };
});
