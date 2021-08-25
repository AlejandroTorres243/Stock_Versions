(function( $ ){

  $.fn.lockDimensions = function( type ) {  

    return this.each(function() {

      var $this = $(this);

      if ( !type || type == 'width' ) {
        $this.width( $this.width() );
      }

      if ( !type || type == 'height' ) {
        $this.height( $this.height() );
      }

    });

  };
})( jQuery );

$('div').lockDimensions('width').css('color', 'red');