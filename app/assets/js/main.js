'use strict';

/* global define:true*/
define(['jquery',
    'knockout',
    '../../assets/js/models/app.js',
    'jquery.bootstrap'
    ], function ($, ko, AppViewModel) {

  var UI = new AppViewModel();

  ko.applyBindings(UI);

});
