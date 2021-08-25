(function( $ ){

  $.fn.tooltip = function( options ) {  

    // Crea algunos valores por defecto extendiendolos con cualquier opcion que sea provista
    var settings = $.extend( {
      'location'         : 'top',
      'background-color' : 'blue'
    }, options);

    return this.each(function() {        

      // El codigo del plugin tooltip va aqui

    });

  };
})( jQuery );


$('div').tooltip({
  'location' : 'left'
});