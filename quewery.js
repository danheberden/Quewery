/*
* Quewery.js (c) 2011 Dan Heberden
*
* Whatever license you want
*/
(function( document, window ) {
	
  var _Quewery = window.Quewery, 
			_Q = window.Q,
			Quewery = window.Q = window.Quewery = function ( selector ) {
    		return /^#[\w\-]+$/.test( selector )
      		? [ document.getElementById( selector.slice(1) ) ]
      		: document.querySelectorAll( selector );
  		};

  Quewery.noConflict = function( allTheWay ) {
    window.Q = _Q;
		allTheWay && ( window.Quewery = _Quewery );
    return Quewery;
  };

})( document, window );
