(function( $ ){

  $.fn.maxHeight = function() {
  
    var max = 0;

    this.each(function() {
    	
    	//ojo al uso del this en esta funcion:
    	//aqui this es el elemento dom, no jQuery
      max = Math.max( max, $(this).height() );
    });

    return max;
  };
})( jQuery );
var tallest = $('div').maxHeight(); // Devuelve la altura del div mas alto