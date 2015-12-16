'use strict';

/* global define:true*/
define(['jquery',
    'knockout',
    '../../../assets/js/models/nav.js',
    '../../../assets/js/models/keyword.js',
    'knockout.validation'
    ], function ($, ko, Nav, Keyword) {
  return function () {
    var self = this;

    // Configure knockout validation plugin
    // To decorate form-group elements, use the validationElement binding
    ko.validation.configure({
      decorateElement: true,
      errorElementClass: 'has-error',
      errorMessageClass: 'help-block',
      errorsAsTitle: false
    });

    self.nav = new Nav();
    self.keyword = new Keyword();
  };
});
