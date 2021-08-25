
jQuery.fn.myPlugin = function() {

  // Haz las cosas increibles de tu plugin aquí

};



//IIFE Immediately Invoked Function Expression
(function( $ ) {
  $.fn.myPlugin = function() {
  
	  //	Haz las cosas increibles de tu plugin aquí

  };
})( jQuery );