'use strict';

/* global define:true*/
/*globals Environment*/
define(['jquery',
  'knockout',
  'datePicker',
  '../../../assets/js/environment.js',
], function ($, ko) {
  return function () {
    var self = this;

    self.startdate = ko.observable('');
    self.enddate = ko.observable('');
    self.result = ko.observableArray([]);

    $(function () {
      $('#datetimepicker1').datetimepicker();
    });
  };
});