'use strict';

/* global define:true*/
define(['jquery',
  'knockout',
  'sammy'
], function ($, ko, Sammy) {
  return function () {
    var self = this;

    self.chosenMainCategory = ko.observable();
    self.chosenServiceCategory = ko.observable('keyword');

    self.goToFolder = function (folder) { self.chosenMainCategory(folder); };

    self._sammy = new Sammy(function () {

      this.get('#home/keyword', function () {
        self.chosenMainCategory('home');
        self.chosenServiceCategory('keyword');
        
        // console.log((!this.params.startdate) ? 'no params defined' : this.params.startdate);
      });
      
      this.get('#home/date', function () {
        self.chosenMainCategory('home');
        self.chosenServiceCategory('date');
        
        // console.log((!this.params.startdate) ? 'no params defined' : this.params.startdate);
      });
      
      this.get('#home/slides', function () {
        self.chosenMainCategory('home');
        self.chosenServiceCategory('slides');
        
        // console.log((!this.params.startdate) ? 'no params defined' : this.params.startdate);
      });
      
      this.get('#home', function () {
        self.chosenMainCategory('home');
      });

      this.get('#api', function () {
        self.chosenMainCategory('api');
      });
      
      this.get('#contact', function () {
        self.chosenMainCategory('contact');
      });

      this.get('', function () {
        this.redirect('#home');
      });
    });

    self._sammy.run();
  };
});
