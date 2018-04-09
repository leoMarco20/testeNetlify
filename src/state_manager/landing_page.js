importScripts('kotlin.js','common.js','auth.js');var _ENV="production";if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'landing_page'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'landing_page'.");
}
if (typeof auth === 'undefined') {
  throw new Error("Error loading module 'landing_page'. Its dependency 'auth' was not found. Please, check whether 'auth' is loaded prior to 'landing_page'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'landing_page'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'landing_page'.");
}
var landing_page = function (_, Kotlin, $module$auth, $module$common) {
  'use strict';
  var start = $module$auth.auth.start;
  var start_0 = $module$common.common.start_o14v8n$;
  function main(args) {
    start_1();
  }
  function start$lambda() {
    start();
  }
  function start_1() {
    start_0(start$lambda);
  }
  _.main_kand9s$ = main;
  _.start = start_1;
  main([]);
  Kotlin.defineModule('landing_page', _);
  return _;
}(typeof landing_page === 'undefined' ? {} : landing_page, kotlin, auth, common);
