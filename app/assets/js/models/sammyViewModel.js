'use strict';

/* global define:true*/
define(['jquery',
  'knockout',
  'sammy'
], function ($, ko, Sammy) {
  return function () {
    var self = this;

    self.chosenFolderId = ko.observable();

    self.goToFolder = function (folder) { self.chosenFolderId(folder); };

    self._sammy = new Sammy(function () {

      this.get('#home/:service', function () {
        self.chosenFolderId('home');
        console.log(this.params.service);
        console.log((!this.params.startdate) ? 'no params defined' : this.params.startdate);
      });

      this.get('#api', function () {
        self.chosenFolderId('api');
      });
      
      this.get('#contact', function () {
        self.chosenFolderId('contact');
      });

      this.get('', function () {
        this.redirect('#home');
      });
    });

    self._sammy.run();
  };
});
