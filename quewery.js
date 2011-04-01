/*
* Quewery.js (c) 2011 Dan Heberden
*
* Whatever license you want
*/
(function( document, w ){
  var oldQuewery = w.Quewery, Quewery = w.Quewery = function ( selector ) {
    return /#[^(.|\s|\[)]+$/.exec(selector) ? [ document.getElementById( selector.slice(1) ) ] :
      document.querySelectorAll( selector );
  };
  Quewery.noConflict = function() {
    w.Quewery = oldQuewery;
    return Quewery;
  };
})( document, window );