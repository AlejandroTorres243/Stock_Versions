/**
 * una vez cargado todos los elementos de la página
 * configuramos los controles con la función 
 * config
 */
$(window).load(config);

function config() 
{
	$('#lnkPersonasObtener').click(cargarListadoPersonas);	
}

function cargarListadoPersonas()
{
	$.ajax({
        url: 'json.php',
        type: 'POST',
        data: {nombreCliente:'Isaac', edadCliente: 24},                
        dataType: 'json',
        success: function(persona) {
			$('#divAvisoServer').html('');
			var contenidoSimpleHTML = '';
			var contenidoSelect = '<select>'        		
			var contenidoOL;
			var contenidoUL;        						
			for(index=0; index<persona.length; index++) {
				/**
						 * simple html
						 */
				contenidoSimpleHTML += persona[index].nombre 
				+ ' ' + persona[index].edad + '<br/>';                 
						
				/**
						 * dentro de un control select
						 */             		
				$('select').append('<option>' 
						+ persona[index].nombre 
						+  ' ' + persona[index].edad 
						+ '</option>');
				/**
						 * cargar elemento en tabla
						 */
				$('table').append(
						'<tr><td>' + persona[index].nombre 
						+  '</td><td>' + persona[index].edad 
						+ '</td></tr>');
				/**
						 * cargar en lista ordenada
						 */
				$('ol').append('<li>' + persona[index].nombre +  ' ' + persona[index].edad + '</li>');
				/**
						 * cargar en lista desordenada
						 */
				$('ul').append('<li>' + persona[index].nombre +  ' ' + persona[index].edad + '</li>');			
			}
			$('#divCargarHTML').html(contenidoSimpleHTML);
		},
		beforeSend: function() {
			/**
			* realizar algo mientra se realiza el proceso de envio y recepción
			*/
			$('#divAvisoServer').html('cargando...');
		}
	});
}

