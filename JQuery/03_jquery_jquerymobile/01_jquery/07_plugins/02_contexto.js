(function( $ ){

  $.fn.myPlugin = function() {
  
    // no hay necesidad de hacer $(this) por que
    // "this" es ya el objeto jquery

    // $(this) seria lo mismo que $($('#element'));
        
    this.fadeIn('normal', function(){

      // la palabra this dentro de este contexto, es un elemento DOM
    	
    });

  };
})( jQuery );
$('#element').myPlugin();