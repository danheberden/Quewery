/*
* Quewery.js (c) 2011 Dan Heberden
*
* Whatever license you want
*/
(function( document, w ){
	w.Quewery = function( selector ) {
			return /#[^\s]+$/.test( selector ) ? [ document.getElementById( selector.slice(1) ) ] : document.querySelectorAll( selector );
	};
})( document, window );