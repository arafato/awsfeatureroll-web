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
    self.htmlResult = ko.observableArray([]);
    
    self.revealCached = ko.observable(true);
    self.revealLink = ko.observable('');

    $('#startdate').datetimepicker();
    $('#enddate').datetimepicker();

    self.callService = function () {
      var target = (self.output() === 'html') ? $('#dateTimeSearchHtml')[0] : $('#dateTimeSearchRevealJs')[0];
      var spinner = new Spinner();

      var url;
      switch (self.output()) {
        case 'html':
          url = Environment.FEATURES_SERVICE;
          self.htmlResult([]);
          break;
        case 'revealjs':
          url = Environment.SLIDES_SERVICE;
          self.revealLink('');
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
          if (data.link !== undefined) {
            self.revealCached(data.cached);
            self.revealLink(data.link);
          }
          else {
            self.htmlResult(data);
          }
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