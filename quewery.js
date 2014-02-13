/*
* Quewery.js (c) 2011 Dan Heberden
*
* Whatever license you want
*/

(function (document, window) {
  'use strict';

  function makeArray(arr) {
    var ret = [], x;
    for (x = 0; x < arr.length; x++) {
      ret[x] = arr[x];
    }
    return ret;
  }

  var lower = 'quewery',
    upper = 'QUEWERY',
    cases = 128,
    names = [],
    originals = {},
    map,
    i,
    name,
    Quewery = function (selector) {
      return (/^#[\w\-]+$/).test(selector)
        ? [ document.getElementById(selector.slice(1)) ]
        : selector === 'body' && document.body
          ? [ document.body ]
          : !/\W/.test(selector)
            ? makeArray(document.getElementsByTagName(selector))
            : document.querySelectorAll(selector);
    };

  Quewery.noConflict = function (allTheWay) {
    if (allTheWay) {
      var j = 128;
      while (j--) { window[names[j]] = originals[names[j]]; }
    }
    window.Q = originals.Q;
    window.q = originals.q;
    return Quewery;
  };

  while (cases--) {
    map = ('0000000' + cases.toString(2)).slice(-7);
    i = 7;
    name = '';
    while (i--) { name = (map[i] === '1' ? upper[i] : lower[i]) + name; }
    names.push(name);
    originals[name] = window[name];
    window[name] = Quewery;
  }

  originals.Q = window.Q;
  window.Q = Quewery;
  originals.q = window.q;
  window.q = Quewery;

}(document, window));
