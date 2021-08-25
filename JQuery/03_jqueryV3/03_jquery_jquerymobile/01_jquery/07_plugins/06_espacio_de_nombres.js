(function( $ ){

  $.fn.tooltip = function( options ) { 
    // ESTO
  };
  $.fn.tooltipShow = function( ) {
    // ES
  };
  $.fn.tooltipHide = function( ) { 
    // MALO
  };
  $.fn.tooltipUpdate = function( content ) { 
    // !!!  
  };

})( jQuery );

(function( $ ){

	  var methods = {
	    init : function( options ) { 
	      // ESTO
	    },
	    show : function( ) {
	      // ES
	    },
	    hide : function( ) { 
	      // BUENO
	    },
	    update : function( content ) { 
	      // !!! 
	    console.log(arguments);
	    }
	  };

	  $.fn.tooltip = function( method ) {
	    
	    // Logica de las llamadas
	    if ( methods[method] ) {
	    	
	    	return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	      
	    } else if ( typeof method === 'object' || ! method ) {
	    	
	    	return methods.init.apply( this, arguments );
	    	
	    } else {
	    	
	      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
	      
	    }    
	  
	  };

	})( jQuery );
/*
	// llama al metodo init
	$('div').tooltip(); 

	// Llama al metodo init
	$('div').tooltip({
	  foo : 'bar'
	});
	// Llama al metodo hide
	$('div').tooltip('hide'); 
	// Llama al metodo update
	$('div').tooltip('update', 'This is the new tooltip content!'); */