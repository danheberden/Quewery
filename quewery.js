/*
* Quewery.js (c) 2011 Dan Heberden
*
* Whatever license you want
*/
(function( document, w ){
	w.Quewery = function( selector ) {
  	  if( selector.match(/#[^\s]+$/) ) {
	        return [ document.getElementById( selector.substring(1) ) ];
	    } else {
	        return document.querySelectorAll( selector );
	    }   
	}
})( document, window);