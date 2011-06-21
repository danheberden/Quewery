
/*
* Quewery.js (c) 2011 Dan Heberden
*
* Whatever license you want
*/
(function( document, window ) {
	
function makeArray(arr){
    var ret=[],x;

    for(x=0;x<arr.length;x++){
        ret[x]=arr[x];
    }

    return ret;
}

  var _Quewery = window.Quewery, 
			_Q = window.Q,
			Quewery = window.Q = window.Quewery = function ( selector ) {
    		return /^#[\w\-]+$/.test( selector )
      		? [ document.getElementById( selector.slice(1) ) ]
		: selector=="body"&&document.body?[document.body]
      		: !/\W/.test(selector)? makeArray(document.getElementsByTagName(selector))
                : document.querySelectorAll( selector );
  		};

  Quewery.noConflict = function( allTheWay ) {
    window.Q = _Q;
		allTheWay && ( window.Quewery = _Quewery );
    return Quewery;
  };

})( document, window );
