'use strict';

/* global define:true*/
define(['jquery',
  'sammy',
  'knockout',
  '../../../assets/js/models/application.js'
], function ($, Sammy, ko, AppViewModel) {
  return function () {
    var self = this;

    var vm = new AppViewModel();
    ko.applyBindings(vm);

    self._sammy = new Sammy(function () {

      this.get('#home/keyword', function () {
        vm.nav.chosenMainCategory('home');
        vm.nav.chosenServiceCategory('keyword');
        
        // console.log((!this.params.startdate) ? 'no params defined' : this.params.startdate);
      });
      
      this.get('#home/date', function () {
        vm.nav.chosenMainCategory('home');
        vm.nav.chosenServiceCategory('date');
        
        // console.log((!this.params.startdate) ? 'no params defined' : this.params.startdate);
      });
      
      this.get('#home/slides', function () {
        vm.chosenMainCategory('home');
        vm.chosenServiceCategory('slides');
        
        // console.log((!this.params.startdate) ? 'no params defined' : this.params.startdate);
      });
      
      this.get('#home', function () {
        vm.nav.chosenMainCategory('home');
      });

      this.get('#api', function () {
        vm.nav.chosenMainCategory('api');
      });
      
      this.get('#contact', function () {
        vm.nav.chosenMainCategory('contact');
      });

      this.get('', function () {
        this.redirect('#home');
      });
    });

    self._sammy.run();
  };
});
