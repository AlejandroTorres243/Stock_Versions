(function( $ ){

  var methods = {
     init : function( options ) {

       return this.each(function(){
         
         var $this = $(this),
             data = $this.data('tooltip'),             
             tooltip = $('<div />', {//revisar esta sintaxis :D
               text : $this.attr('title')
             });
         
         // Si el plugin aun no ha sido inicializado
         if ( ! data ) {         
           /*
             Haz mas cosas aqui
           */

           $(this).data('tooltip', {
               target : $this,
               tooltip : tooltip
           });

         }
       });
     },
     destroy : function( ) {

       return this.each(function(){

         var $this = $(this),
             data = $this.data('tooltip');

         // Usando espacios de nombre
         $(window).unbind('.tooltip');
         data.tooltip.remove();
         $this.removeData('tooltip');

       })

     },
     reposition : function( ) { // ... 
    	 },
     
     show : function( ) { // ... 
    	 },
     
     hide : function( ) { // ... 
    	 },
     
     update : function( content ) { // ...
    	 }
     
  };

  $.fn.tooltip = function( method ) {
    
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    
  
  };

})( jQuery );