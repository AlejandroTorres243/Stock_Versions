
$(window).load(init);

function init() 
{
	$('#form').submit(enviaryrecibir);	
}

function enviaryrecibir(event)
{
	var usuario=$("#usuario").val();
	var pass=$("#pass").val();
	//alert(pass);
	var send={'username':usuario,'password':pass};
	//alert(send);
	$.post(
			$("#form").attr("action"),
			send,
			function(data){
				//como los datos recibidos son application/json los parsea automaticamente
				//alert(data.username);
				$("#resultado").html(
						"username:"+data.username
						+",pass:"+data.password);
			}
	).fail(function(){alert("fallo");})
	.done(function(){alert("hecho");})
	.always(function() { alert("finalizado"); })
	;	
	event.preventDefault();
}
