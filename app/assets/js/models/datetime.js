/* global moment */
/* global Spinner */
'use strict';

/* global define:true*/
/*globals Environment*/
define(['jquery',
  'knockout',
  'spin',
  'moment',
  'datePicker',
  '../../../assets/js/environment.js',
  'koBinding.datePicker'
], function ($, ko, Spinner, moment) {
  return function () {
    var self = this;

    self.startdate = ko.observable(new Date());
    self.enddate = ko.observable(new Date());
    self.output = ko.observable('html');
    self.result = ko.observableArray([]);

    $('#startdate').datetimepicker();
    $('#enddate').datetimepicker();

    var target = $('#dateTimeSearch')[0];
    var spinner = new Spinner();

    self.callService = function () {
      var url;
      switch (self.output()) {
        case 'html':
          url = Environment.FEATURES_SERVICE;
          break;
        case 'revealjs':
          url = Environment.SLIDES_SERVICE;
          break;
        default:
          url = Environment.FEATURES_SERVICE;
      }
      
      url += '?startdate=' + moment(self.startdate()).format('YYYY-MM-DD') + '&enddate=' + moment(self.enddate()).format('YYYY-MM-DD');
      
      $.ajax({
        url: url,
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