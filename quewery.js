/*
* Quewery.js (c) 2011 Dan Heberden
*
* Whatever license you want
*/
(function( document ) {
  this.Quewery = function( selector ) {
    return /^#[\w\-]+$/.test(selector)
      ? [ document.getElementById(selector.substr(1)) ]
      : document.querySelectorAll(selector);
  };
})(document);